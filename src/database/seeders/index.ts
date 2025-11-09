import mongoose from "mongoose";

import { seedUsers, unseedUsers } from "./users.seeder";
import { seedCategories, unseedCategories } from "./categories.seeder";
import { seedPlans, unseedPlans } from "./plans.seeder";
import { seedServices, unseedServices } from "./services.seeder";
import { seedSubscriptions, unseedSubscriptions } from "./subscriptions.seeder";
import { seedPayments, unseedPayments } from "./payments.seeder";

export const runSeeders = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  await seedUsers();
  await seedCategories();
  await seedPlans();
  await seedServices();
  await seedSubscriptions();
  await seedPayments();

  console.log("✅ All seeded");
  process.exit(0);
};

export const unseedData = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  await unseedPayments();
  await unseedSubscriptions();
  await unseedServices();
  await unseedPlans();
  await unseedCategories();
  await unseedUsers();

  console.log("🗑️✅ All data removed");
  process.exit(0);
};
