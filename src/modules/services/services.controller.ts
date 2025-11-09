import { Res } from "../../utils/Response";
import * as servicesService from "./services.service";

export const getServices = () => {
  const services = servicesService.getServices();
  return new Res(services, "Servicios obtenidos con éxito");
};

export const getServiceById = (serviceId: string) => {
  const service = servicesService.getServiceById(serviceId);
  return new Res(service, "Servicio obtenido con éxito");
};
