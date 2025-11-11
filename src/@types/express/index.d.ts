import "express";
import { UserDocument } from "../../modules/users/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
      isAdmin?: boolean;
    }
  }
}
