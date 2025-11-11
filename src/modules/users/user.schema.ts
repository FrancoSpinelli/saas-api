import { z } from "zod";
import { Role } from "../../enum";

export const UserSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.email(),
  password: z.string().min(4),
  role: z.enum(Role).default(Role.CLIENT),
});
