import express from "express";
import { getServices, getServiceById } from "./services.controller";

const servicesRouter = express.Router();

servicesRouter.get("/", getServices);
servicesRouter.get("/:id", getServiceById);

export default servicesRouter;
