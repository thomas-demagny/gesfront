import {Phase} from "./phase";

export class Bill {
  id!: number;
  code!: string;
  amount!: number;
  status!: Status;
  Phase!: Phase;

}

enum Status {
  EDITED = "EDITED",
  TRANSMITTED = "TRANSMITTED",
  PAID = "PAID",
  BLOCKED = "BLOCKED"
}
