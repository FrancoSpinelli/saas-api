import express from "express";
import { activeCategoryToggle, getCategories, getCategoryById } from "./categories.controller";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:id", getCategoryById);
categoriesRouter.patch("/:id/activeToggle", activeCategoryToggle);

export default categoriesRouter;
