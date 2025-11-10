import { Request, Response } from "express";
import { Res } from "../../utils/Response";
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

export const activeServiceToggle = async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  try {
    await servicesService.activeServiceToggle(serviceId);
    res.status(200).json(new Res(null, "Actividad del servicio actualizada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, (error as Error).message, false));
  }
};
