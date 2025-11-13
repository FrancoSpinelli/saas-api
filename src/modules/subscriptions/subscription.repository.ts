import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import "../category/category.model";
import "../plan/plan.model";
import "../services/services.model";
import "../users/user.model";
import { SubscriptionDocument, SubscriptionModel } from "./subscription.model";

export class SubscriptionRepository extends BaseRepository<SubscriptionDocument> {
  constructor() {
    super(SubscriptionModel);
  }

  async findAll(filter: FilterQuery<SubscriptionDocument> = {}) {
    return this.model
      .find(filter)
      .populate("plan")
      .populate("client", "firstName lastName email role image paymentMethod createdAt", "User")
      .populate({
        path: "service",
        populate: [{ path: "category", select: "_id name description", model: "Category" }],
      })
      .exec() as Promise<SubscriptionDocument[]>;
  }
}

export const subscriptionRepository = new SubscriptionRepository();
