import CoinTickerAxios from '@interface/api/coin/CoinTickerAxios';

interface LbankCoinTickerAxios {
  symbol: string; //	Market Symbol
  ticker: {
    high: number; //	24 hr highest price
    low: number; // 24 hr lowest price
    vol: number; // 24 hr trading volume
    change: number; //	Fluctuation (%) in 24 hr
    turnover: number; //	Total Turn over in 24 hr
    latest: number; //	Latest Price
  };
  timestamp: number; //	Timestamp of latest transaction
}

function convertToCoinTickerAxios(
  coinTicker: LbankCoinTickerAxios,
): CoinTickerAxios {
  const ticker: CoinTickerAxios = {
    market: coinTicker.symbol,
    high_price: coinTicker.ticker.high,
    low_price: coinTicker.ticker.low,
    trade_price: coinTicker.ticker.latest,
    change:
      coinTicker.ticker.change > 0
        ? 'RISE'
        : coinTicker.ticker.change == 0
        ? 'EVEN'
        : 'FALL',
    signed_change_price: coinTicker.ticker.change * coinTicker.ticker.latest,
    signed_change_rate: coinTicker.ticker.change / 100,
    acc_trade_price_24h: coinTicker.ticker.vol * coinTicker.ticker.latest, //24시간 누적 거래대금	Double
    acc_trade_volume_24h: coinTicker.ticker.vol, //	24시간 누적 거래량	Double
    trade_timestamp: coinTicker.timestamp,
    timestamp: coinTicker.timestamp,
  };
  return ticker;
}

export {LbankCoinTickerAxios, convertToCoinTickerAxios};
