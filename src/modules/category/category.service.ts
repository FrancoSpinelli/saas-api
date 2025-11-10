import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto, UpdateCategoryDto } from "./category.schema";

const categoryRepository = new CategoryRepository();

export const getCategories = () => {
  return categoryRepository.findAll();
};

export const getCategoryById = (id: string) => {
  return categoryRepository.findById(id);
};

export const createCategory = async (category: CreateCategoryDto) => {
  return categoryRepository.create(category);
};

export const updateCategory = async (id: string, category: UpdateCategoryDto) => {
  const existingCategory = await categoryRepository.findById(id);
  if (!existingCategory) {
    throw new Error("Category not found");
  }
  return categoryRepository.update(id, category);
};

export const activeCategoryToggle = async (id: string) => {
  const category = await categoryRepository.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return categoryRepository.update(id, { active: !category.active });
};

export const deleteCategory = async (id: string) => {
  return categoryRepository.delete(id);
};
