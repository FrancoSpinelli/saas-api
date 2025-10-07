import { Plan } from "./plan";
import { Service } from "./service";
import { User } from "./user";

export interface Subscription {
  id: string;
  client: User;
  plan: Plan;
  service: Service;
  startDate: Date;
  endDate: Date;
  paid: boolean;
}
