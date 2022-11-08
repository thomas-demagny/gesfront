import {Phase} from "./phase";
import {Organization} from "./organization";

export class Project {
  id!: number;
  amount!: number;
  creationDate!: Date;
  endDate!: Date;
  startDate!: Date;
  updateDate!: Date;
  description!: string;
  name!: string;
  projectCode?: string;
  Phases?: Phase[];
  Organization?: Organization;
  /*   ChefProjet?: ProjectManager;

  */
}
