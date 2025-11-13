import { SubscriptionStatus } from "../../enum/subscription-status.enum";
import { SubscriptionModel } from "../../modules/subscriptions/subscription.model";

export const subscriptionsMock = [
  {
    _id: "64a1f3b2e4c5d6f700000041",
    client: "64a1f3b2e4c5d6f700000002",
    plan: "64a1f3b2e4c5d6f700000021",
    service: "64a1f3b2e4c5d6f700000031",
    startDate: new Date("2025-11-01T00:00:00Z"),
    endDate: new Date("2025-12-01T00:00:00Z"),
    lastPaymentDate: new Date("2025-11-05T00:00:00Z"),
    status: SubscriptionStatus.ACTIVE,
  },
  {
    _id: "64a1f3b2e4c5d6f700000042",
    client: "64a1f3b2e4c5d6f700000003",
    plan: "64a1f3b2e4c5d6f700000022",
    service: "64a1f3b2e4c5d6f700000032",
    startDate: new Date("2025-11-10T00:00:00Z"),
    endDate: new Date("2025-12-10T00:00:00Z"),
    lastPaymentDate: null,
    status: SubscriptionStatus.ACTIVE,
  },
  {
    _id: "64a1f3b2e4c5d6f700000043",
    client: "64a1f3b2e4c5d6f700000004",
    plan: "64a1f3b2e4c5d6f700000023",
    service: "64a1f3b2e4c5d6f700000033",
    startDate: new Date("2025-09-01T00:00:00Z"),
    endDate: new Date("2025-10-01T00:00:00Z"),
    lastPaymentDate: new Date("2025-09-01T00:00:00Z"),
    status: SubscriptionStatus.EXPIRED,
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
