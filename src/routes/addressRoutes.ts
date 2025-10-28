import { FastifyInstance } from 'fastify';
import AddressController from '../controllers/addresscontrollers';
import {
  addressSchema,
  postAddressSchema,
  getAddressByIdSchema,
  getAllAddressesSchema,
  updateAddressSchema,
  PatchupdateAddressSchema,
  deleteAddressSchema,
  deleteAddressByIdSchema,
  getUsersWithAddressesSchema,
  getAddressesByPincodeSchema
} from '../schema/addressschema';

async function userRoutes(fastify: FastifyInstance) {
  
  fastify.addSchema(addressSchema);
   fastify.post('/addresses', { schema: postAddressSchema }, AddressController.createAddress);
 fastify.get('/addresses', { schema: getAllAddressesSchema }, AddressController.getAllAddresses);
fastify.get('/addresses/:userId', { schema: getAddressByIdSchema }, AddressController.getAddressById);
 fastify.put('/addresses/:userId', { schema: updateAddressSchema }, AddressController.UpdateAddress);
fastify.patch('/addresses/:userId', { schema: PatchupdateAddressSchema }, AddressController.PatchUpdateAddress);
fastify.delete('/addresses', { schema: deleteAddressSchema }, AddressController.deleteAddress);
fastify.delete('/addresses/:userId', { schema: deleteAddressByIdSchema }, AddressController.deleteAddressById);
fastify.get('/address/:pincode',{ schema: getAddressesByPincodeSchema },AddressController.getAddressesByPincode);
fastify.get('/users-with-addresses',{ schema: getUsersWithAddressesSchema },AddressController.getUsersWithAddresses);
}

export default userRoutes;
