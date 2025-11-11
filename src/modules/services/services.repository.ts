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
      .populate("owner", "firstName lastName email role")
      .exec();
  }
}

export const serviceRepository = new ServiceRepository();
