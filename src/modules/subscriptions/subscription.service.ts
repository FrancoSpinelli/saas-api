import { SubscriptionRepository } from "./subscription.repository";

const subscriptionRepository = new SubscriptionRepository();

export const getSubscriptions = () => {
  return subscriptionRepository.findAll();
};

export const getSubscriptionById = (id: string) => {
  return subscriptionRepository.findById(id);
};

export const inactivateSubscription = (id: string) => {
  return subscriptionRepository.update(id, { active: false });
};