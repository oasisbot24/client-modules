import ParentIndicator_Data from "./ParentIndicator_Data";

interface Preset {
  name: string;
  coin_type: string;
  indicators: ParentIndicator_Data[];
  profitCutRate: number;
  lossCutRate: number;
  isError: boolean;
}

export default Preset;
