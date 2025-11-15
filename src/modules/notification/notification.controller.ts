import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as notificationService from "./notification.service";

export const getNotificationsByClient = async (req: Request, res: Response) => {
  const clientId = req.userId || "";
  const notifications = await notificationService.getNotificationsByClient(clientId);

  res.status(200).json(new Res(notifications, "Notificaciones obtenidas con éxito"));
};

export const readAllByClient = async (req: Request, res: Response) => {
  const clientId = req.userId || "";
  await notificationService.readAllNotificationsByClient(clientId);

  res.status(200).json(new Res(null, "Todas las notificaciones marcadas como leídas con éxito"));
};
