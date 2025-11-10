import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as subscriptionService from "./subscription.service";

export const getSubscriptions = async (req: Request, res: Response) => {
  const subscriptions = await subscriptionService.getSubscriptions();
  res.status(200).json(new Res(subscriptions, "Suscripciones obtenidas con éxito"));
};

export const getSubscriptionById = async (req: Request, res: Response) => {
  const subscriptionId = req.params.id;
  const subscription = await subscriptionService.getSubscriptionById(subscriptionId);

  res.status(200).json(new Res(subscription, "Suscripción obtenida con éxito"));
};

export const inactivateSubscription = async (req: Request, res: Response) => {
  const subscriptionId = req.params.id;
  await subscriptionService.inactivateSubscription(subscriptionId);
  res.status(200).json(new Res(null, "Suscripción inactivada con éxito"));
};