import express from "express";
import isAdmin from "../../middleware/isAdmin.middleware";
import { getDashboardInfo } from "./dashboard.controller";

const dashboardRouter = express.Router();

dashboardRouter.get("/", isAdmin, getDashboardInfo);

export default dashboardRouter;
