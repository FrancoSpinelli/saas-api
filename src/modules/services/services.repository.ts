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
      .populate("owner", "firstName lastName email role image createdAt")
      .exec() as Promise<ServiceDocument[]>;
  }

  async findById(id: string): Promise<ServiceDocument | null> {
    return this.model
      .findById(id)
      .populate("plans")
      .populate("category")
      .populate("owner", "firstName lastName email role image active createdAt")
      .lean() as Promise<ServiceDocument | null>;
  }
}

export const serviceRepository = new ServiceRepository();
