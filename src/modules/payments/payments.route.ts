import express from "express";
import isAdmin from "../../middleware/isAdmin.middleware";
import { getPaymentById, getPayments, getPaymentsByUserId } from "./payments.controller";

const paymentsRouter = express.Router();

paymentsRouter.get("/", isAdmin, getPayments);
paymentsRouter.get("/user/:userId", isAdmin, getPaymentsByUserId);
paymentsRouter.get("/:id", isAdmin, getPaymentById);

export default paymentsRouter;
