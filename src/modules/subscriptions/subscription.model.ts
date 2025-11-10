import { Schema, model, Document } from "mongoose";

export interface SubscriptionDocument extends Document {
  id: string;
  client: Schema.Types.ObjectId;
  plan: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
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
