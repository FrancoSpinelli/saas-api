import { z } from "zod";
import { SignInSchema, SignUpSchema } from "./auth.schema";
import { Role } from "../../enum";

export interface SignInDto extends z.infer<typeof SignInSchema> {}
export interface SignUpDto extends z.infer<typeof SignUpSchema> {}

export interface LoggedUser extends Omit<SignUpDto, "password"> {
  _id: string;
  token: string;
  role: Role;
}
