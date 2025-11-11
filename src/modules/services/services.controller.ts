import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import { UserDocument } from "../users/user.model";
import { CreateServiceDto, UpdateServiceDto } from "./service.schema";
import * as servicesService from "./services.service";

export const getServices = async (req: Request, res: Response) => {
  const services = await servicesService.getServices();
  return res.status(200).json(new Res(services, "Servicios obtenidos con éxito"));
};

export const getServiceById = async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  const service = await servicesService.getServiceById(serviceId);
  return res.status(200).json(new Res(service, "Servicio obtenido con éxito"));
};

export const createService = async (req: Request, res: Response) => {
  const newServiceData = req.body as CreateServiceDto;
  const owner = (req as unknown as { user: UserDocument }).user as UserDocument;
  newServiceData.owner = owner;

  const { name } = newServiceData;
  try {
    const existingService = await servicesService.existsService({ name });
    if (existingService) {
      return res.status(200).json(new Res(null, "Ya existe un servicio con ese nombre", false));
    }
    const newService = await servicesService.createService(newServiceData);
    return res.status(201).json(new Res(newService, "Servicio creado con éxito"));
  } catch (error) {
    return res.status(400).json(new Res(null, "Error al crear el servicio", false));
  }
};

export const updateService = async (req: Request, res: Response) => {
  const updatedServiceData = req.body as UpdateServiceDto;
  const { name } = updatedServiceData;
  try {
    const existingService = await servicesService.existsService({ name });
    if (existingService && String(existingService._id) !== req.params.id) {
      return res.status(200).json(new Res(null, "Ya existe un servicio con ese nombre", false));
    }
    const updatedService = await servicesService.updateService(req.params.id, updatedServiceData);
    return res.status(200).json(new Res(updatedService, "Servicio actualizado con éxito"));
  } catch (error) {
    return res.status(400).json(new Res(null, "Error al actualizar el servicio", false));
  }
};

export const activeServiceToggle = async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  try {
    await servicesService.activeServiceToggle(serviceId);
    res.status(200).json(new Res(null, "Actividad del servicio actualizada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al actualizar la actividad del servicio", false));
  }
};

export const deleteService = async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  try {
    await servicesService.deleteService(serviceId);
    res.status(200).json(new Res(null, "Servicio eliminado con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al eliminar el servicio", false));
  }
};
