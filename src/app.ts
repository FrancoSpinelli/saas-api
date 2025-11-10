import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import logger from "morgan";
import path from "path";

import { Res } from "./utils/Response";

import * as z from "zod";
import { es } from "zod/locales";
import { connectMongo } from "./database/connection";
import { authMiddleware } from "./middleware";
import authRouter from "./modules/auth/auth.route";
import categoryRouter from "./modules/category/category.route";
import paymentRouter from "./modules/payments/payments.route";
import planRouter from "./modules/plans/plans.route";
import serviceRouter from "./modules/services/services.route";
import subscriptionRouter from "./modules/subscriptions/subscription.route";
import userRouter from "./modules/users/users.route";

const app = express();
const PORT = process.env.PORT || 3000;

z.config(es());
connectMongo();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);

app.use(authMiddleware);

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/services", serviceRouter);
app.use("/payments", paymentRouter);
app.use("/subscriptions", subscriptionRouter);
app.use("/plans", planRouter);

app.use(function (_, res, next) {
  return res.status(404).json(new Res(null, "Recurso no encontrado"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;
