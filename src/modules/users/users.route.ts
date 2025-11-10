import express from "express";
import { getUserById, getUsers, activeUserToggle } from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.patch("/:id/activeToggle", activeUserToggle);

export default userRouter;
