import mongoose from "mongoose";
import { seedCategories } from "./categories.seeder";
import { seedPayments } from "./payments.seeder";
import { seedPlans } from "./plans.seeder";
import { seedServices } from "./services.seeder";
import { seedSubscriptions } from "./subscriptions.seeder";
import { seedUsers } from "./users.seeder";
import dotenv from "dotenv";

dotenv.config();

export const runSeeders = async () => {
  try {
    const url = process.env.MONGO_URI!;
    await mongoose.connect(url);

    await seedUsers();
    await seedCategories();
    await seedPlans();
    await seedServices();
    await seedSubscriptions();
    await seedPayments();

    console.log("✅ All seeded");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    await mongoose.connection.close();
  }
};

runSeeders();
