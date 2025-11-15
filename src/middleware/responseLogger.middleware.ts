import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

const logPath = path.join(__dirname, "../../logs/errors.log");

if (!fs.existsSync(path.dirname(logPath))) {
  fs.mkdirSync(path.dirname(logPath));
}

export function responseLogger(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json;

  res.json = function (body: { success: boolean; message?: string }) {
    if (body && body.success === false) {
      const userData = {
        id: req.user?._id,
        email: req.user?.email,
        role: req.user?.role,
      };

      const logEntry = `
[${new Date().toISOString()}] 
${req.method} ${req.originalUrl}
Request Body: ${JSON.stringify(req.body)}
Body: ${JSON.stringify(body)}
User: ${req.user ? JSON.stringify(userData) : "No autenticado"}
-----------------------------------------------------
`;
      fs.appendFileSync(logPath, logEntry);
    }

    return originalJson.call(this, body);
  };

  next();
}
