import { InvestmentState } from '../Enums/koinfastEnums';

export class Investment {
  InvestmentNo: string;
  Amount: number;
  StartDate : string;
  EndDate : string;
  Payback : number;
  State : InvestmentState;
}