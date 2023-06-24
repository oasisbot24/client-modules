interface CoinCandle {
  market: string; // 	마켓명	String
  candle_date_time_kst: string; //	캔들 기준 시각(KST 기준) 포맷: yyyy-MM-dd'T'HH:mm:ss	String
  opening_price: number; //	시가	Double
  high_price: number; //	고가	Double
  low_price: number; //	저가	Double
  trade_price: number; //	종가	Double
  timestamp: number; //	해당 캔들에서 마지막 틱이 저장된 시각	Long
  candle_acc_trade_price: number; //	누적 거래 금액	Double
  candle_acc_trade_volume: number; //	누적 거래량	Double
  unit: number; //	분 단위(유닛)	Integer
}

export default CoinCandle;
