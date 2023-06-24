interface CoinTickerAxios {
  market: string; //	종목 구분 코드	String
  high_price: number; //	고가	Double
  low_price: number; //	저가	Double
  trade_price: number; //	종가(현재가)	Double
  change: string; //	EVEN : 보합 RISE : 상승 FALL : 하락	String
  signed_change_price: number; //	부호가 있는 변화액	Double
  signed_change_rate: number; //	부호가 있는 변화율	Double
  acc_trade_price_24h: number; //24시간 누적 거래대금	Double
  acc_trade_volume_24h: number; //	24시간 누적 거래량	Double
  trade_timestamp: number; //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
  timestamp: number; //	타임스탬프	Long
}

export default CoinTickerAxios;
