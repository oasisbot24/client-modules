interface ParentAccount_Data {
  assets: number;
  cash: number;
  coin: {
    type: string;
    balance: number;
    volume: number;
  };
}

export default ParentAccount_Data;
