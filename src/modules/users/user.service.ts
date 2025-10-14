import { usersMock } from "../../mocks";

export const getUsers = () => {
  return usersMock;
};

export const getUserById = (id: string) => {
  return usersMock.find((user) => user.id === id);
};
