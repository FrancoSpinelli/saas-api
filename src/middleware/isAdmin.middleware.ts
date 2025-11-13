import { NextFunction, Request, Response } from "express";
import { Role } from "../enum";

export default function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.user?.role === Role.ADMIN) {
    return next();
  }
  return res.status(403).json({ message: "Forbidden" });
}
