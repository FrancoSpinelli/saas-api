import express from "express";
import { validate } from "../../middleware";
import { signIn, signUp } from "./auth.controller";
import { SignInSchema, SignUpSchema } from "./auth.schema";

const authRouter = express.Router();

authRouter.post("/sign-in", validate(SignInSchema), signIn);
authRouter.post("/sign-up", validate(SignUpSchema), signUp);

export default authRouter;
