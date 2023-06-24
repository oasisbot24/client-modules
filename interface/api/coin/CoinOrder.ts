interface OrderData {
  uuid: string; // 주문의 고유 아이디	String
  market: string; // 마켓의 유일키	String
  created_at: string; //	주문 생성 시간	DateString
  ord_type: string; // 주문 방식	String
  state: string; // 주문 상태	["done", "cancel", "done partially",
  // "done partially and cancel", "wait"]
  price: number; // 체결 평균 가격	NumberString
  volume: number; // 체결된 양 NumberString
  funds: number; // 주문에 사용격 총 금액	NumberString
}

export default OrderData;
