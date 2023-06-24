import isValidIndicator from "@function/isValidIndicator";
import Preset from "@interface/Preset";
import Exchange from '@trade/Exchange';

const isValidPreset = (preset : Preset) => {
	if (typeof preset.coin_type !== "string")
		return false;
	if (!Exchange.getCoinList().includes(preset.coin_type))
		return false;
	if (typeof preset.name !== "string")
		return false;
	if (typeof preset.profitCutRate !== "number")
		return false;
	if (typeof preset.lossCutRate !== "number")
		return false;
	if (preset.profitCutRate <= 0 || preset.lossCutRate >= 0)
		return false;
	if (typeof preset.indicators !== "object")
		return false;
	for (let i=0;i<preset.indicators.length;i++) {
		if (isValidIndicator(preset.indicators[i]) == false)
			return false;
	}
	return true;
}

export default isValidPreset;
