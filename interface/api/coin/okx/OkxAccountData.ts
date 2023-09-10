interface OkxAccountData {
  adjEq: number;
  borrowFroz: number;
  details: Array<object>;
  imr: number;
  isoEq: number;
  mgnRatio: number;
  mmr: number;
  notionalUsd: number;
  ordFroz: number;
  totalEq: number;
  uTime: number;
}

function convertToNumber(accountData: OkxAccountData) {
  return accountData.totalEq;
}

export { OkxAccountData, convertToNumber };
