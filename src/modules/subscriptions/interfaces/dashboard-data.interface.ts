import { PaymentDocument } from "../../payments/payments.model";
import { ServiceDocument } from "../../services/services.model";
import { SubscriptionDocument } from "../subscription.model";

export interface DashboardData {
  totalSubscriptions: number;
  totalAdmins: number;
  totalClients: number;
  totalServices: number;

  subscriptionsByCategory: {
    category: string;
    count: number;
  }[];

  activeSubscriptions: number;
  pendingPaymentSubscriptions: number;
  canceledSubscriptions: number;
  expiredSubscriptions: number;

  revenueThisMonth: number;
  revenueLastMonth: number;
  totalRevenue: number;

  lastClientSubscriptions: SubscriptionDocument[];

  lastPayments: PaymentDocument[];

  topSubscribedServices: {
    service: ServiceDocument;
    count: number;
  }[];
}
