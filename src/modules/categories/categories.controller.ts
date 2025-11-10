import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as categoryService from "./categories.service";

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
    res.status(404).json(new Res(null, (error as Error).message, false));
  }
};
