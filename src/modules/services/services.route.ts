import express from "express";
import {
  activeServiceToggle,
  createService,
  deleteService,
  getInterestedServices,
  getServiceById,
  getServices,
  updateService,
} from "./services.controller";

const servicesRouter = express.Router();

servicesRouter.get("/", getServices);
servicesRouter.get("/interested", getInterestedServices);
servicesRouter.get("/:id", getServiceById);
servicesRouter.post("/", createService);
servicesRouter.put("/:id", updateService);
servicesRouter.patch("/:id/activeToggle", activeServiceToggle);
servicesRouter.delete("/:id", deleteService);

export default servicesRouter;
