import { CreatePlanDto, UpdatePlanDto } from "./plan.schema";
import { PlanRepository } from "./plan.repository";

const planRepository = new PlanRepository();

export const getPlans = () => {
  return planRepository.findAll();
};

export const getPlanById = (id: string) => {
  return planRepository.findById(id);
};

export const createPlan = async (plan: CreatePlanDto) => {
  return planRepository.create(plan);
};

export const updatePlan = async (id: string, plan: UpdatePlanDto) => {
  const existingPlan = await planRepository.findById(id);
  if (!existingPlan) {
    throw new Error("Plan not found");
  }
  return planRepository.update(id, plan);
};

export const activePlanToggle = async (id: string) => {
  const plan = await planRepository.findById(id);
  if (!plan) {
    throw new Error("Plan not found");
  }
  return planRepository.update(id, { active: !plan.active });
};

export const deletePlan = async (id: string) => {
  return planRepository.delete(id);
};

export const planExists = async (createPlanDto: Partial<CreatePlanDto>) => {
  return planRepository.findOne(createPlanDto);
};

export const isPlanInUse = async (planId: string) => {
  const count = await planRepository.count({ _id: planId });
  return count > 0;
};
