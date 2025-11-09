import { BaseRepository } from "../../database/base.repository";
import { SubscriptionDocument, SubscriptionModel } from "./subscription.model";

export class SubscriptionRepository extends BaseRepository<SubscriptionDocument> {
  constructor() {
    super(SubscriptionModel);
  }
}

export const subscriptionRepository = new SubscriptionRepository();
