import { CreateServiceDto, UpdateServiceDto } from "./service.schema";
import { ServiceRepository } from "./services.repository";

const serviceRepository = new ServiceRepository();

export const getServices = () => {
  return serviceRepository.findAll();
};

export const getServiceById = (id: string) => {
  return serviceRepository.findById(id);
};

export const getActiveServices = () => {
  return serviceRepository.findAll({ active: true });
};

export const getServiceByUserId = (id: string) => {
  return serviceRepository.findAll({ client: id });
};

export const getServicesByInterestedCategories = (categories: string[]) => {
  return serviceRepository.findAll({ category: { $in: categories } });
};

export const getCountServices = () => {
  return serviceRepository.count();
};

export const getTopSubscribedServices = () => {
  return serviceRepository.getTopSubscribedServices();
};

export const createService = async (service: CreateServiceDto) => {
  return serviceRepository.create(service as any);
};

export const updateService = async (id: string, service: UpdateServiceDto) => {
  const existingService = await serviceRepository.findById(id);
  if (!existingService) {
    throw new Error("Service not found");
  }
  return serviceRepository.update(id, service);
};

export const activeServiceToggle = async (id: string) => {
  const service = await serviceRepository.findById(id);
  if (!service) {
    throw new Error("Service not found");
  }
  return serviceRepository.update(id, { active: !service.active });
};

export const deleteService = async (id: string) => {
  return serviceRepository.delete(id);
};

export async function existsService(createServiceDto: Partial<CreateServiceDto>) {
  return serviceRepository.findOne(createServiceDto);
}
