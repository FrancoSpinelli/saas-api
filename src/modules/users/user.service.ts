import { UserRepository } from "./user.repository";

const userRepository = new UserRepository();

export const getUsers = () => {
  return userRepository.findAll();
};

export const getUserById = (id: string) => {
  return userRepository.findById(id);
};
