import IndicatorInterface from '@interface/IndicatorInterface';

interface PresetInterface {
  name: string;
  coin_type: string;
  indicators: IndicatorInterface[];
  profitCutRate: number;
  lossCutRate: number;
  isError: boolean;
}

const InitialPresetInterface: PresetInterface = {
  name: '',
  coin_type: '',
  indicators: [],
  profitCutRate: 0,
  lossCutRate: 0,
  isError: false,
};

export default PresetInterface;

export {InitialPresetInterface};
