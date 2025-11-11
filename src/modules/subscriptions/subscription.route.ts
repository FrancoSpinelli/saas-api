import express from "express";
import {
  getSubscriptionById,
  getSubscriptions,
  inactivateSubscription,
  getSubscriptionByUserId,
} from "./subscription.controller";

const subscriptionsRouter = express.Router();

subscriptionsRouter.get("/", getSubscriptions);
subscriptionsRouter.get("/user/:userId", getSubscriptionByUserId);
subscriptionsRouter.get("/:id", getSubscriptionById);
subscriptionsRouter.patch("/:id/inactivate", inactivateSubscription);

export default subscriptionsRouter;
