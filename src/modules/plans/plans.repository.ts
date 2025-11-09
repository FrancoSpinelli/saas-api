import { BaseRepository } from "../../database/base.repository";
import { PlanDocument, PlanModel } from "./plans.model";

export class PlanRepository extends BaseRepository<PlanDocument> {
  constructor() {
    super(PlanModel);
  }
}

export const planRepository = new PlanRepository();
