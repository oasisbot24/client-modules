interface AnalyzeHistory {
  winrate: {[key: string]: number}; // 승률
  tradecoin: {[key: string]: number};
  startaccount: number;
  nowaccount: number;
  maxaccount: number;
  profitloss: number;
  profitlossrate: number;
  mean_waiting: number; // 평균진입시간
  mean_holding: number; // 진입후 평균보유시간
  mean_trading_in_month: number; // 월 평균 매매 횟수
  volatility: number; // 변동성
  max_profitlossrate: number; // 최대 수익
  min_profitlossrate: number; // 최대 손실
}

const InitAnalyzeHistory: AnalyzeHistory = {
  winrate: {},
  tradecoin: {},
  startaccount: 0,
  nowaccount: 0,
  maxaccount: 0,
  profitloss: 0,
  profitlossrate: 0,
  mean_waiting: 0,
  mean_holding: 0,
  mean_trading_in_month: 0,
  volatility: 0,
  max_profitlossrate: 0,
  min_profitlossrate: 0,
};

export {InitAnalyzeHistory};
export default AnalyzeHistory;
