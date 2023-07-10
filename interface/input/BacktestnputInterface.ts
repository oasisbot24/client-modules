import TradeInputInterface from "./TradeInputInterface";

interface BacktestInputInterface extends TradeInputInterface {
  startDate: string;
  endDate: string;
}

export default BacktestInputInterface;
