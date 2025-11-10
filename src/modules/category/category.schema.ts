import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().max(255).optional(),
  image: z.string().optional(),
});

export const UpdateCategorySchema = CreateCategorySchema.extend({
  name: z.string().min(2).max(100).optional(),
});

export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryDto = z.infer<typeof UpdateCategorySchema>;
