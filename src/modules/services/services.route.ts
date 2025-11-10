import express from "express";
import { activeServiceToggle, getServiceById, getServices } from "./services.controller";

const servicesRouter = express.Router();

servicesRouter.get("/", getServices);
servicesRouter.get("/:id", getServiceById);
servicesRouter.patch("/:id/activeToggle", activeServiceToggle);

export default servicesRouter;
