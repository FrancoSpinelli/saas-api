import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as subscriptionService from "./subscription.service";

export const getSubscriptions = (req: Request, res: Response) => {
  const subscriptions = subscriptionService.getSubscriptions();

  res.status(200).json(new Res(subscriptions, "Suscripciones obtenidas con éxito"));
};

export const getSubscriptionById = (req: Request, res: Response) => {
  const subscriptionId = req.params.id;
  const subscription = subscriptionService.getSubscriptionById(subscriptionId);

  res.status(200).json(new Res(subscription, "Suscripción obtenida con éxito"));
};
