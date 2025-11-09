import { Schema, model, Document } from "mongoose";

export interface SubscriptionDocument extends Document {
  client: string;
  plan: string;
  service: string;
  startDate: Date;
  endDate: Date;
  paid: boolean;
}

const subscriptionSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    plan: { type: Schema.Types.ObjectId, ref: "Plan", required: true },
    service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    paid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const SubscriptionModel = model<SubscriptionDocument>("Subscription", subscriptionSchema);
