import ParentIndicator_Data from "@interface/ParentIndicator_Data";
import { getIndicator } from '@filesystem/indicator';
import Exchange from '@trade/Exchange';

const isValidIndicator = (indicator : ParentIndicator_Data) => {
	if (typeof indicator.title !== "string")
		return false;
	if (typeof indicator.setting !== "object")
		return false;
	if (typeof indicator.setting.coin_type !== "object")
		return false;
	if (typeof indicator.setting.coin_type.name !== "string")
		return false;
	if (typeof indicator.setting.coin_type.value !== "string")
		return false;
	if (!Exchange.getCoinList().includes(indicator.setting.coin_type.value))
		return false;
	if (typeof indicator.setting.standard_minute !== "object")
		return false;
	if (typeof indicator.setting.standard_minute.name !== "string")
		return false;
	if (typeof indicator.setting.standard_minute.value !== "number")
		return false;
	if (![1, 3, 5, 15, 30, 60, 240].includes(indicator.setting.standard_minute.value))
		return false;
	if (typeof indicator.weight !== "object")
		return false;
	for (const key in indicator.weight) {
		if (typeof indicator.weight[key].name !== "string")
			return false;
		if (typeof indicator.weight[key].value !== "number")
			return false;
	}
	try {
		getIndicator(indicator);
	} catch (error) {
		return false;
	}
	return true;
}

export default isValidIndicator;
