import { z } from "zod";
import { Role } from "../../enum";
import { CategoryDocument } from "../category/category.model";
import { PaymentDocument } from "../payments/payments.model";
import { SubscriptionDocument } from "../subscriptions/subscription.model";
import { SignInSchema, SignUpSchema } from "./auth.schema";

export type SignInDto = z.infer<typeof SignInSchema>;
export type SignUpDto = z.infer<typeof SignUpSchema>;

export interface LoggedUser extends Omit<SignUpDto, "password"> {
  _id: string;
  token: string;
  role: Role;
}

export interface UserProfile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  image?: string;
  description?: string;
  active: boolean;
  subscriptions: SubscriptionDocument[];
  payments: PaymentDocument[];
  interests: CategoryDocument[];
  unreadNotificationsCount: number;
}
