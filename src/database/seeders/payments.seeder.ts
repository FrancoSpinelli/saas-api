import { PaymentMethod } from "../../enum";
import { PaymentModel } from "../../modules/payments/payments.model";

export const paymentsMock = [
  {
    _id: "64a1f3b2e4c5d6f700000051",
    subscription: "64a1f3b2e4c5d6f700000041",
    plan: "64a1f3b2e4c5d6f700000021",
    client: "64a1f3b2e4c5d6f700000002",
    method: PaymentMethod.CREDIT_CARD,
    paidAt: new Date(),
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