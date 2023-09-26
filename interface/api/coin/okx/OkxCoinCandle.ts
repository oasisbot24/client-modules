import CoinCandle from "@interface/api/coin/CoinCandle";
import { dateToString } from "@function/string";

type OkxCoinCandle = [
  string, // timestamp
  string, // open
  string, // high
  string, // low
  string, // close
  string // state
];

function convertToCoinCandle(
  candle: OkxCoinCandle,
  coin: string,
  minute_length: number
) {
  const coinAccountData: CoinCandle = {
    market: coin,
    candle_date_time_kst: dateToString(new Date(parseInt(candle[0]))),
    opening_price: parseFloat(candle[1]), //	시가	Double
    high_price: parseFloat(candle[2]), //	고가	Double
    low_price: parseFloat(candle[3]), //	저가	Double
    trade_price: parseFloat(candle[4]), //	종가	Double
    timestamp: parseInt(candle[0]), //	해당 캔들에서 마지막 틱이 저장된 시각	Long
    candle_acc_trade_price: parseFloat(candle[5]) * parseFloat(candle[4]), //	누적 거래 금액	Double
    candle_acc_trade_volume: parseFloat(candle[5]), //	누적 거래량	Double
    unit: minute_length, //	분 단위(유닛)	Integer
  };
  return coinAccountData;
}

export { OkxCoinCandle, convertToCoinCandle };
