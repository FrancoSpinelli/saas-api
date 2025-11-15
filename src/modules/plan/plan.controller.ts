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

  const { period, price, currency, name } = newPlanData;

  const planExists = await planService.planExists({ period, price, currency });
  if (planExists) {
    return res.status(200).json(new Res(null, "Ya existe un plan con esas características", false));
  }

  const planExistsByName = await planService.planExists({ name });
  if (planExistsByName) {
    return res.status(200).json(new Res(null, "Ya existe un plan con ese nombre", false));
  }

  try {
    const newPlan = await planService.createPlan(newPlanData);
    res.status(201).json(new Res(newPlan, "Plan creado con éxito"));
  } catch {
    res.status(400).json(new Res(null, "Error al crear el plan", false));
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  const newPlanData = req.body as UpdatePlanDto;
  const { name } = newPlanData;
  try {
    const { period, price, currency } = newPlanData;
    const planExists = await planService.planExists({ period, price, currency });
    if (planExists && planExists._id !== req.params.id) {
      return res
        .status(200)
        .json(new Res(null, "Ya existe un plan con esas características", false));
    }

    const planExistsByName = await planService.planExists({ name });
    if (planExistsByName && String(planExistsByName._id) !== req.params.id) {
      return res.status(200).json(new Res(null, "Ya existe un plan con ese nombre", false));
    }
    const newPlan = await planService.updatePlan(req.params.id, newPlanData);
    res.status(201).json(new Res(newPlan, "Plan actualizado con éxito"));
  } catch {
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
    const isPlanInUse = await planService.isPlanInUse(planId);
    if (isPlanInUse) {
      return res
        .status(200)
        .json(new Res(null, "El plan está en uso y no se puede eliminar", false));
    }
    await planService.deletePlan(planId);
    res.status(200).json(new Res(null, "Plan eliminado con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, (error as Error).message, false));
  }
};
