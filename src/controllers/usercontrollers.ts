import { FastifyRequest, FastifyReply } from "fastify";
import userService from "../services/userservices";

interface GetUserParams {
  userId: number;
}

class UserController {
  async createUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await userService.createUser(request.body);
      reply.code(201).send(user);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to create user",
        details: error.message,
      });
    }
  }

  async getallUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await userService.getallUser();
     

    reply.code(200).send(users);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to fetch users",
        details: error.message,
      });
    }
  }

  async getUserById(
    request: FastifyRequest<{ Params: GetUserParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const user = await userService.getUserById(id);

      if (!user) {
        return reply.code(404).send({
          error: "User not found",
          details: `No user exists with this ID `,
        });
      }

      reply.code(200).send(user);
    } catch (error: any) {
      reply.code(500).send({
        error: "Internal server error",
        details: error.message,
      });
    }
  }

  async UpdateUser(
    request: FastifyRequest<{ Params: GetUserParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const updatedData = request.body;
      const updatedUser = await userService.UpdateUser(id, updatedData);

      if (!updatedUser) {
        return reply.code(404).send({
          error: "User not found",
          details: `No user exists with ID ${id}`,
        });
      }

      reply.code(200).send(updatedUser);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to update user",
        details: error.message,
      });
    }
  }

  async deleteUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const deletedCount = await userService.deleteUser();
      reply.code(200).send({
        message: "All users deleted successfully",
        count: deletedCount,
      });
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to delete users",
        details: error.message,
      });
    }
  }

  async deleteUserById(
    request: FastifyRequest<{ Params: GetUserParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const deletedUser = await userService.deleteUserById(id);

      if (!deletedUser) {
        return reply.code(404).send({
          error: "User not found",
          details: `No user exists with ID ${id}`,
        });
      }

      reply.code(200).send({
        message: "User deleted successfully",
        user: deletedUser,
      });
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to delete user",
        details: error.message,
      });
    }
  }
}

export default new UserController();
