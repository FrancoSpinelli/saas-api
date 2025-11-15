import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import { getServicesByInterestedCategories } from "../services/services.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./category.schema";
import * as categoryService from "./category.service";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(new Res(categories, "Categorías obtenidas con éxito"));
};

export const getCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = await categoryService.getCategoryById(categoryId);

  res.status(200).json(new Res(category, "Categoría obtenida con éxito"));
};

export const createCategory = async (req: Request, res: Response) => {
  const newCategoryData = req.body as CreateCategoryDto;

  const { name } = newCategoryData;
  try {
    const categoryExistsByName = await categoryService.categoryExists({ name });
    if (categoryExistsByName) {
      return res.status(200).json(new Res(null, "Ya existe una categoría con ese nombre", false));
    }
    const newCategory = await categoryService.createCategory(newCategoryData);
    res.status(201).json(new Res(newCategory, "Categoría creada con éxito"));
  } catch {
    res.status(400).json(new Res(null, "Error al crear la categoría", false));
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const newCategoryData = req.body as UpdateCategoryDto;
  const { name } = newCategoryData;
  try {
    const categoryExistsByName = await categoryService.categoryExists({ name });
    if (categoryExistsByName && String(categoryExistsByName._id) !== req.params.id) {
      return res.status(200).json(new Res(null, "Ya existe una categoría con ese nombre", false));
    }
    const newCategory = await categoryService.updateCategory(req.params.id, newCategoryData);
    res.status(201).json(new Res(newCategory, "Categoría actualizada con éxito"));
  } catch {
    res.status(400).json(new Res(null, "Error al actualizar la categoría", false));
  }
};

export const activeCategoryToggle = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    await categoryService.activeCategoryToggle(categoryId);
    res.status(200).json(new Res(null, "Actividad de la categoría actualizada con éxito"));
  } catch {
    res.status(404).json(new Res(null, "Error al actualizar la actividad de la categoría", false));
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    const isCategoryInUse = await getServicesByInterestedCategories([categoryId]);
    if (isCategoryInUse.length) {
      return res
        .status(200)
        .json(new Res(null, "La categoría está en uso y no se puede eliminar", false));
    }
    await categoryService.deleteCategory(categoryId);
    res.status(200).json(new Res(null, "Categoría eliminada con éxito"));
  } catch {
    res.status(404).json(new Res(null, "Error al eliminar la categoría", false));
  }
};
