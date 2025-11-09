import { Request, Response } from "express";
import { Res } from "../../utils/Response";
import * as userService from "./user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.status(200).json(new Res(users, "Usuarios obtenidos con éxito"));
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);

  res.status(200).json(new Res(user, "Usuario obtenido con éxito"));
};
