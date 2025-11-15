import { FilterQuery } from "mongoose";
import { BaseRepository, Options } from "../../database/base.repository";
import "../category/category.model";
import "../plan/plan.model";
import "../services/services.model";
import "../users/user.model";
import { SubscriptionDocument, SubscriptionModel } from "./subscription.model";

export class SubscriptionRepository extends BaseRepository<SubscriptionDocument> {
  constructor() {
    super(SubscriptionModel);
  }

  async findAll(filter: FilterQuery<SubscriptionDocument> = {}, options: Options = {}) {
    return this.model
      .find(filter)
      .populate("plan")
      .populate("client", "_id firstName lastName email role image paymentMethod createdAt", "User")
      .populate({
        path: "service",
        populate: [{ path: "category", select: "_id name description", model: "Category" }],
      })
      .sort(options.sort || { createdAt: -1 })
      .skip(options.skip || 0)
      .limit(options.limit || 0)
      .exec() as Promise<SubscriptionDocument[]>;
  }
  async countSubscriptionsByCategory() {
    return this.model.aggregate([
      {
        $lookup: {
          from: "services",
          localField: "service",
          foreignField: "_id",
          as: "service",
        },
      },
      { $unwind: "$service" },
      {
        $group: {
          _id: "$service.category",
          total: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          _id: 1,
          total: 1,
          categoryName: "$category.name",
        },
      },
    ]);
  }
}
export const subscriptionRepository = new SubscriptionRepository();
