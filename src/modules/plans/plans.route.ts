import express from "express";
import { getPlans, getPlanById, activePlanToggle } from "./plans.controller";

const plansRouter = express.Router();

plansRouter.get("/", getPlans);
plansRouter.get("/:id", getPlanById);
plansRouter.patch("/:id/activeToggle", activePlanToggle);

export default plansRouter;
