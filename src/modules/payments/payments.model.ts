import { Schema, model, Document, Types } from "mongoose";
import { PaymentMethod, PaymentStatus } from "../../enum";

export interface PaymentDocument extends Document {
  id: string;
  status: PaymentStatus;
  method: PaymentMethod;
  subscription: Schema.Types.ObjectId;
  plan: Schema.Types.ObjectId;
  client: Schema.Types.ObjectId;
  amount: number;
  from: Date;
  to: Date;
  paidAt?: Date;
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
    amount: { type: Number, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    paidAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const PaymentModel = model<PaymentDocument>("Payment", paymentSchema);
