import express from "express";
import isAdmin from "../../middleware/isAdmin.middleware";
import { noCache } from "../../middleware/noCache.middleware";
import {
  activeServiceToggle,
  createService,
  deleteService,
  getActiveServices,
  getInterestedServices,
  getServiceById,
  getServices,
  updateService,
} from "./services.controller";

const servicesRouter = express.Router();

servicesRouter.get("/interested", getInterestedServices);
servicesRouter.get("/active", getActiveServices);
servicesRouter.get("/:id", noCache, getServiceById);

servicesRouter.get("/", isAdmin, getServices);
servicesRouter.post("/", isAdmin, createService);
servicesRouter.put("/:id", isAdmin, updateService);
servicesRouter.patch("/:id/activeToggle", isAdmin, activeServiceToggle);
servicesRouter.delete("/:id", isAdmin, deleteService);

export default servicesRouter;
