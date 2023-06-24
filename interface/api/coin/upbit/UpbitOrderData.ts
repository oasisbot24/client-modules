import OrderData from '@interface/api/coin/CoinOrder';
import {dateToString} from '@function/string';
interface UpbitOrderData {
  uuid: string; // 주문의 고유 아이디	String
  side: string; // 주문 종류	String
  ord_type: string; // 주문 방식	String
  price: string; // 주문 당시 화폐 가격	NumberString
  state: string; // 주문 상태	String
  market: string; // 마켓의 유일키	String
  created_at: string; //	주문 생성 시간	DateString
  volume: string; // 주문 생성 시간	String
  remaining_volume: string; // 체결 후 남은 주문 양 NumberString
  reserved_fee: string; // 수수료로 예약된 비용 NumberString
  remaining_fee: string; // 남은 수수료 NumberString
  paid_fee: string; // 사용된 수수료 NumberString
  locked: string; // 거래에 사용중인 비용 NumberString
  executed_volume: string; // 체결된 양 NumberString
  trades_count: number; // 해당 주문에 걸린 체결 수 Integer,
  trades: {
    // 체결	Array[Object]
    market: string; // 	마켓의 유일 키	String
    uuid: string; //체결의 고유 아이디	String
    price: string; // 체결 가격	NumberString
    volume: string; //	체결 양	NumberString
    funds: string; // 	체결된 총 가격	NumberString
    side: string; // 	체결 종류	String
    created_at: string; // 	체결 시각	DateString
  }[];
}

function convertToOrderData(data: UpbitOrderData): OrderData {
  let price = 0;
  let volume = 0;
  let funds = 0;
  for (let idx = 0; idx < data.trades.length; idx++) {
    volume += parseFloat(data.trades[idx].volume);
    funds += parseFloat(data.trades[idx].funds);
  }
  price = funds / volume;

  return {
    uuid: data.uuid,
    market: data.side,
    ord_type: data.ord_type,
    created_at: dateToString(new Date(data.created_at)),
    price: price,
    volume: volume,
    funds: funds,
    state: data.state,
  };
}

export {UpbitOrderData, convertToOrderData};
