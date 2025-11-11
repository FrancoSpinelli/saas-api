import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import { CreatePlanDto, UpdatePlanDto } from "./plan.schema";
import * as planService from "./plan.service";

export const getPlans = async (req: Request, res: Response) => {
  const plans = await planService.getPlans();

  res.status(200).json(new Res(plans, "Planes obtenidos con éxito"));
};

export const getPlanById = async (req: Request, res: Response) => {
  const planId = req.params.id;
  const plan = await planService.getPlanById(planId);

  res.status(200).json(new Res(plan, "Plan obtenido con éxito"));
};

export const createPlan = async (req: Request, res: Response) => {
  const newPlanData = req.body as CreatePlanDto;
  try {
    const newPlan = await planService.createPlan(newPlanData);
    res.status(201).json(new Res(newPlan, "Plan creado con éxito"));
  } catch (error) {
    res.status(400).json(new Res(null, "Error al crear el plan", false));
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  const newPlanData = req.body as UpdatePlanDto;
  try {
    const newPlan = await planService.updatePlan(req.params.id, newPlanData);
    res.status(201).json(new Res(newPlan, "Plan actualizado con éxito"));
  } catch (error) {
    res.status(400).json(new Res(null, "Error al actualizar el plan", false));
  }
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

export const deletePlan = async (req: Request, res: Response) => {
  const planId = req.params.id;
  try {
    await planService.deletePlan(planId);
    res.status(200).json(new Res(null, "Plan eliminado con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, (error as Error).message, false));
  }
};
