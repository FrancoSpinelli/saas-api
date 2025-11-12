import { Schema, model } from "mongoose";
import { Role } from "../../enum";
import { CategoryDocument } from "../category/category.model";

export interface UserDocument extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  active: boolean;
  image: string;
  description?: string;
  interests: CategoryDocument[];
  createdAt: Date;
}

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: Role, default: Role.CLIENT },
    image: { type: String, default: "" },
    active: { type: Boolean, default: true },
    description: { type: String, default: "" },
    interests: [{ type: Schema.Types.ObjectId, ref: "Category", default: [] }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<UserDocument>("User", userSchema);
