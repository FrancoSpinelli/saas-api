import { z } from "zod";
import { Currency, Period } from "../../enum";

export const CreatePlanSchema = z.object({
  name: z.string().min(2).max(100),
  period: z.enum(Period),
  price: z.number().min(0),
  currency: z.enum(Currency),
  active: z.boolean().default(true),
});

export type CreatePlanDto = z.infer<typeof CreatePlanSchema>;
export type UpdatePlanDto = z.infer<typeof CreatePlanSchema>;
