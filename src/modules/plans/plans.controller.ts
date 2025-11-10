import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as planService from "./plans.service";

export const getPlans = async (req: Request, res: Response) => {
  const plans = await planService.getPlans();

  res.status(200).json(new Res(plans, "Planes obtenidos con éxito"));
};

export const getPlanById = async (req: Request, res: Response) => {
  const planId = req.params.id;
  const plan = await planService.getPlanById(planId);

  res.status(200).json(new Res(plan, "Plan obtenido con éxito"));
};

export const activePlanToggle = async (req: Request, res: Response) => {
  const planId = req.params.id;
  try {
    await planService.activePlanToggle(planId);
    res.status(200).json(new Res(null, "Actividad del plan actualizada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, (error as Error).message, false));
  }
};
