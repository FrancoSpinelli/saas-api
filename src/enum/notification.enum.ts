export enum NotificationType {
  SUBSCRIPTIONS_ACTIVE = "SUBSCRIPTIONS_ACTIVE",
  SUBSCRIPTIONS_PENDING = "SUBSCRIPTIONS_PENDING",
  SUBSCRIPTIONS_EXPIRED = "SUBSCRIPTIONS_EXPIRED",
  SUBSCRIPTIONS_CANCELED = "SUBSCRIPTIONS_CANCELED",
  SUBSCRIPTIONS_RENEWED = "SUBSCRIPTIONS_RENEWED",

  PAYMENTS_SUCCESS = "PAYMENTS_SUCCESS",
}

export enum NotificationReferenceType {
  SUBSCRIPTION = "SUBSCRIPTION",
  SERVICE = "SERVICE",
  PAYMENT = "PAYMENT",
}

export enum NotificationMessage {
  SUBSCRIPTION_ACTIVE = "Tu suscripción está activa. Ya podés disfrutar del servicio!",
  SUBSCRIPTION_PENDING = "Tu suscripción está pendiente. Por favor, completá el pago para activarla.",
  SUBSCRIPTION_EXPIRED = "Tu suscripción ha expirado. Podés renovarla cuando quieras.",
  SUBSCRIPTION_CANCELED = "Tu suscripción ha sido cancelada. Esperamos verte de nuevo pronto.",
  SUBSCRIPTION_RENEWED = "Tu suscripción ha sido renovada con éxito. Gracias por seguir con nosotros.",

  PAYMENT_SUCCESS = "Tu pago fue procesado correctamente.",
}
