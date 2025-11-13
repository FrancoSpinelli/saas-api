import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().transform(Number).default(3000),
  JWT_SECRET: z.string().min(8, "El secreto JWT debe tener al menos 8 caracteres"),
  MONGO_URI: z.string(),
  MONGO_DB_NAME: z.string().min(1).default("saas_db"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Variables de entorno inválidas:", _env.error.format());
  process.exit(1);
}

export const env = _env.data;
