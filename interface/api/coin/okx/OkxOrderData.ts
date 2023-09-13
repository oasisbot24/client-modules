import OrderData from "@interface/api/coin/CoinOrder";
import { dateToString } from "@function/string";

interface OkxOrderData {
  instType: string; //	Instrument type
  /*
  SPOT
  MARGIN
  SWAP
  FUTURES
  OPTION
  */
  instId: string; //	Instrument ID
  tgtCcy: string; //	Order quantity unit setting for sz
  /*
  base_ccy: Base currency ,quote_ccy: Quote currency
  Only applicable to SPOT Market Orders
  Default is quote_ccy for buy, base_ccy for sell
  */
  ccy: string; //	Margin currency
  //Only applicable to cross MARGIN orders in Single-currency margin.
  ordId: string; //	Order ID
  clOrdId: string; //	Client Order ID as assigned by the client
  tag: string; //	Order tag
  px: string; //	Price
  //For options, use coin as unit (e.g., BTC, ETH)
  pxUsd: string; //	Options price in USDOnly applicable to options; return "" for other instrument types
  pxVol: string; //	Implied volatility of the options orderOnly applicable to options; return "" for other instrument types
  pxType: string; //	Price type of options
  /*
  px: Place an order based on price, in the unit of coin (the unit for the request parameter px is BTC or ETH)
  pxVol: Place an order based on pxVol
  pxUsd: Place an order based on pxUsd, in the unit of USD (the unit for the request parameter px is USD)
  */
  sz: string; //	Quantity to buy or sell
  pnl: string; //	Profit and loss, Applicable to orders which have a trade and aim to close position. It always is 0 in other conditions
  ordType: string; //	Order type
  /*
  market: Market order
  limit: Limit order
  post_only: Post-only order
  fok: Fill-or-kill order
  ioc: Immediate-or-cancel order
  optimal_limit_ioc: Market order with immediate-or-cancel order
  mmp：Market Maker Protection (only applicable to Option in Portfolio Margin mode)
  mmp_and_post_only：Marekt Maker Protection and Post-only order(only applicable to Option in Portfolio Margin mode)
  */
  side: string; //	Order side
  posSide: string; //	Position side
  tdMode: string; //	Trade mode
  accFillSz: string; //	Accumulated fill quantity
  /*
  The unit is base_ccy for SPOT and MARGIN, e.g. BTC-USDT, the unit is BTC; For market orders, the unit both is base_ccy when the tgtCcy is base_ccy or quote_ccy;
  The unit is contract for FUTURES/SWAP/OPTION 
  */
  fillPx: string; //	Last filled price. If none is filled, it will return "".
  tradeId: string; //	Last traded ID
  fillSz: string; //	Last filled quantity
  /*
  The unit is base_ccy for SPOT and MARGIN, e.g. BTC-USDT, the unit is BTC; For market orders, the unit both is base_ccy when the tgtCcy is base_ccy or quote_ccy;
  The unit is contract for FUTURES/SWAP/OPTION
  */
  fillTime: string; //	Last filled time
  avgPx: string; //	Average filled price. If none is filled, it will return "".
  state: string; //	State
  /*
  canceled
  live
  partially_filled
  filled
  mmp_canceled
  */
  stpId: string; //	Self trade prevention ID
  //Return "" if self trade prevention is not applicable
  stpMode: string; //	Self trade prevention mode
  //Return "" if self trade prevention is not applicable
  lever: string; //	Leverage, from 0.01 to 125.
  //Only applicable to MARGIN/FUTURES/SWAP
  attachAlgoClOrdId: string; //	Client-supplied Algo ID when plaing order attaching TP/SL.
  tpTriggerPx: string; //	Take-profit trigger price.
  tpTriggerPxType: string; //	Take-profit trigger price type.
  /*
  last: last price
  index: index price
  mark: mark price
  */
  tpOrdPx: string; //	Take-profit order price.
  slTriggerPx: string; //	Stop-loss trigger price.
  slTriggerPxType: string; //	Stop-loss trigger price type.
  /*
  last: last price
  index: index price
  mark: mark price
  */
  slOrdPx: string; //	Stop-loss order price.
  feeCcy: string; //	Fee currency
  fee: string; //	Fee and rebate
  //For spot and margin, it is accumulated fee charged by the platform. It is always negative, e.g. -0.01.
  //For Futures, Swap and Options, it is accumulated fee and rebate
  rebateCcy: string; //	Rebate currency
  source: string; //	Order source
  //13:The generated limit order after the strategy order is triggered
  rebate: string; //	Rebate amount, only applicable to spot and margin, the reward of placing orders from the platform (rebate) given to user who has reached the specified trading level. If there is no rebate, this field is "".
  category: string; //	Category
  /*
  normal
  twap
  adl
  full_liquidation
  partial_liquidation
  delivery
  ddh
  */
  reduceOnly: string; //	Whether the order can only reduce the position size. Valid options: true or false.
  cancelSource: string; //	Code of the cancellation source.
  cancelSourceReason: string; //	Reason for the cancellation.
  quickMgnType: string; //	Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
  //manual, auto_borrow, auto_repay
  algoClOrdId: string; //	Client-supplied Algo ID. There will be a value when algo order attaching algoClOrdId is triggered, or it will be "".
  algoId: string; //	Algo ID. There will be a value when algo order is triggered, or it will be "".
  uTime: string; //	Update time, Unix timestamp format in milliseconds, e.g. 1597026383085
  cTime: string; //	Creation time, Unix timestamp format in milliseconds, e.g. 1597026383085
}

function convertToOrderData(data: OkxOrderData): OrderData {
  let state;
  if (data.state === "canceled") state = "cancel";
  else if (data.state === "live") state = "wait";
  else if (data.state === "partially_filled") state = "done partially";
  else if (data.state === "mmp_canceled") state = "done partially and cancel";
  else if (data.state === "filled") state = "done";
  else state = "Unknown";

  return {
    uuid: data.ordId,
    market: data.instId,
    created_at: dateToString(new Date(parseInt(data.cTime))),
    ord_type: data.ordType,
    state: state,
    price: parseFloat(data.avgPx),
    volume: parseFloat(data.accFillSz),
    funds: parseFloat(data.accFillSz) * parseFloat(data.avgPx),
  };
}

export { OkxOrderData, convertToOrderData };
