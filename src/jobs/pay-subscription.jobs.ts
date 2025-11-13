import cron from "node-cron";
import {
  getPendingPaymentSubscriptions,
  paidSubscription,
} from "../modules/subscriptions/subscription.service";

export const startPaySubscriptionsJob = () => {
  console.log("🕒 Iniciando cron job de actualización de suscripciones...");

  cron.schedule("* * * * *", async () => {
    try {
      const pendingPaymentSubscriptions = await getPendingPaymentSubscriptions();
      for (const sub of pendingPaymentSubscriptions) {
        await paidSubscription(sub);
        console.log(
          `[CRON] Suscripción ${sub._id} de cliente ${sub.client.firstName} ${sub.client.lastName} marcada como PAGADA.`
        );
      }
    } catch (err) {
      console.error("[CRON] Error al actualizar suscripciones:", err);
    }
  });
};
