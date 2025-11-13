import { z } from "zod";
import { UserDocument } from "../users/user.model";

export const CreateSubscriptionSchema = z.object({
  planId: z.string(),
  serviceId: z.string(),
});

export interface CreateSubscriptionDto extends z.infer<typeof CreateSubscriptionSchema> {
  client: UserDocument;
}
