import { UserDocument } from "./user.model";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository();

export const getUsers = () => {
  return userRepository.findAll();
};

export const getUserById = (id: string) => {
  return userRepository.findById(id);
};

export const createUser = (data: Partial<UserDocument>) => {
  return userRepository.create(data);
};

export const getUserByEmail = (email: string) => {
  return userRepository.findOne({ email, active: true });
};

export const getUserByEmailToAuth = (email: string) => {
  return userRepository.findByEmailToAuth(email);
};

export const activeUserToggle = async (id: string) => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return userRepository.update(id, { active: !user.active });
};

export const deleteUser = async (id: string) => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return userRepository.delete(id);
};