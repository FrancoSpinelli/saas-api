import { Request, Response } from "express";
import { usersMock } from "../../mocks";
import { Res } from "../../utils/Response";
import * as userService from "./user.service";

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();

  res.status(200).json(new Res(users, "Usuarios obtenidos con éxito"));
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = userService.getUserById(userId);

  res.status(200).json(new Res(user, "Usuario obtenido con éxito"));
};
