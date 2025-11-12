import { BaseRepository } from "../../database/base.repository";
import { UserDocument, UserModel } from "./user.model";

export class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super(UserModel);
  }

  async findByEmail(email: string) {
    return await this.model.findOne({ email, select: { password: 1 } }).lean();
  }

  async findByEmailToAuth(email: string) {
    return this.model
      .findOne({ email, active: true })
      .select("+password")
      .lean() as Promise<UserDocument | null>;
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.model.findById(id).populate("interests").lean() as Promise<UserDocument | null>;
  }
}

export const userRepository = new UserRepository();
