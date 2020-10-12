import { PackageType } from '../Enums/koinfastEnums';

export class Package {
  id: number;
  name: string;
  price: number;
  packageType: PackageType;
  return: number;
  duration: number;
}