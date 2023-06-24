interface LbankCoinName {
  minTranQua: string; //	string	Yes	Min TranQua
  symbol: string; // 	string	Yes	Trading Pair，eth_btc：Ethereum， zec_btc：ZCash
  quantityAccuracy: string; // 	string	Yes	Quantity Accuracy
  priceAccuracy: string; //	string	Yes	Price Accuracy
}

export {LbankCoinName};
