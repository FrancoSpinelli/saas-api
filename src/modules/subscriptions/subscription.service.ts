import { } from "mongoose";
import { PaymentStatus, Period } from "../../enum";
import { SubscriptionStatus } from "../../enum/subscription-status.enum";
import { PaymentDocument } from "../payments/payments.model";
import {
  createPayment
} from "../payments/payments.service";
import { getPlanById } from "../plan/plan.service";
import {
  getServiceById
} from "../services/services.service";
import { SubscriptionDocument } from "./subscription.model";
import { SubscriptionRepository } from "./subscription.repository";
import { CreateSubscriptionDto } from "./subscription.schema";

const subscriptionRepository = new SubscriptionRepository();

export const getSubscriptions = () => {
  return subscriptionRepository.findAll();
};

export const getSubscriptionById = (id: string) => {
  return subscriptionRepository.findById(id);
};

export const getSubscriptionByUserId = (userId: string) => {
  return subscriptionRepository.findAll({ client: userId }, { sort: { createdAt: -1 } });
};

export const getPendingPaymentSubscriptions = () => {
  return subscriptionRepository.findAll({ status: SubscriptionStatus.PENDING_PAYMENT });
};

export const renewSubscription = (subscriptionId: string) => {
  return subscriptionRepository.update(subscriptionId, { status: SubscriptionStatus.ACTIVE });
};

export const createSubscription = async (subscriptionData: CreateSubscriptionDto) => {
  const service = await getServiceById(subscriptionData.serviceId);
  const plan = await getPlanById(subscriptionData.planId);
  if (!service || !plan) {
    throw new Error("Service or Plan not found");
  }
  const subscription = {
    client: subscriptionData.client,
    service,
    plan,
    active: true,
    startDate: new Date(),
    endDate: calculateEndDate(new Date(), plan.period),
    status: SubscriptionStatus.PENDING_PAYMENT,
  };
  return subscriptionRepository.create(subscription);
};

export const cancelSubscription = (subscriptionId: string) => {
  return subscriptionRepository.update(subscriptionId, { status: SubscriptionStatus.CANCELED });
};

export const inactivateSubscription = (id: string) => {
  return subscriptionRepository.update(id, { active: false });
};

export const paidSubscription = async (subscription: SubscriptionDocument) => {
  const newPayment = {
    subscription: subscription._id,
    plan: subscription.plan._id,
    client: subscription.client._id,
    amount: subscription.plan.price,
    from: subscription.startDate,
    to: subscription.endDate,
    method: subscription.client.paymentMethod,
    status: PaymentStatus.PAID,
    paidAt: new Date(),
  };

  await createPayment(newPayment as unknown as Partial<PaymentDocument>);

  return subscriptionRepository.update(String(subscription._id), {
    status: SubscriptionStatus.ACTIVE,
    lastPaymentDate: new Date(),
  });
};

export const getSubscriptionsByCategory = (): Promise<{ category: string; count: number }[]> => {
  return subscriptionRepository.countSubscriptionsByCategory();
};

export const getCountSubscriptions = (status?: SubscriptionStatus): Promise<number> => {
  if (!status) {
    return subscriptionRepository.count();
  }
  return subscriptionRepository.count({ status });
};

function calculateEndDate(startDate: Date, period: Period): Date {
  const periodMap: Record<Period, number> = {
    [Period.MONTHLY]: 1,
    [Period.QUARTERLY]: 3,
    [Period.SEMESTRAL]: 6,
    [Period.ANNUAL]: 12,
  };
  const monthsToAdd = periodMap[period];
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + monthsToAdd);
  return endDate;
}
