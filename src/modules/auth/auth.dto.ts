import { z } from "zod";
import { SignInSchema, SignUpSchema } from "./auth.schema.dto";
import { Role } from "../../enum";

export interface SignInDto extends z.infer<typeof SignInSchema> {}
export interface SignUpDto extends z.infer<typeof SignUpSchema> {}

export interface LoggedUser extends Omit<SignUpDto, "password"> {
  id: string;
  token: string;
  role: Role;
}
