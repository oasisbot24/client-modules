import IndicatorInterface from "electron/modules/class/IndicatorSetting";

const getIndicatorInterface = () => {
  const ret: IndicatorInterface = {
    title: "보조지표 선택",
    setting: {
      coin_type: {
        name: '기준코인',
        value: '',
      },
      standard_minute: {
        name: '기준분봉',
        value: 1,
      },
    },
    weight: {},
  };
  return ret;
};

export default getIndicatorInterface;
