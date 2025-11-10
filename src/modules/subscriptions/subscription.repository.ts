import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import { SubscriptionDocument, SubscriptionModel } from "./subscription.model";
import "../plans/plans.model";
import "../services/services.model";
import "../users/user.model";

export class SubscriptionRepository extends BaseRepository<SubscriptionDocument> {
  constructor() {
    super(SubscriptionModel);
  }

  async findAll(filter: FilterQuery<SubscriptionDocument> = {}) {
    return this.model
      .find(filter)
      .populate("plan")
      .populate("client", "firstName lastName email role image", "User")
      .populate("service", "name description")
      .exec();
  }
}

export const subscriptionRepository = new SubscriptionRepository();
