interface BacktestProgress {
  cache: {
    coin: string;
    date: string;
    progress: number;
  };
  main: {
    progress: number;
  };
}

export default BacktestProgress;
