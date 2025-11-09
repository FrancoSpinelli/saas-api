import { SubscriptionModel } from "../../modules/subscriptions/subscription.model";

export const subscriptionsMock = [
  {
    _id: "64a1f3b2e4c5d6f700000041",
    client: "64a1f3b2e4c5d6f700000002",
    plan: "64a1f3b2e4c5d6f700000021",
    service: "64a1f3b2e4c5d6f700000031",
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    paid: false,
  },
];

export async function seedSubscriptions() {
  await SubscriptionModel.deleteMany({});
  await SubscriptionModel.insertMany(subscriptionsMock);
  console.log("✅ Subscriptions seeded");
}

export async function unseedSubscriptions() {
  await SubscriptionModel.deleteMany({});
  console.log("✅ Subscriptions cleared");
}