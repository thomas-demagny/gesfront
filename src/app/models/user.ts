import {Address} from "./address";
import {Role} from "./role";

export class User {
  id!: number;
  fileNumber!: string;
  lastName!: string;
  firstName!: string;
  phoneNumber!: string;
  email!: string;
  username!: string;
  password!: string;
  createdAt!: Date;
  updatedAt?: Date;
  address!: Address;
  roles!: Role[];

}
