import { Schema, model } from "mongoose";
import { Role } from "../../enum";

export interface UserDocument extends Document {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  active: boolean;
  image: string;
}

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Role, default: Role.CLIENT },
    image: { type: String, default: "" },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<UserDocument>("User", userSchema);
