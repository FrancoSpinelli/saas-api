import express from "express";
import { validate } from "../../middleware";
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
categoriesRouter.post("/", validate(CreateCategorySchema), createCategory);
categoriesRouter.put("/:id", validate(UpdateCategorySchema), updateCategory);
categoriesRouter.patch("/:id/activeToggle", activeCategoryToggle);
categoriesRouter.delete("/:id", deleteCategory);

export default categoriesRouter;
