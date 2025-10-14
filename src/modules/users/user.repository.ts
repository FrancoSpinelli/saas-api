import { BaseRepository } from "../../database/base.repository";
import { UserDocument, UserModel } from "./user.model";

export class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super(UserModel);
  }

  async findByEmail(email: string) {
    return await this.model.findOne({ email }).lean();
  }
}

export const userRepository = new UserRepository();
