interface LbankAccountData {
  freeze: {
    [key: string]: number;
  }; //	Frozen balance of the asset
  asset: {
    [key: string]: number; //	Total balance of the asset
  }; //	Total balance of the asset
  free: {
    [key: string]: number;
  }; //	Available balance of the account
}

function convertToNumber(accountData: LbankAccountData) {
  return accountData.asset.usdt;
}

export {LbankAccountData, convertToNumber};
