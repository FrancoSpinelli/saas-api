import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as planService from "./plans.service";

export const getPlans = (req: Request, res: Response) => {
  const plans = planService.getPlans();

  res.status(200).json(new Res(plans, "Planes obtenidos con éxito"));
};

export const getPlanById = (req: Request, res: Response) => {
  const planId = req.params.id;
  const plan = planService.getPlanById(planId);

  res.status(200).json(new Res(plan, "Plan obtenido con éxito"));
};
