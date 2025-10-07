import { Category } from "./category";
import { Plan } from "./plan";
import { User } from "./user";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: Category;
  plans: Plan[];
  owner: User;
}
