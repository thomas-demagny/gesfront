import {Phase} from "./phase";

export class Bill {
  id!: number;
  code!: string;
  amount!: number;
  status!: Status;
  phase!: Phase;

}

enum Status {
  EDITED = "Edité",
  TRANSMITTED = "Transmis",
  PAID = "Payé",
  BLOCKED = "Bloqué"
}
