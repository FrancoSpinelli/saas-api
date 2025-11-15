import { notifyProfileUpdated } from "../users/user.service";
import { NotificationDocument } from "./notification.model";
import { NotificationRepository } from "./notification.repository";
import { CreateNotificationDto } from "./notification.schema";

const notificationRepository = new NotificationRepository();

export const getNotificationsByClient = async (clientId: string) => {
  return notificationRepository.findByClient(clientId);
};

export const readAllNotificationsByClient = async (clientId: string) => {
  notifyProfileUpdated(String(clientId));
  return notificationRepository.readAllByClient(clientId);
};

export const countUnreadNotifications = async (clientId: string) => {
  return notificationRepository.countUnreadByClient(clientId);
};

export const createNotification = async (createNotification: CreateNotificationDto) => {
  const notification = await notificationRepository.create(
    createNotification as Partial<NotificationDocument>
  );

  if (notification) {
    notifyProfileUpdated(String(createNotification.client));
  }

  return notification;
};
