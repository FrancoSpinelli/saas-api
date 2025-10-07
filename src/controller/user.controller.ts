import express from "express";
import { usersMock } from "../mocks";
import { SuccessResponse } from "../utils/Response";

export const getUsers = (_: express.Request, res: express.Response) => {
  const users = usersMock;

  res.status(200).json(new SuccessResponse(users, "Usuarios obtenidos con éxito"));
};

export const getUserById = (req: express.Request, res: express.Response) => {
  const userId = req.params.id;
  const user = usersMock.find((user) => user.id === userId);

  res.status(200).json(new SuccessResponse(user, "Usuario obtenido con éxito"));
};
