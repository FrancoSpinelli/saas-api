import { BaseRepository } from "../../database/base.repository";
import { ServiceDocument, ServiceModel } from "./services.model";

export class ServiceRepository extends BaseRepository<ServiceDocument> {
  constructor() {
    super(ServiceModel);
  }
}

export const serviceRepository = new ServiceRepository();
