import { PaymentMethod } from "../enum";
import { Subscription } from "./subscription";
import { User } from "./user";

export interface Payment {
  id: string;
  client: User;
  subscription: Subscription;
  amount: number;
  paymentMethod: PaymentMethod;
  paidAt: Date;
}
