import { compareSync, hashSync } from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config";
import { Role } from "../../enum";
import { Res } from "../../utils/Response";
import * as userService from "../users/user.service";
import { LoggedUser, SignInDto, SignUpDto } from "./auth.dto";

const JWT_SECRET = env.JWT_SECRET;

export const signUp = async (req: express.Request, res: express.Response) => {
  const newUser: SignUpDto = req.body;

  const hash = hashSync(newUser.password, 10);

  newUser.password = hash;

  const user = await userService.createUser(newUser);

  const response: LoggedUser = {
    id: user.id,
    ...newUser,
    role: Role.CLIENT,
    token: generateToken(user.id),
  };

  res.status(201).json(new Res(response, "Usuario creado con éxito"));
};

export const signIn = async (req: express.Request, res: express.Response) => {
  const { email, password }: SignInDto = req.body;

  const user = await userService.getUserByEmail(email);

  if (user && compareSync(password, user.password)) {
    const response: LoggedUser = {
      ...user,
      role: user.role,
      token: generateToken(user.id),
    };

    res.status(200).json(new Res(response, "Inicio de sesión exitoso"));
  } else {
    res.status(401).json(new Res(null, "Credenciales inválidas", false));
  }
};

function generateToken(userId: string): string {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
}
