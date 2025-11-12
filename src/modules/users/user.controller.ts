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

export const getUserProfile = async (req: Request, res: Response) => {
  const userIdContext = String(req.user?._id);

  try {
    const userProfile = await userService.getUserProfile(userIdContext);
    if (!userProfile || !userProfile.active) {
      return res.status(404).json(new Res(null, "Perfil de usuario no encontrado", false));
    }

    res.status(200).json(new Res(userProfile, "Perfil de usuario obtenido con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al obtener el perfil de usuario", false));
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await userService.updateProfile(userId, updateData);
    res.status(200).json(new Res(updatedUser, "Perfil de usuario actualizado con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al actualizar el perfil de usuario", false));
  }
};

export const activeUserToggle = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await userService.activeUserToggle(id);
    res.status(200).json(new Res(null, "Actividad del usuario actualizada con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al actualizar la actividad del usuario", false));
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    await userService.deleteUser(userId);
    res.status(200).json(new Res(null, "Usuario eliminado con éxito"));
  } catch (error) {
    res.status(404).json(new Res(null, "Error al eliminar el usuario", false));
  }
};
