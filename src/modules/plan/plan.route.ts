import express from "express";
import {
    activePlanToggle,
    createPlan,
    deletePlan,
    getPlanById,
    getPlans,
    updatePlan,
} from "./plan.controller";

const plansRouter = express.Router();

plansRouter.get("/", getPlans);
plansRouter.get("/:id", getPlanById);
plansRouter.post("/", createPlan);
plansRouter.put("/:id", updatePlan);
plansRouter.patch("/:id/activeToggle", activePlanToggle);
plansRouter.delete("/:id", deletePlan);

export default plansRouter;
