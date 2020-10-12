export enum DepositState {
  Pending,
  Approved,
  Declined,
  Withdrawn,
}

export enum PackageType {
  Shares,
  Investment,
}

//Pending -If a send a request to invest
//Requested -If a send a request to withdraw
export enum InvestmentState {
  Pending,
  Invested,
  Matured,
  Requested,
  Withdrawn,
  Declined,
}
export enum ProcessType {
  Deposit,
  Withdraw,
}
