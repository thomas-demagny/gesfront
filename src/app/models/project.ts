import {Phase} from "./phase";
import {Organization} from "./organization";
import { User } from "./user";

export class Project {
  id!: number;
  name!: string;
  code?: string;
  amount!: number;
  createdAt!: Date;
  endedAt!: Date;
  startedAt!: Date;
  updatedAt!: Date;
  description!: string;
  phases?: Phase[];
  organization?: Organization;
  user?: User;
 

}
