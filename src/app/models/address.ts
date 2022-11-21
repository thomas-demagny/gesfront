import { Organization } from "./organization";
import { User } from "./user";

export class Address {
    id!: number;
    country!: string;
    streetLabel!: string;
    streetNumber!: number;
    zipCode!: number;
   user!: User;
    organization!: Organization;
    
    

}
