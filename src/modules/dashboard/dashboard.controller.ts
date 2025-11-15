import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as dashboardService from "./dashboard.service";

export const getDashboardInfo = async (req: Request, res: Response) => {
  const dashboardInfo = await dashboardService.getDashboardInfo();
  res.status(200).json(new Res(dashboardInfo, "Información del dashboard obtenida con éxito"));
};
