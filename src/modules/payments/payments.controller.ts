import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as paymentService from "./payments.service";

export const getPayments = async (req: Request, res: Response) => {
  const payments = await paymentService.getPayments();

  res.status(200).json(new Res(payments, "Pagos obtenidos con éxito"));
};

export const getPaymentById = async (req: Request, res: Response) => {
  const paymentId = req.params.id;
  const payment = await paymentService.getPaymentById(paymentId);

  res.status(200).json(new Res(payment, "Pago obtenido con éxito"));
};

export const getPaymentsByUserId = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const payments = await paymentService.getPaymentsByUserId(userId);

  res.status(200).json(new Res(payments, "Pagos del usuario obtenidos con éxito"));
};
