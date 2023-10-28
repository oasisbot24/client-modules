interface IndicatorInterface {
  title: string;
  setting: {
    [key: string]: {
      name: string;
      value: any;
    };
    coin_type: {
      name: string;
      value: any;
    };
    standard_minute: {
      name: string;
      value: any;
    };
  };
  long_weight: {
    [key: string]: {
      name: string;
      value: number;
    };
  };
  short_weight: {
    [key: string]: {
      name: string;
      value: number;
    };
  };
}

const InitialIndicatorInterface: IndicatorInterface = {
  title: '',
  long_weight: {},
  short_weight: {},
  setting: {
    coin_type: {
      name: '',
      value: 0,
    },
    standard_minute: {
      name: '',
      value: 0,
    },
  },
};

export default IndicatorInterface;

export {InitialIndicatorInterface};
