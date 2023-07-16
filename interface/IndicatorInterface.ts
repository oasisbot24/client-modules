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
    weight: {
      [key: string]: {
        name: string;
        value: number;
      };
    };
  }
  
  export default IndicatorInterface;
