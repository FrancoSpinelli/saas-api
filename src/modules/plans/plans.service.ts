import { PlanRepository } from "./plans.repository";

const planRepository = new PlanRepository();

export const getPlans = () => {
  return planRepository.findAll();
};

export const getPlanById = (id: string) => {
  return planRepository.findById(id);
};
