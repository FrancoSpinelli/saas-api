import { CategoryRepository } from "./categories.repository";

const categoryRepository = new CategoryRepository();

export const getCategories = () => {
  return categoryRepository.findAll();
};

export const getCategoryById = (id: string) => {
  return categoryRepository.findById(id);
};
