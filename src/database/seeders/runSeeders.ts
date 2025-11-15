import mongoose from "mongoose";
import { seedCategories } from "./categories.seeder";
import { seedPayments } from "./payments.seeder";
import { seedPlans } from "./plans.seeder";
import { seedServices } from "./services.seeder";
import { seedSubscriptions } from "./subscriptions.seeder";
import { seedUsers } from "./users.seeder";
import dotenv from "dotenv";
import { seedNotifications } from "./notifications.seeder";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

export const runSeeders = async () => {
  try {
    await mongoose.connect(MONGO_URI!, {
      dbName: MONGO_DB_NAME,
    });

    await seedUsers();
    await seedCategories();
    await seedPlans();
    await seedServices();
    await seedSubscriptions();
    await seedPayments();
    await seedNotifications();

    console.log("✅ All seeded");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    await mongoose.connection.close();
  }
};

runSeeders();
