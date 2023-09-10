interface OkxCoinName {
  instType: string; //	String	Instrument type
  instId: string; //	String	Instrument ID, e.g. BTC-USD-SWAP
  uly: string; //String	Underlying, e.g. BTC-USD
  // Only applicable to FUTURES/SWAP/OPTION
  instFamily: string; //	String	Instrument family, e.g. BTC-USD
  // Only applicable to FUTURES/SWAP/OPTION
  category: string; //	String	Currency category. Note: this parameter is already deprecated
  baseCcy: string; //	String	Base currency, e.g. BTC inBTC-USDT
  // Only applicable to SPOT/MARGIN
  quoteCcy: string; //	String	Quote currency, e.g. USDT in BTC-USDT
  // Only applicable to SPOT/MARGIN
  settleCcy: string; //	String	Settlement and margin currency, e.g. BTC
  // Only applicable to FUTURES/SWAP/OPTION
  ctVal: string; //	String	Contract value
  // Only applicable to FUTURES/SWAP/OPTION
  ctMult: string; //	String	Contract multiplier
  // Only applicable to FUTURES/SWAP/OPTION
  ctValCcy: string; //	String	Contract value currency
  // Only applicable to FUTURES/SWAP/OPTION
  optType: string; //	String	Option type, C: Call P: put
  // Only applicable to OPTION
  stk: string; //	String	Strike price
  // Only applicable to OPTION
  listTime: string; //	String	Listing time, Unix timestamp format in milliseconds, e.g. 1597026383085
  expTime: string; //	String	Expiry time
  // Applicable to SPOT/MARGIN/FUTURES/SWAP/OPTION. For FUTURES/OPTION, it is natural delivery/exercise time. It is the instrument offline time when there is SPOT/MARGIN/FUTURES/SWAP/ manual offline. Update once change.
  lever: string; //	String	Max Leverage,
  // Not applicable to SPOT, OPTION
  tickSz: string; //	String	Tick size, e.g. 0.0001
  // For Option, it is minimum tickSz among tick band, please use "Get option tick bands" if you want get option tickBands.
  lotSz: string; //	String	Lot size, e.g. BTC-USDT-SWAP: 1
  minSz: string; //	String	Minimum order size.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in base currency.
  ctType: string; //	String	Contract type
  /*
  linear: linear contract
  inverse: inverse contract
  // Only applicable to FUTURES/SWAP
  */
  alias: string; //	String	Alias

  /*
  this_week
  next_week
  quarter
  next_quarter
  Only applicable to FUTURES
  */
  state: string; //	String	Instrument status
  /*
  live
  suspend
  preopen. e.g. There will be preopen before the Futures and Options new contracts state is live.
  test: Test pairs, can't be traded
  */
  maxLmtSz: string; //	String	The maximum order quantity of the contract or spot limit order.

  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in base currency.
  maxMktSz: string; //	String	The maximum order quantity of the contract or spot market order.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in "USDT".
  maxTwapSz: string; //	String	The maximum order quantity of the contract or spot twap order.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in base currency.
  maxIcebergSz: string; //	String	The maximum order quantity of the contract or spot iceBerg order.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in base currency.
  maxTriggerSz: string; //	String	The maximum order quantity of the contract or spot trigger order.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in base currency.
  maxStopSz: string; //	String	The maximum order quantity of the contract or spot stop market order.
  // If it is a derivatives contract, the value is the number of contracts.
  // If it is SPOT/MARGIN, the value is the quantity in "USDT".
}

export { OkxCoinName };
