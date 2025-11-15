import { Role } from "../../enum";
import { SubscriptionStatus } from "../../enum/subscription-status.enum";
import { getPayments, getRevenueByMonth, getTotalRevenue } from "../payments/payments.service";
import { getCountServices, getTopSubscribedServices } from "../services/services.service";
import { DashboardData } from "../subscriptions/interfaces";
import { subscriptionRepository } from "../subscriptions/subscription.repository";
import { getCountSubscriptions, getSubscriptionsByCategory } from "../subscriptions/subscription.service";
import { getUserCountByRole } from "../users/user.service";

export const getDashboardInfo = async (): Promise<DashboardData> => {
  try {
    const dashboardData: DashboardData = {
      totalSubscriptions: await getCountSubscriptions(),
      totalAdmins: await getUserCountByRole(Role.ADMIN),
      totalClients: await getUserCountByRole(Role.CLIENT),
      totalServices: await getCountServices(),
      subscriptionsByCategory: await getSubscriptionsByCategory(),
      activeSubscriptions: await getCountSubscriptions(SubscriptionStatus.ACTIVE),
      pendingPaymentSubscriptions: await getCountSubscriptions(SubscriptionStatus.PENDING_PAYMENT),
      canceledSubscriptions: await getCountSubscriptions(SubscriptionStatus.CANCELED),
      expiredSubscriptions: await getCountSubscriptions(SubscriptionStatus.EXPIRED),
      revenueThisMonth: await getRevenueByMonth(new Date().getMonth()),
      revenueLastMonth: await getRevenueByMonth(new Date().getMonth() - 1),
      totalRevenue: await getTotalRevenue(),
      lastClientSubscriptions: await subscriptionRepository.findAll(
        {},
        { limit: 5, sort: { createdAt: -1 } }
      ),
      lastPayments: await getPayments({}, { limit: 3, sort: { paidAt: -1 } }),
      topSubscribedServices: await getTopSubscribedServices(),
    };

    return dashboardData;
  } catch {
    throw new Error("Failed to get dashboard data");
  }
};
