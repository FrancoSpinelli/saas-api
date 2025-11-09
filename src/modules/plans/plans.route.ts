import express from "express";
import { getPlans, getPlanById } from "./plans.controller";

const plansRouter = express.Router();

plansRouter.get("/", getPlans);
plansRouter.get("/:id", getPlanById);

export default plansRouter;
