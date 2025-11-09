import { Schema, model, Document, Types } from "mongoose";
import { PaymentMethod, PaymentStatus } from "../../enum";

export interface PaymentDocument extends Document {
  status: PaymentStatus;
  method: PaymentMethod;
  subscription: string;
  plan: string;
  client: string;
}

const paymentSchema = new Schema(
  {
    status: {
      type: String,
      enum: PaymentStatus,
      default: PaymentStatus.PENDING,
    },
    method: { type: String, required: true, enum: PaymentMethod },
    subscription: { type: Types.ObjectId, ref: "Subscription", required: true },
    plan: { type: Types.ObjectId, ref: "Plan", required: true },
    client: { type: Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

export const PaymentModel = model<PaymentDocument>("Payment", paymentSchema);
