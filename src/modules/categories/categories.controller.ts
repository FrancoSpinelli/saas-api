import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as categoryService from "./categories.service";

export const getCategories = (req: Request, res: Response) => {
  const categories = categoryService.getCategories();

  res.status(200).json(new Res(categories, "Categorías obtenidas con éxito"));
};

export const getCategoryById = (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = categoryService.getCategoryById(categoryId);

  res.status(200).json(new Res(category, "Categoría obtenida con éxito"));
};
