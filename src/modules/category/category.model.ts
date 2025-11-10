import { Schema, model, Document } from "mongoose";

export interface CategoryDocument extends Document {
  id: string;
  name: string;
  description: string;
  image?: string;
  active: boolean;
}

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = model<CategoryDocument>("Category", categorySchema);
