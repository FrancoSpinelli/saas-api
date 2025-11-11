import express from "express";
import { getPayments, getPaymentById, getPaymentsByUserId } from "./payments.controller";

const paymentsRouter = express.Router();

paymentsRouter.get("/", getPayments);
paymentsRouter.get("/user/:userId", getPaymentsByUserId);
paymentsRouter.get("/:id", getPaymentById);

export default paymentsRouter;
