import CoinCandle from '@interface/api/coin/CoinCandle';
import {dateToString} from '@function/string';

type LbankCoinCandle = [
  number, // timestamp
  number, // open
  number, // high
  number, // low
  number, // close
  number, // volume
];

function convertToCoinCandle(
  candle: LbankCoinCandle,
  coin: string,
  minute_length: number,
) {
  const coinAccountData: CoinCandle = {
    market: coin,
    candle_date_time_kst: dateToString(new Date(candle[0] * 1000)),
    opening_price: candle[1], //	시가	Double
    high_price: candle[2], //	고가	Double
    low_price: candle[3], //	저가	Double
    trade_price: candle[4], //	종가	Double
    timestamp: candle[0] * 1000, //	해당 캔들에서 마지막 틱이 저장된 시각	Long
    candle_acc_trade_price: candle[5] * candle[4], //	누적 거래 금액	Double
    candle_acc_trade_volume: candle[5], //	누적 거래량	Double
    unit: minute_length, //	분 단위(유닛)	Integer
  };
  return coinAccountData;
}

export {LbankCoinCandle, convertToCoinCandle};
