import ParentIndicator_Data from "./ParentIndicator_Data";

interface Preset {
  name: string;
  coin_type: string;
  indicators: IndicatorInterface[];
  profitCutRate: number;
  lossCutRate: number;
  isError: boolean;
}

export default Preset;
