import { investorTitle } from '../Enums/investorTitle';

export class Investor {
  Title: investorTitle;
  Name: string;
  Surname: string;
  Phone: string;
  Country: string;
  City: string;
  AccNo: string;
  Bank: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  SponsorId: number;
}
