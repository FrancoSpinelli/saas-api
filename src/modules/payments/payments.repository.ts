import { BaseRepository } from "../../database/base.repository";
import { PaymentDocument, PaymentModel } from "./payments.model";

export class PaymentRepository extends BaseRepository<PaymentDocument> {
  constructor() {
    super(PaymentModel);
  }
}

export const paymentRepository = new PaymentRepository();
