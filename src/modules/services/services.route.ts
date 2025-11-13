import express from "express";
import isAdmin from "../../middleware/isAdmin.middleware";
import {
  activeServiceToggle,
  createService,
  deleteService,
  getInterestedServices,
  getServiceById,
  getServices,
  updateService,
  getActiveServices,
} from "./services.controller";

const servicesRouter = express.Router();

servicesRouter.get("/interested", getInterestedServices);
servicesRouter.get("/active", getActiveServices);
servicesRouter.get("/:id", getServiceById);

servicesRouter.get("/", isAdmin, getServices);
servicesRouter.post("/", isAdmin, createService);
servicesRouter.put("/:id", isAdmin, updateService);
servicesRouter.patch("/:id/activeToggle", isAdmin, activeServiceToggle);
servicesRouter.delete("/:id", isAdmin, deleteService);

export default servicesRouter;
