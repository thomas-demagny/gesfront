import {User} from "./user";

export class Role {
  id!: number;
  name!: string;
  roleList!: RoleList;
}

enum RoleList {
  ROLE_ADMIN = 'ADMIN',
  ROLE_USER = 'USER',
  ROLE_ACCOUNTANT = 'ACCOUNTANT',
  ROLE_PROJECT_MANAGER = 'PROJECT_MANAGER',
  ROLE_SECRETARY = 'SECRETARY',
}
