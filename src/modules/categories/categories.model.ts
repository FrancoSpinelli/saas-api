import { Schema, model, Document } from "mongoose";

export interface CategoryDocument extends Document {
  name: string;
  image?: string;
  active: boolean;
}

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = model<CategoryDocument>("Category", categorySchema);
