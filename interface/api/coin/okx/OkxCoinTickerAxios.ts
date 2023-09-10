import CoinTickerAxios from "@interface/api/coin/CoinTickerAxios";

interface OkxCoinTickerAxios {
  instId: string;
  idxPx: string;
  high24h: string;
  low24h: string;
  open24h: string;
  sodUtc0: string;
  sodUtc8: string;
  ts: string;
}

function convertToCoinTickerAxios(
  coinTicker: OkxCoinTickerAxios
): CoinTickerAxios {
  const date = new Date(coinTicker.ts);
  date.setDate(date.getHours() + 1);
  const ticker: CoinTickerAxios = {
    market: coinTicker.instId,
    high_price: parseFloat(coinTicker.high24h), //	고가	Double
    low_price: parseFloat(coinTicker.low24h), // 저가	Double
    trade_price: parseFloat(coinTicker.idxPx), //	현재가	Double
    change: "EVEN",
    signed_change_price: 0, //	부호가 있는 변화액	Double
    signed_change_rate: 0, //	부호가 있는 변화율	Double
    acc_trade_price_24h: 0, //24시간 누적 거래대금	Double
    acc_trade_volume_24h: 0, //	24시간 누적 거래량	Double
    trade_timestamp: date.getTime(), //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
    timestamp: date.getTime(),
  };
  return ticker;
}

export { OkxCoinTickerAxios, convertToCoinTickerAxios };
