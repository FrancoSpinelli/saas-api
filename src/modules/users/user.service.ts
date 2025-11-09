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
  return userRepository.findOne({ email });
};
