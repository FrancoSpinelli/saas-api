import mongoose from "mongoose";
import { env } from "../config";

const MONGO_URI = env.MONGO_URI;
const MONGO_DB_NAME = env.MONGO_DB_NAME;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI no está definido en el archivo .env");
}

export const connectMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    });

    console.log("✅ Conectado a MongoDB:", MONGO_DB_NAME);
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

export const disconnectMongo = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log("🛑 Desconectado de MongoDB");
};
