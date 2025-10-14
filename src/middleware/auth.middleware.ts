import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Res } from "../utils/Response";
import { getUserById } from "../modules/users/user.service";

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export async function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const invalidTokenMessage = "Token inválido o expirado";

  const authHeader = (req.headers.authorization ?? req.headers.Authorization) as string | undefined;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json(new Res(null, invalidTokenMessage, false));
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET ?? "";

  try {
    const payload = jwt.verify(token, secret) as JwtPayload;
    req.user = getUserById(payload.id);
    if (!req.user) {
      return res.status(401).json(new Res(null, invalidTokenMessage, false));
    }
    
    return next();
  } catch (err) {
    return res.status(401).json(new Res(null, invalidTokenMessage, false));
  }
}

export default authMiddleware;
