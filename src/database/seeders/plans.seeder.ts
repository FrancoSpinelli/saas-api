import { Period } from "../../enum";
import { PlanModel } from "../../modules/plans/plans.model";

export const plansMock = [
  {
    _id: "64a1f3b2e4c5d6f700000021",
    name: "Plan Básico",
    period: Period.MONTHLY,
    price: 10,
    active: false,
  },
  {
    _id: "64a1f3b2e4c5d6f700000022",
    name: "Plan Estándar",
    period: Period.QUARTERLY,
    price: 20,
    active: true,
  },
  {
    _id: "64a1f3b2e4c5d6f700000023",
    name: "Plan Premium",
    period: Period.SEMESTRAL,
    price: 50,
    currency: "USD",
    active: true,
  },
  {
    _id: "64a1f3b2e4c5d6f700000024",
    name: "Plan Ultimate",
    period: Period.ANNUAL,
    price: 90,
    currency: "USD",
    active: true,
  },
];

export async function seedPlans() {
  await PlanModel.deleteMany({});
  await PlanModel.insertMany(plansMock);
  console.log("✅ Plans seeded");
}

export async function unseedPlans() {
  await PlanModel.deleteMany({});
  console.log("✅ Plans cleared");
}