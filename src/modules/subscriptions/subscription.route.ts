import express from "express";
import { validate } from "../../middleware";
import {
  cancelSubscription,
  createSubscription,
  getSubscriptionById,
  getSubscriptionByUserId,
  getSubscriptions,
  inactivateSubscription,
  renewSubscription,
} from "./subscription.controller";
import { CreateSubscriptionSchema } from "./subscription.schema";
import isAdmin from "../../middleware/isAdmin.middleware";

const subscriptionsRouter = express.Router();

subscriptionsRouter.post("/:id/cancel", cancelSubscription);
subscriptionsRouter.post("/:id/renew", renewSubscription);
subscriptionsRouter.post("/", validate(CreateSubscriptionSchema), createSubscription);

subscriptionsRouter.get("/", isAdmin, getSubscriptions);
subscriptionsRouter.get("/user/:userId", isAdmin, getSubscriptionByUserId);
subscriptionsRouter.get("/:id", isAdmin, getSubscriptionById);
subscriptionsRouter.patch("/:id/inactivate", isAdmin, inactivateSubscription);

export default subscriptionsRouter;
