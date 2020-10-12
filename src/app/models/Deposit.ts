import { DepositState } from '../Enums/koinfastEnums';
import { Investment } from './Investments';
import { Investor } from './Investor';
import { Package } from './Packages';

export class Deposit
{
  id: number;
  refNo: string;
  proofUrl: string;
  amount: number;
  depositDate: Date;
  approvalDate: Date;
  investorId: number;
  investor: Investor;
  state: DepositState;
  packageId: number;
  package: Package;
  investment: Investment;
}

