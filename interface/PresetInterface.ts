import ParentIndicator from "@indicator/ParentIndicator";

interface PresetInterface {
  name: string;
  coin_type: string;
  indicators: ParentIndicator_Data[];
  profitCutRate: number;
  lossCutRate: number;
  isError: boolean;
}

export default PresetInterface;
