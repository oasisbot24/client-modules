import ParentAccount_Data from "./ParentAccount_Data";

interface OasisbotState {
  isRunning: boolean;
  account: ParentAccount_Data | null;
  profitCutRate: number;
  lossCutRate: number;
  state: string;
}

export default OasisbotState;
