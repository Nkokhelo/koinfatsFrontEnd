import { investorTitle } from '../Enums/investorTitle';

export class Investor {
  title: investorTitle;
  name: string;
  surname: string;
  phone: string;
  country: string;
  city: string;
  accNo: string;
  bank: string;
  email: string;
  password: string;
  confirmPassword: string;
  sponsorId: number;
}
