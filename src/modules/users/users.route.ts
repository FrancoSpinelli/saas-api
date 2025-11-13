import express from "express";
import { validate } from "../../middleware";
import isAdmin from "../../middleware/isAdmin.middleware";
import { signUp } from "../auth/auth.controller";
import { SignUpSchema } from "../auth/auth.schema";
import {
  activeUserToggle,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUserProfile,
} from "./user.controller";

const userRouter = express.Router();

userRouter.get("/profile", getUserProfile);
userRouter.patch("/:id", updateUserProfile);

userRouter.get("/", isAdmin, getUsers);
userRouter.get("/:id", isAdmin, getUserById);
userRouter.post("/", isAdmin, validate(SignUpSchema), signUp);
userRouter.patch("/:id/activeToggle", isAdmin, activeUserToggle);
userRouter.delete("/:id", isAdmin, deleteUser);

export default userRouter;
