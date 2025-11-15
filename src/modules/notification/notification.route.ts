import express from "express";
import { getNotificationsByClient, readAllByClient } from "./notification.controller";

const notificationRouter = express.Router();

notificationRouter.get("/", getNotificationsByClient);
notificationRouter.post("/readAll", readAllByClient);

export default notificationRouter;
