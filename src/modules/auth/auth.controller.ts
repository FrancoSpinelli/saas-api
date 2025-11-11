import { compareSync, hashSync } from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config";
import { Role } from "../../enum";
import { Res } from "../../utils/Response";
import * as userService from "../users/user.service";
import { LoggedUser, SignInDto, SignUpDto } from "./auth.dto";

const JWT_SECRET = env.JWT_SECRET;

export const signUp = async (req: Request, res: Response) => {
  const newUser: SignUpDto = req.body;
  const isAdmin = req.isAdmin;
  const userExists = await userService.getUserByEmail(newUser.email);
  if (userExists) {
    return res
      .status(200)
      .json(new Res(null, "Ya existe un usuario con ese correo electrónico", false));
  }

  const hash = hashSync(newUser.password, 10);

  newUser.password = hash;
  const role = isAdmin ? Role.ADMIN : Role.CLIENT;
  const user = await userService.createUser({
    ...newUser,
    role,
  });

  const response: LoggedUser = {
    _id: user._id,
    ...newUser,
    role,
    token: generateToken(user._id),
  };

  res.status(201).json(new Res(response, "Usuario creado con éxito"));
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password }: SignInDto = req.body;

  const user = await userService.getUserByEmailToAuth(email);
  if (user && compareSync(password, user.password)) {
    const response: LoggedUser = {
      ...user,
      _id: user._id,
      role: user.role,
      token: generateToken(user._id),
    };

    res.status(200).json(new Res(response, "Inicio de sesión exitoso"));
  } else {
    res.status(401).json(new Res(null, "Credenciales inválidas", false));
  }
};

function generateToken(userId: string): string {
  return jwt.sign({ _id: userId }, JWT_SECRET, { expiresIn: "1h" });
}
