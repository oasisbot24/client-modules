interface UpbitCoinTickerAxios {
  market: string; //	종목 구분 코드	String
  trade_date: string; //	최근 거래 일자(UTC) 포맷: yyyyMMdd	String
  trade_time: string; //	최근 거래 시각(UTC) 포맷: HHmmss	String
  trade_date_kst: string; //	최근 거래 일자(KST) 포맷: yyyyMMdd	String
  trade_time_kst: string; //	최근 거래 시각(KST) 포맷: HHmmss	String
  trade_timestamp: number; //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
  opening_price: number; //	시가	Double
  high_price: number; //	고가	Double
  low_price: number; //	저가	Double
  trade_price: number; //	종가(현재가)	Double
  prev_closing_price: number; //	전일 종가(UTC 0시 기준)	Double
  change: string; //	EVEN : 보합 RISE : 상승 FALL : 하락	String
  change_price: number; //	변화액의 절대값	Double
  change_rate: number; //	변화율의 절대값	Double
  signed_change_price: number; //	부호가 있는 변화액	Double
  signed_change_rate: number; //	부호가 있는 변화율	Double
  trade_volume: number; //	가장 최근 거래량	Double
  acc_trade_price: number; // 누적 거래대금(UTC 0시 기준)	Double
  acc_trade_price_24h: number; //24시간 누적 거래대금	Double
  acc_trade_volume: number; //	누적 거래량(UTC 0시 기준)	Double
  acc_trade_volume_24h: number; //	24시간 누적 거래량	Double
  highest_52_week_price: number; //	52주 신고가	Double
  highest_52_week_date: string; //	52주 신고가 달성일 포맷: yyyy-MM-dd	String
  lowest_52_week_price: number; //	52주 신저가	Double
  lowest_52_week_date: string; //	52주 신저가 달성일 포맷: yyyy-MM-dd	String
  timestamp: number; //	타임스탬프	Long
}

export {UpbitCoinTickerAxios};
