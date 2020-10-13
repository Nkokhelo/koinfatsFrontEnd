import { InvestmentState } from '../Enums/koinfastEnums';

export class Investment {
  investmentNo: string;
  amount: number;
  startDate : string;
  endDate : string;
  payback : number;
  state : InvestmentState;
}