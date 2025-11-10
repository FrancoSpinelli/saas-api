import { PlanRepository } from "./plans.repository";

const planRepository = new PlanRepository();

export const getPlans = () => {
  return planRepository.findAll();
};

export const getPlanById = (id: string) => {
  return planRepository.findById(id);
};

export const activePlanToggle = async (id: string) => {
  const plan = await planRepository.findById(id);
  if (!plan) {
    throw new Error("Plan not found");
  }
  return planRepository.update(id, { active: !plan.active });
};
