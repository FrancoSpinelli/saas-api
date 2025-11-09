import { PaymentRepository } from "./payments.repository";

const paymentRepository = new PaymentRepository();

export const getPayments = () => {
  return paymentRepository.findAll();
};

export const getPaymentById = (id: string) => {
  return paymentRepository.findById(id);
};
