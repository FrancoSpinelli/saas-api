import express from "express";
import { getSubscriptionById, getSubscriptions, inactivateSubscription } from "./subscription.controller";

const subscriptionsRouter = express.Router();

subscriptionsRouter.get("/", getSubscriptions);
subscriptionsRouter.get("/:id", getSubscriptionById);
subscriptionsRouter.patch("/:id/inactivate", inactivateSubscription);

export default subscriptionsRouter;
