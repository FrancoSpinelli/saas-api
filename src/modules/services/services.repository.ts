import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import "../plan/plan.model";
import { ServiceDocument, ServiceModel } from "./services.model";

export class ServiceRepository extends BaseRepository<ServiceDocument> {
  constructor() {
    super(ServiceModel);
  }

  async findAll(filter: FilterQuery<ServiceDocument> = {}) {
    return this.model
      .find(filter)
      .populate("plans")
      .populate("category")
      .populate("owner", "firstName lastName email role image active paymentMethod createdAt")
      .exec() as Promise<ServiceDocument[]>;
  }

  async findById(id: string): Promise<ServiceDocument | null> {
    return this.model
      .findById(id)
      .populate("plans")
      .populate("category")
      .populate("owner", "firstName lastName email role image active paymentMethod createdAt")
      .lean() as Promise<ServiceDocument | null>;
  }

  async getTopSubscribedServices() {
    return this.model.aggregate([
      {
        $lookup: {
          from: "subscriptions",
          localField: "_id",
          foreignField: "service",
          as: "subscriptions",
        },
      },
      {
        $addFields: {
          subscriptionCount: { $size: "$subscriptions" },
        },
      },
      {
        $sort: { subscriptionCount: -1 },
      },
      {
        $limit: 3,
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "plans",
          localField: "plans",
          foreignField: "_id",
          as: "plans",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "owner",
        },
      },
      { $unwind: { path: "$owner", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 1,
          name: 1,
          shortDescription: 1,
          longDescription: 1,
          image: 1,
          active: 1,

          subscriptionCount: 1,
          
          category: {
            _id: 1,
            name: 1,
            description: 1,
            image: 1,
          },
          plans: 1,
          owner: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            image: 1,
          },
        },
      },
    ]);
  }
}

export const serviceRepository = new ServiceRepository();
