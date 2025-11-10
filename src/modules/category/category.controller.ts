import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as categoryService from "./category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./category.schema";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(new Res(categories, "Categorías obtenidas con éxito"));
};

export const getCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = await categoryService.getCategoryById(categoryId);

  res.status(200).json(new Res(category, "Categoría obtenida con éxito"));
};

export const activeCategoryToggle = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    await categoryService.activeCategoryToggle(categoryId);
    res.status(200).json(new Res(null, "Actividad de la categoría actualizada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al actualizar la actividad de la categoría", false));
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const newCategoryData = req.body as CreateCategoryDto;
  try {
    const newCategory = await categoryService.createCategory(newCategoryData);
    res.status(201).json(new Res(newCategory, "Categoría creada con éxito"));
  } catch (error) {
    res.status(400).json(new Res(null, "Error al crear la categoría", false));
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const newCategoryData = req.body as UpdateCategoryDto;
  try {
    const newCategory = await categoryService.updateCategory(req.params.id, newCategoryData);
    res.status(201).json(new Res(newCategory, "Categoría actualizada con éxito"));
  } catch (error) {
    res.status(400).json(new Res(null, "Error al actualizar la categoría", false));
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    await categoryService.deleteCategory(categoryId);
    res.status(200).json(new Res(null, "Categoría eliminada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al eliminar la categoría", false));
  }
};
