import express from "express";
import { validate } from "../../middleware";
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

userRouter.get("/", getUsers);
userRouter.get("/profile", getUserProfile);
userRouter.get("/:id", getUserById);
userRouter.post("/", validate(SignUpSchema), signUp);
userRouter.patch("/:id", updateUserProfile);
userRouter.patch("/:id/activeToggle", activeUserToggle);
userRouter.delete("/:id", deleteUser);

export default userRouter;
