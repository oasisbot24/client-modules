import OrderData from '@interface/api/coin/CoinOrder';
import {dateToString} from '@function/string';

interface LbankOrderData {
  symbol: string; //	string	Yes	Trading Pair，eth_btc：Ethereum， zec_btc：ZCash
  order_id: string; //	string	Yes	Order ID (For single order)
  type: string; //	string	Yes	trade type: buy, sell, buy_market, sell_market, buy_maker, sell_maker, buy_ioc, sell_ioc, buy_fok, sell_fok
  create_time: number; //string	Yes	order time
  price: number; //	string	Yes	price
  avg_price: number; //string	Yes	Average strike price
  amount: number; //	string	Yes	required volume
  deal_amount: number; //	string	Yes	filled volume
  status: number; //	string	Yes	Status
  orders: []; //	object	No	A list of querying orders
  //-1：Cancelled
  //0：on trading
  //1： filled partially
  //3：filled partially and cancelled
  //2：Filled totally
  //4：Cancelling
}

function convertToOrderData(data: LbankOrderData): OrderData {
  let state;
  if (data.status == -1) state = 'cancel';
  else if (data.status == 0) state = 'wait';
  else if (data.status == 1) state = 'done partially';
  else if (data.status == 3) state = 'done partially and cancel';
  else if (data.status == 2) state = 'done';
  else if (data.status == 4) state = 'cancelling';
  else state = 'Unknown';

  return {
    uuid: data.order_id,
    market: data.symbol,
    created_at: dateToString(new Date(data.create_time)),
    ord_type: data.type,
    state: state,
    price: data.avg_price,
    volume: data.deal_amount,
    funds: data.avg_price * data.deal_amount,
  };
}

export {LbankOrderData, convertToOrderData};
