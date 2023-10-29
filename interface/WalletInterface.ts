interface WalletInterface {
  long_wallet: {
    assets: number;
    cash: number;
    coin: {
      type: string;
      balance: number;
      volume: number;
    };
  }
  short_wallet: {
    assets: number;
    cash: number;
    coin: {
      type: string;
      balance: number;
      volume: number;
    };
  }
}

export default WalletInterface;
