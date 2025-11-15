import { Document, Schema, model } from "mongoose";
import { NotificationMessage, NotificationReferenceType, NotificationType } from "../../enum";

export interface NotificationDocument extends Document {
  type: NotificationType;
  client: Schema.Types.ObjectId;
  message: NotificationMessage;
  read: boolean;
  referenceType?: NotificationReferenceType;
  referenceId?: string;
  createdAt: Date;
}

const notificationSchema = new Schema<NotificationDocument>(
  {
    type: { type: String, enum: Object.values(NotificationType), required: true },
    client: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, enum: Object.values(NotificationMessage), required: true },
    read: { type: Boolean, default: false },
    referenceType: { type: String, enum: NotificationReferenceType, required: false },
    referenceId: { type: Schema.Types.ObjectId, required: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const NotificationModel = model<NotificationDocument>("Notification", notificationSchema);
