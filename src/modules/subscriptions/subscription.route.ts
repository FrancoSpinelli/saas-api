import express from "express";
import { validate } from "../../middleware";
import {
  cancelSubscription,
  createSubscription,
  getSubscriptionById,
  getSubscriptionByUserId,
  getSubscriptions,
  inactivateSubscription,
  renewSubscription
} from "./subscription.controller";
import { CreateSubscriptionSchema } from "./subscription.schema";

const subscriptionsRouter = express.Router();

subscriptionsRouter.get("/", getSubscriptions);
subscriptionsRouter.get("/user/:userId", getSubscriptionByUserId);
subscriptionsRouter.get("/:id", getSubscriptionById);
subscriptionsRouter.post("/:id/cancel", cancelSubscription);
subscriptionsRouter.post("/:id/renew", renewSubscription);
subscriptionsRouter.post("/", validate(CreateSubscriptionSchema), createSubscription);
subscriptionsRouter.patch("/:id/inactivate", inactivateSubscription);

export default subscriptionsRouter;
