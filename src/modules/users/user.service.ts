import { Role } from "../../enum";
import { getIO } from "../../socket/config";
import { UserProfile } from "../auth/auth.dto";
import { countUnreadNotifications } from "../notification/notification.service";
import { getPaymentsByUserId } from "../payments/payments.service";
import { getSubscriptionByUserId } from "../subscriptions/subscription.service";
import { UserDocument } from "./user.model";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository();

export const getUsers = () => {
  return userRepository.findAll();
};

export const getUserById = (id: string) => {
  return userRepository.findById(id);
};

export const getUserProfile = async (id: string): Promise<UserProfile | null> => {
  const user = await userRepository.findById(id);
  if (!user) return null;

  const userPayments = await getPaymentsByUserId(id);
  const userSubscriptions = await getSubscriptionByUserId(id);
  const unreadNotificationsCount = await countUnreadNotifications(id);

  const profile: UserProfile = {
    ...user,
    payments: userPayments,
    subscriptions: userSubscriptions,
    unreadNotificationsCount,
  };

  return profile;
};

export const getUserByEmail = (email: string) => {
  return userRepository.findOne({ email, active: true });
};

export const getUserByEmailToAuth = (email: string) => {
  return userRepository.findByEmailToAuth(email);
};

export const getUserCountByRole = (role: Role) => {
  return userRepository.count({ role, active: true });
};

export const createUser = (data: Partial<UserDocument>) => {
  return userRepository.create(data);
};

export const updateProfile = async (id: string, data: Partial<UserDocument>) => {
  const existingUser = await userRepository.findById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }
  return userRepository.update(id, data);
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


export function notifyProfileUpdated(userId: string) {
  const io = getIO();
  io.emit("PROFILE_UPDATED", {
    userId,
    timestamp: new Date(),
  });

}
