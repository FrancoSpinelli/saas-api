import { ServiceRepository } from "./services.repository";

const serviceRepository = new ServiceRepository();

export const getServices = () => {
  return serviceRepository.findAll();
};

export const getServiceById = (id: string) => {
  return serviceRepository.findById(id);
};

export const activeServiceToggle = async (id: string) => {
  const service = await serviceRepository.findById(id);
  if (!service) {
    throw new Error("Service not found");
  }
  return serviceRepository.update(id, { active: !service.active });
};
