import {User} from "./user";

export class Role {
  id!: number;
  name!: string;
  roleList!: RoleList;
}

enum RoleList {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
  ACCOUNTANT = 'ROLE_ACCOUNTANT',
  PROJECT_MANAGER = 'ROLE_PROJECT_MANAGER',
  SECRETARY = 'ROLE_SECRETARY',
}
