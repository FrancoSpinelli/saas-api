import { z } from "zod";
import { CreateCategorySchema } from "../category/category.schema";
import { CreatePlanSchema } from "../plan/plan.schema";
import { UserSchema } from "../users/user.schema";

export const CreateServiceSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string(),
  category: CreateCategorySchema,
  plans: z.array(CreatePlanSchema),
  owner: UserSchema,
  image: z.string().optional(),
  active: z.boolean(),
});

export type CreateServiceDto = z.infer<typeof CreateServiceSchema>;
export type UpdateServiceDto = z.infer<typeof CreateServiceSchema>;
