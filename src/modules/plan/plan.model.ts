import { Schema, model, Document } from "mongoose";
import { Currency, Period } from "../../enum";

export interface PlanDocument extends Document {
  name: string;
  period: Period;
  price: number;
  currency: Currency;
  active: boolean;
}

const planSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    period: { type: String, enum: Period, required: true },
    price: { type: Number, required: true },
    active: { type: Boolean, default: true },
    currency: { type: String, enum: Currency, default: Currency.USD },
  },
  {
    timestamps: true,
  }
);

export const PlanModel = model<PlanDocument>("Plan", planSchema);
