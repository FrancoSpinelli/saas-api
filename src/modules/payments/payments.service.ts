import { FilterQuery } from "mongoose";
import { PaymentStatus } from "../../enum";
import { PaymentDocument } from "./payments.model";
import { PaymentRepository } from "./payments.repository";

const paymentRepository = new PaymentRepository();

export const getPayments = (
  filters?: FilterQuery<PaymentDocument>,
  options?: { limit?: number; skip?: number; sort?: { [key: string]: 1 | -1 } }
) => {
  return paymentRepository.findAll(filters, options);
};

export const getPaymentById = (id: string) => {
  return paymentRepository.findById(id);
};

export const getPaymentsByUserId = (userId: string) => {
  return paymentRepository.findAll({ client: userId });
};

export const createPayment = (paymentData: Partial<PaymentDocument>) => {
  return paymentRepository.create(paymentData);
};

export const getRevenueByMonth = async (month: number): Promise<number> => {
  const start = new Date(new Date().getFullYear(), month, 1);
  const end = new Date(new Date().getFullYear(), month + 1, 1);

  const payments = await paymentRepository.findAll({
    status: PaymentStatus.PAID,
    paidAt: { $gte: start, $lt: end },
  });

  return payments.reduce((total, payment) => total + (payment.amount || 0), 0);
};

export const getTotalRevenue = async (): Promise<number> => {
  const payments = await paymentRepository.findAll({ status: PaymentStatus.PAID });
  return payments.reduce((total, payment) => total + (payment.amount || 0), 0);
};
