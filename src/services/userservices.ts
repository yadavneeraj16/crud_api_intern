import User from "../models/user";

class UserService {
  async createUser(data: any) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err: any) {
      throw new Error(err.message || "Failed to create user");
    }
  }
  async getallUser() {
    try {
      const users = await User.findAll();
      
      return users;
    } catch (err: any) {
      throw new Error(err.message || "Failed to fetch users");
    }
  }

  async getUserById(id: number) {
    try {
      const user = await User.findByPk(id);
      return user; // will be null if not found
    } catch (err: any) {
      throw new Error(err.message || "Failed to fetch user");
    }
  }

  async UpdateUser(id: number, data: any) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null; // user not found

      await user.update(data);
      return user;
    } catch (err: any) {
      throw new Error(err.message || "Failed to update user");
    }
  }

  async deleteUser() {
    try {
      const deletedCount = await User.destroy({ where: {} });
      return deletedCount; // number of deleted rows
    } catch (err: any) {
      throw new Error(err.message || "Failed to delete users");
    }
  }

  async deleteUserById(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;

      await user.destroy();
      return user; // return deleted user
    } catch (err: any) {
      throw new Error(err.message || "Failed to delete user");
    }
  }
}

export default new UserService();
