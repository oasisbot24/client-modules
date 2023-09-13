import CoinTickerAxios from "@interface/api/coin/CoinTickerAxios";

interface OkxCoinTickerAxios {
  instType: string; //	String	Instrument type
  instId: string; //	String	Instrument ID
  last: string; //	String	Last traded price
  lastSz: string; //	String	Last traded size
  askPx: string; //	String	Best ask price
  askSz: string; //	String	Best ask size
  bidPx: string; //	String	Best bid price
  bidSz: string; //	String	Best bid size
  open24h: string; //	String	Open price in the past 24 hours
  high24h: string; //	String	Highest price in the past 24 hours
  low24h: string; //	String	Lowest price in the past 24 hours
  volCcy24h: string; //	String	24h trading volume, with a unit of currency.
  //If it is a derivatives contract, the value is the number of base currency.
  //If it is SPOT/MARGIN, the value is the quantity in quote currency.
  vol24h: string; //	String	24h trading volume, with a unit of contract.
  //If it is a derivatives contract, the value is the number of contracts.
  //If it is SPOT/MARGIN, the value is the quantity in base currency.
  sodUtc0: string; //	String	Open price in the UTC 0
  sodUtc8: string; //	String	Open price in the UTC 8
  ts: string; //	String	Ticker data generation time, Unix timestamp format in milliseconds, e.g. 1597026383085.
}

function convertToCoinTickerAxios(
  coinTicker: OkxCoinTickerAxios
): CoinTickerAxios {
  const ticker: CoinTickerAxios = {
    market: coinTicker.instId,
    high_price: parseFloat(coinTicker.high24h), //	고가	Double
    low_price: parseFloat(coinTicker.low24h), // 저가	Double
    trade_price: parseFloat(coinTicker.last), //	현재가	Double
    change: "EVEN",
    signed_change_price: 0, //	부호가 있는 변화액	Double
    signed_change_rate: 0, //	부호가 있는 변화율	Double
    acc_trade_price_24h: parseFloat(coinTicker.volCcy24h), //24시간 누적 거래대금	Double
    acc_trade_volume_24h: parseFloat(coinTicker.vol24h), //	24시간 누적 거래량	Double
    trade_timestamp: parseInt(coinTicker.ts),
    timestamp: parseInt(coinTicker.ts),
  };
  return ticker;
}

export { OkxCoinTickerAxios, convertToCoinTickerAxios };
