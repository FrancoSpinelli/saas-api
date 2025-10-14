import { compareSync, hashSync } from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config";
import { Role } from "../../enum";
import { usersMock } from "../../mocks";
import { Res } from "../../utils/Response";
import { LoggedUser, SignInDto, SignUpDto } from "./auth.dto";

const JWT_SECRET = env.JWT_SECRET;

export const signUp = (req: express.Request, res: express.Response) => {
  const newUser: SignUpDto = req.body;

  const hash = hashSync(newUser.password, 10);

  newUser.password = hash;

  const userId = (usersMock.length + 1).toString();
  const response: LoggedUser = {
    id: userId,
    ...newUser,
    role: Role.CLIENT,
    token: generateToken(userId),
  };

  res.status(201).json(new Res(response, "Usuario creado con éxito"));
};

export const signIn = (req: express.Request, res: express.Response) => {
  const { email, password }: SignInDto = req.body;

  const user = usersMock.find(
    (user) => user.email === email && compareSync(password, user.password)
  );

  if (user) {
    const response: LoggedUser = {
      ...user,
      role: user.role,
      token: generateToken(user.id),
    };

    res.status(200).json(new Res(response, "Inicio de sesión exitoso"));
  } else {
    res.status(401).json(new Res(null, "Credenciales inválidas"));
  }
};

function generateToken(userId: string): string {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
}
