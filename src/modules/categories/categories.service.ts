import { CategoryRepository } from "./categories.repository";

const categoryRepository = new CategoryRepository();

export const getCategories = () => {
  return categoryRepository.findAll();
};

export const getCategoryById = (id: string) => {
  return categoryRepository.findById(id);
};

export const activeCategoryToggle = async (id: string) => {
  const category = await categoryRepository.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return categoryRepository.update(id, { active: !category.active });
};
