import {
  NotificationMessage,
  NotificationReferenceType,
  NotificationType,
} from "../../enum/notification.enum";
import { NotificationModel } from "../../modules/notification/notification.model";

export const notificationsMock = [
  {
    _id: "64a1f3b2e4c5d6f700000061",
    type: NotificationType.SUBSCRIPTIONS_ACTIVE,
    client: "64a1f3b2e4c5d6f700000002",
    message: NotificationMessage.SUBSCRIPTION_ACTIVE,
    read: false,
    referenceType: NotificationReferenceType.SERVICE,
    referenceId: "64a1f3b2e4c5d6f700000031",
  },
  {
    _id: "64a1f3b2e4c5d6f700000062",
    type: NotificationType.SUBSCRIPTIONS_ACTIVE,
    client: "64a1f3b2e4c5d6f700000003",
    message: NotificationMessage.SUBSCRIPTION_ACTIVE,
    read: false,
    referenceType: NotificationReferenceType.SERVICE,
    referenceId: "64a1f3b2e4c5d6f700000032",
  },
  {
    _id: "64a1f3b2e4c5d6f700000063",
    type: NotificationType.SUBSCRIPTIONS_EXPIRED,
    client: "64a1f3b2e4c5d6f700000004",
    message: NotificationMessage.SUBSCRIPTION_EXPIRED,
    read: false,
    referenceType: NotificationReferenceType.SERVICE,
    referenceId: "64a1f3b2e4c5d6f700000033",
  },
  {
    _id: "64a1f3b2e4c5d6f700000065",
    type: NotificationType.PAYMENTS_SUCCESS,
    client: "64a1f3b2e4c5d6f700000002",
    message: NotificationMessage.PAYMENT_SUCCESS,
    read: false,
    referenceType: NotificationReferenceType.PAYMENT,
  },
  {
    _id: "64a1f3b2e4c5d6f700000066",
    type: NotificationType.PAYMENTS_SUCCESS,
    client: "64a1f3b2e4c5d6f700000003",
    message: NotificationMessage.PAYMENT_SUCCESS,
    read: false,
    referenceType: NotificationReferenceType.PAYMENT,
  },
  {
    _id: "64a1f3b2e4c5d6f700000067",
    type: NotificationType.PAYMENTS_SUCCESS,
    client: "64a1f3b2e4c5d6f700000004",
    message: NotificationMessage.PAYMENT_SUCCESS,
    read: false,
    referenceType: NotificationReferenceType.PAYMENT,
  },
];

export async function seedNotifications() {
  await NotificationModel.deleteMany({});
  await NotificationModel.insertMany(notificationsMock);
  console.log("✅ Notifications seeded");
}

export async function unseedNotifications() {
  await NotificationModel.deleteMany({});
  console.log("🧹 Notifications cleared");
}
