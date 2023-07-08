import TradeInputInterface from "@interface/TradeInputInterface";

interface BacktestInputInterface extends TradeInputInterface {
  startDate: string;
  endDate: string;
}

export default BacktestInputInterface;
