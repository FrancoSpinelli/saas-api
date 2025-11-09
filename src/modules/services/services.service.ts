import { ServiceRepository } from "./services.repository";

const serviceRepository = new ServiceRepository();

export const getServices = () => {
  return serviceRepository.findAll();
};

export const getServiceById = (id: string) => {
  return serviceRepository.findById(id);
};
