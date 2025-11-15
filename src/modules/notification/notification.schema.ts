import { Schema } from "mongoose";
import { z } from "zod";
import { NotificationMessage, NotificationReferenceType, NotificationType } from "../../enum";

export const CreateNotificationSchema = z.object({
  type: z.enum(NotificationType),
  message: z.enum(NotificationMessage),
  client: Schema.Types.ObjectId,
  referenceId: z.string().optional(),
  referenceType: z.enum(NotificationReferenceType).optional(),
});

export type CreateNotificationDto = z.infer<typeof CreateNotificationSchema>;
