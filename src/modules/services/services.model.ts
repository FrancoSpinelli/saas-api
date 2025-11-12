import { Document, Schema, model } from "mongoose";

export interface ServiceDocument extends Document {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: Schema.Types.ObjectId;
  plans: Schema.Types.ObjectId[];
  owner: Schema.Types.ObjectId;
  image: string;
  active: boolean;
}

const serviceSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    plans: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    active: { type: Boolean, default: true },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
    collection: "services",
  }
);

export const ServiceModel = model<ServiceDocument>("Service", serviceSchema);
