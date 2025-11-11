import { Document, Schema, model } from "mongoose";
import { SubscriptionStatus } from "../../enum/subscription-status.enum";

export interface SubscriptionDocument extends Document {
  id: string;
  client: Schema.Types.ObjectId;
  plan: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: SubscriptionStatus;
  lastPaymentDate?: Date;
}

const subscriptionSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    plan: { type: Schema.Types.ObjectId, ref: "Plan", required: true },
    service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: {
      type: String,
      enum: Object.values(SubscriptionStatus),
      default: SubscriptionStatus.ACTIVE,
    },
    lastPaymentDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const SubscriptionModel = model<SubscriptionDocument>("Subscription", subscriptionSchema);
