import CoinTickerWS from "@interface/api/coin/CoinTickerWS";
interface OkxCoinTickerWS {
  instId: string;
  idxPx: string;
  high24h: string;
  low24h: string;
  open24h: string;
  sodUtc0: string;
  sodUtc8: string;
  ts: string;
}

function convertToCoinTickerWS(json: OkxCoinTickerWS): CoinTickerWS {
  const date = new Date(json.ts);
  date.setDate(date.getHours() + 1);
  const data: CoinTickerWS = {
    code: json.instId,
    high_price: parseFloat(json.high24h), //	고가	Double
    low_price: parseFloat(json.low24h), // 저가	Double
    trade_price: parseFloat(json.idxPx), //	현재가	Double

    change: "EVEN",
    signed_change_price: 0, //	부호가 있는 변화액	Double
    signed_change_rate: 0, //	부호가 있는 변화율	Double
    acc_trade_price_24h: 0, //24시간 누적 거래대금	Double
    acc_trade_volume_24h: 0, //	24시간 누적 거래량	Double
    ask_bid: "", //	ab	매수/매도 구분	String	ASK : 매도 BID : 매수
    trade_timestamp: date.getTime(), //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
    timestamp: date.getTime(),
  };
  return data;
}

export { OkxCoinTickerWS, convertToCoinTickerWS };
