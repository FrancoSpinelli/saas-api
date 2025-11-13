import express from "express";
import isAdmin from "../../middleware/isAdmin.middleware";
import {
    activePlanToggle,
    createPlan,
    deletePlan,
    getPlanById,
    getPlans,
    updatePlan,
} from "./plan.controller";

const plansRouter = express.Router();

plansRouter.get("/", isAdmin, getPlans);
plansRouter.get("/:id", isAdmin, getPlanById);
plansRouter.post("/", isAdmin, createPlan);
plansRouter.put("/:id", isAdmin, updatePlan);
plansRouter.patch("/:id/activeToggle", isAdmin, activePlanToggle);
plansRouter.delete("/:id", isAdmin, deletePlan);

export default plansRouter;
