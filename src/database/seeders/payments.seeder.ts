import { PaymentMethod, PaymentStatus } from "../../enum";
import { PaymentModel } from "../../modules/payments/payments.model";

export const paymentsMock = [
  {
    _id: "64a1f3b2e4c5d6f700000051",
    subscription: "64a1f3b2e4c5d6f700000041",
    plan: "64a1f3b2e4c5d6f700000021",
    client: "64a1f3b2e4c5d6f700000002",
    method: PaymentMethod.CREDIT_CARD,
    status: PaymentStatus.PAID,
    from: new Date("2025-11-01T00:00:00Z"),
    to: new Date("2025-12-01T00:00:00Z"),
    paidAt: new Date("2025-11-05T00:00:00Z"),
  },
  {
    _id: "64a1f3b2e4c5d6f700000052",
    subscription: "64a1f3b2e4c5d6f700000042",
    plan: "64a1f3b2e4c5d6f700000022",
    client: "64a1f3b2e4c5d6f700000003",
    method: PaymentMethod.BANK_TRANSFER,
    status: PaymentStatus.PENDING,
    from: new Date("2025-11-10T00:00:00Z"),
    to: new Date("2025-12-10T00:00:00Z"),
    paidAt: null,
  },
  {
    _id: "64a1f3b2e4c5d6f700000053",
    subscription: "64a1f3b2e4c5d6f700000043",
    plan: "64a1f3b2e4c5d6f700000023",
    client: "64a1f3b2e4c5d6f700000004",
    method: PaymentMethod.BANK_TRANSFER,
    status: PaymentStatus.PAID,
    from: new Date("2025-09-01T00:00:00Z"),
    to: new Date("2025-10-01T00:00:00Z"),
    paidAt: new Date("2025-09-01T00:00:00Z"),
  },
];

export async function seedPayments() {
  await PaymentModel.deleteMany({});
  await PaymentModel.insertMany(paymentsMock);
  console.log("✅ Payments seeded");
}

export async function unseedPayments() {
  await PaymentModel.deleteMany({});
  console.log("✅ Payments cleared");
}
