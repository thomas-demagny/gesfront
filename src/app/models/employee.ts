import { PathLocationStrategy } from "@angular/common";
import {Address} from "./address";

export class Employee {
  id!: number;
  lastName!: string;
  firstName!: string;
  phoneNumber!: string;
  email!: string;
  login!: string;
  password!: string;
  createdAt!: Date;
  updatedAt?: Date;
  address!: Address;
 
}
