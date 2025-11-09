import { Schema, model, Document } from "mongoose";
import { Period } from "../../enum";

export interface PlanDocument extends Document {
  name: string;
  period: Period;
  price: number;
  active: boolean;
}

const planSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    period: { type: String, enum: Period, required: true },
    price: { type: Number, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const PlanModel = model<PlanDocument>("Plan", planSchema);
