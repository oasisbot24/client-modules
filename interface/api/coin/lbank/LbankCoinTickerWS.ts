import CoinTickerWS from '@interface/api/coin/CoinTickerWS';
interface LbankCoinTickerWS {
  tick: {
    high: number; //	BigDecimal	Highest price in last 24 hours
    low: number; //	BigDecimal	Lowest price in last 24 hours
    latest: number; //	BigDecimal	Lastest traded price
    vol: number; //	BigDecimal	Trading volume
    turnover: number; //	BigDecimal	Aggregated turnover (summation of price times volume for each trade)
    to_cny: number; //	BigDecimal	Such as eth_btc, convert btc into cny
    to_usd: number; //	BigDecimal	Such as eth_btc, convert btc into usd
    cny: number; //	BigDecimal	Such as eth_btc, convert eth into cny
    usd: number; //	BigDecimal	Such as eth_btc, convert eth into usd
    dir: string; // 	String	sell, buy
    change: number; //	BigDecimal	Price limit in last 24 hours
  };
  type: string;
  pair: string;
  TS: number;
  ping: string;
  action: string;
}

function convertToCoinTickerWS(json: LbankCoinTickerWS): CoinTickerWS {
  const date = new Date(json.TS);
  date.setDate(date.getHours() + 1);
  const data: CoinTickerWS = {
    code: json.pair,
    high_price: json.tick.high, //	고가	Double
    low_price: json.tick.low, //
    trade_price: json.tick.latest,

    change:
      json.tick.change > 0 ? 'RISE' : json.tick.change == 0 ? 'EVEN' : 'FALL',
    signed_change_price: 0, //	부호가 있는 변화액	Double
    signed_change_rate: json.tick.change / 100, //	부호가 있는 변화율	Double
    acc_trade_price_24h: json.tick.vol * json.tick.latest, //24시간 누적 거래대금	Double
    acc_trade_volume_24h: json.tick.vol, //	24시간 누적 거래량	Double
    ask_bid: json.tick.dir === 'buy' ? 'BID' : 'ASK', //	ab	매수/매도 구분	String	ASK : 매도 BID : 매수
    trade_timestamp: date.getTime(), //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
    timestamp: date.getTime(),
  };
  return data;
}

export {LbankCoinTickerWS, convertToCoinTickerWS};
