import {Address} from "./address";

export class Organization {
  id?: number;
  addrWeb!: string;
  contactEmail!: string;
  contactName!: string;
  name!: string;
  phoneNumber!: number;
  Addresses?: Address[];


}
