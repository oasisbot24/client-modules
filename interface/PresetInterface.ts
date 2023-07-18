import IndicatorInterface from "@interface/IndicatorInterface";

interface PresetInterface {
  name: string;
  coin_type: string;
  indicators: IndicatorInterface[];
  profitCutRate: number;
  lossCutRate: number;
  isError: boolean;
}

export default PresetInterface;
