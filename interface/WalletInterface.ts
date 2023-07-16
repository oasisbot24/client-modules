interface WalletInterface {
  assets: number;
  cash: number;
  coin: {
    type: string;
    balance: number;
    volume: number;
  };
}

export default WalletInterface;
