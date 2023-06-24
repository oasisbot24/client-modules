import ParentAccount_Data from "./ParentAccount_Data";

interface BacktestState {
  isRunning: boolean;
  account: ParentAccount_Data | null;
}

export default BacktestState;
