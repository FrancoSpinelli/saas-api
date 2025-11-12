import { FilterQuery } from "mongoose";
import { BaseRepository } from "../../database/base.repository";
import "../subscriptions/subscription.model";
import { PaymentDocument, PaymentModel } from "./payments.model";

export class PaymentRepository extends BaseRepository<PaymentDocument> {
  constructor() {
    super(PaymentModel);
  }

  async findAll(filter: FilterQuery<PaymentDocument> = {}) {
    return this.model
      .find(filter)
      .populate("subscription")
      .populate("plan")
      .populate("client", "firstName lastName email role", "User")
      .populate({
        path: "subscription",
        populate: [
          { path: "service", select: "name description", model: "Service" },
          { path: "client", select: "firstName lastName email role", model: "User" },
        ],
      })
      .exec() as Promise<PaymentDocument[]>;
  }
}

export const paymentRepository = new PaymentRepository();
