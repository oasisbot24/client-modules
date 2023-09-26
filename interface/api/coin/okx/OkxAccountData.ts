interface OkxAccountData {
  adjEq: string;
  borrowFroz: string;
  details: OkxAccountDetail[];
  imr: string;
  isoEq: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  ordFroz: string;
  totalEq: string;
  uTime: string;
}

interface OkxAccountDetail {
  availBal: string;
  availEq: string;
  cashBal: string;
  ccy: string;
  crossLiab: string;
  disEq: string;
  eq: string;
  eqUsd: string;
  fixedBal: string;
  frozenBal: string;
  interest: string;
  isoEq: string;
  isoLiab: string;
  isoUpl: string;
  liab: string;
  maxLoan: string;
  mgnRatio: string;
  notionalLever: string;
  ordFrozen: string;
  twap: string;
  uTime: string;
  upl: string;
  uplLiab: string;
  stgyEq: string;
  spotInUseAmt: string;
  borrowFroz: string;
}

function convertToNumber(accountData: OkxAccountData) {
  let usdt_balance = 0;
  accountData.details.forEach((detail) => {
    if (detail["ccy"] == "USDT") {
      usdt_balance = Number(detail["cashBal"]);
    }
  });
  return usdt_balance;
}

export { OkxAccountData, convertToNumber };
