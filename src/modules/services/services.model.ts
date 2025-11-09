import { Schema, model, Document } from "mongoose";
import { Period } from "../../enum";

export interface ServiceDocument extends Document {
  name: string;
  description: string;
  category: Schema.Types.ObjectId;
  plans: Schema.Types.ObjectId[];
  owner: Schema.Types.ObjectId;
  active: boolean;
}

const serviceSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true },
    plans: [{ type: Schema.Types.ObjectId, ref: "Plan", required: true }],
    owner: { type: Schema.Types.ObjectId, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: "services",
  }
);

export const ServiceModel = model<ServiceDocument>("Service", serviceSchema);
