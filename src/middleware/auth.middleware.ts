import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../config";
import { Role } from "../enum";
import { UserDocument } from "../modules/users/user.model";
import { getUserById } from "../modules/users/user.service";
import { Res } from "../utils/Response";

export interface AuthenticatedRequest extends Request {
  user?: UserDocument;
  isAdmin?: boolean;
}

const JWT_SECRET = env.JWT_SECRET;

export async function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const invalidTokenMessage = "Token inválido o expirado";
  const UnauthorizedMessage = "No autorizado";

  const authHeader = (req.headers.authorization ?? req.headers.Authorization) as string | undefined;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json(new Res(null, UnauthorizedMessage, false));
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await getUserById(payload._id);
    if (!user) {
      return res.status(401).json(new Res(null, UnauthorizedMessage, false));
    }
    req.user = user;
    req.userId = String(user._id);
    req.isAdmin = user.role === Role.ADMIN;
    return next();
  } catch {
    return res.status(401).json(new Res(null, invalidTokenMessage, false));
  }
}

export default authMiddleware;
