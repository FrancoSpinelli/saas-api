import express from "express";
import { getPayments, getPaymentById } from "./payments.controller";

const paymentsRouter = express.Router();

paymentsRouter.get("/", getPayments);
paymentsRouter.get("/:id", getPaymentById);

export default paymentsRouter;
