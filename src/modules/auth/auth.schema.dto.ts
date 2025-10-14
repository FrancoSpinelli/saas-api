import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export const SignUpSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.email(),
  password: z.string().min(4),
});
