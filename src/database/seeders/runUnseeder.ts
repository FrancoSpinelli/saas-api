import mongoose from "mongoose";
import { unseedCategories } from "./categories.seeder";
import { unseedPayments } from "./payments.seeder";
import { unseedPlans } from "./plans.seeder";
import { unseedServices } from "./services.seeder";
import { unseedSubscriptions } from "./subscriptions.seeder";
import { unseedUsers } from "./users.seeder";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME!;

export const unseedData = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    });
    console.log("🔗 Connected to MongoDB");

    await unseedPayments();
    await unseedSubscriptions();
    await unseedServices();
    await unseedPlans();
    await unseedCategories();
    await unseedUsers();

    console.log("🗑️✅ All data removed");
  } catch (err) {
    console.error("❌ Unseeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
};

unseedData();
