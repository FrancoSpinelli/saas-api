import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as paymentService from "./payments.service";

export const getPayments = (req: Request, res: Response) => {
  const payments = paymentService.getPayments();

  res.status(200).json(new Res(payments, "Pagos obtenidos con éxito"));
};

export const getPaymentById = (req: Request, res: Response) => {
  const paymentId = req.params.id;
  const payment = paymentService.getPaymentById(paymentId);

  res.status(200).json(new Res(payment, "Pago obtenido con éxito"));
};
