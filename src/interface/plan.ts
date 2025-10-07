import { Period } from "../enum";

export interface Plan {
  id: string;
  period: Period;
  price: number;
  active: boolean;
}
