interface UpbitAccountData {
  currency: string; //	화폐를 의미하는 영문 대문자 코드	String
  balance: string; //	주문가능 금액/수량	NumberString
  locked: string; //	주문 중 묶여있는 금액/수량	NumberString
  avg_buy_price: string; //	매수평균가	NumberString
  avg_buy_price_modified: boolean; //	매수평균가 수정 여부	Boolean
  unit_currency: string; //	평단가 기준 화폐	String
}

export {UpbitAccountData};
