import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import { PlanDocument, PlanModel } from "./plan.model";
import "../subscriptions/subscription.model";
import "../users/user.model";

export class PlanRepository extends BaseRepository<PlanDocument> {
  constructor() {
    super(PlanModel);
  }

  async findAll(filter: FilterQuery<PlanDocument> = {}) {
    return this.model.find(filter).exec();
  }
}

export const planRepository = new PlanRepository();
