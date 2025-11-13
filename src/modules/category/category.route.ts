import express from "express";
import { validate } from "../../middleware";
import isAdmin from "../../middleware/isAdmin.middleware";
import {
  activeCategoryToggle,
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "./category.controller";
import { CreateCategorySchema, UpdateCategorySchema } from "./category.schema";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:id", getCategoryById);
categoriesRouter.post("/", isAdmin, validate(CreateCategorySchema), createCategory);
categoriesRouter.put("/:id", isAdmin, validate(UpdateCategorySchema), updateCategory);
categoriesRouter.patch("/:id/activeToggle", isAdmin, activeCategoryToggle);
categoriesRouter.delete("/:id", isAdmin, deleteCategory);

export default categoriesRouter;
