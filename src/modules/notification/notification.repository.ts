import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import "../subscriptions/subscription.model";
import "../users/user.model";
import { NotificationDocument, NotificationModel } from "./notification.model";

export class NotificationRepository extends BaseRepository<NotificationDocument> {
  constructor() {
    super(NotificationModel);
  }

  async findByClient(clientId: string): Promise<NotificationDocument[]> {
    const query: FilterQuery<NotificationDocument> = { client: clientId };
    return this.model.find(query).sort({ createdAt: -1 }).limit(10).exec();
  }

  async countUnreadByClient(clientId: string): Promise<number> {
    const query: FilterQuery<NotificationDocument> = { client: clientId, read: false };
    return this.model.countDocuments(query).exec();
  }

  async readAllByClient(clientId: string): Promise<void> {
    const query: FilterQuery<NotificationDocument> = { client: clientId, read: false };
    await this.model.updateMany(query, { read: true }).exec();
  }
}

export const notificationRepository = new NotificationRepository();
