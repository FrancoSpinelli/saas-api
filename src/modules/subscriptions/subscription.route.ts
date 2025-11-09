import express from "express";
import { getSubscriptions, getSubscriptionById } from "./subscription.controller";

const subscriptionsRouter = express.Router();

subscriptionsRouter.get("/", getSubscriptions);
subscriptionsRouter.get("/:id", getSubscriptionById);

export default subscriptionsRouter;
