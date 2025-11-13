import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import { CreateSubscriptionDto } from "./subscription.schema";
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

export const getSubscriptionByUserId = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const subscription = await subscriptionService.getSubscriptionByUserId(userId);

  res.status(200).json(new Res(subscription, "Suscripción del usuario obtenida con éxito"));
};

export const createSubscription = async (req: Request, res: Response) => {
  const subscriptionData = req.body as CreateSubscriptionDto;
  subscriptionData.client = req.user!;
  const newSubscription = await subscriptionService.createSubscription(subscriptionData);
  res.status(201).json(new Res(newSubscription, "Suscripción creada con éxito"));
};

export const renewSubscription = async (req: Request, res: Response) => {
  const clientId = String(req.user?._id);
  const subscriptionId = req.params.id;

  const subscription = await subscriptionService.getSubscriptionById(subscriptionId);

  if (String(subscription?.client) !== clientId) {
    return res
      .status(400)
      .json(new Res(null, "No tienes permiso para renovar esta suscripción", false));
  }
  await subscriptionService.renewSubscription(subscriptionId);
  res.status(200).json(new Res(null, "Suscripción renovada con éxito"));
};

export const cancelSubscription = async (req: Request, res: Response) => {
  const clientId = String(req.user?._id);
  const subscriptionId = req.params.id;

  const subscription = await subscriptionService.getSubscriptionById(subscriptionId);

  if (String(subscription?.client) !== clientId) {
    return res
      .status(400)
      .json(new Res(null, "No tienes permiso para cancelar esta suscripción", false));
  }
  await subscriptionService.cancelSubscription(subscriptionId);
  res.status(200).json(new Res(null, "Suscripción cancelada con éxito"));
};

export const inactivateSubscription = async (req: Request, res: Response) => {
  const subscriptionId = req.params.id;
  await subscriptionService.inactivateSubscription(subscriptionId);
  res.status(200).json(new Res(null, "Suscripción inactivada con éxito"));
};
