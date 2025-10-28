import { FastifyInstance } from 'fastify';
import UserController from '../controllers/usercontrollers';
import {
  userSchema,
  postUserSchema,
  getUserByIdSchema,
  getAllUsersSchema,
  updateUserSchema,
  deleteUserSchema,
  deleteUserByIdSchema,
} from '../schema/userschema';

async function userRoutes(fastify: FastifyInstance) {
  
  fastify.addSchema(userSchema);
  fastify.post('/users', { schema: postUserSchema }, UserController.createUser);
 fastify.get('/users', { schema: getAllUsersSchema }, UserController.getallUser);
fastify.get('/users/:userId', { schema: getUserByIdSchema }, UserController.getUserById);
fastify.put('/users/:userId', { schema: updateUserSchema }, UserController.UpdateUser);
fastify.delete('/users', { schema: deleteUserSchema }, UserController.deleteUser);
fastify.delete('/users/:userId', { schema: deleteUserByIdSchema }, UserController.deleteUserById);
}

export default userRoutes;

