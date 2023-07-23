import IndicatorInterface from "@interface/IndicatorInterface";

const getDefaultIndicator = () => {
  const ret: IndicatorInterface = {
    title: "보조지표 선택",
    setting: {
      coin_type: {
        name: "기준코인",
        value: "",
      },
      standard_minute: {
        name: "기준분봉",
        value: 1,
      },
    },
    weight: {},
  };
  return ret;
};

export default getDefaultIndicator;
