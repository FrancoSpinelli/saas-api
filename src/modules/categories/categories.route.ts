import express from "express";
import { getCategories, getCategoryById } from "./categories.controller";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:id", getCategoryById);

export default categoriesRouter;
