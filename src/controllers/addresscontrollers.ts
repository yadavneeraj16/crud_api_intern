import { FastifyRequest, FastifyReply } from "fastify";
import AddressService from "../services/addressservices";

interface GetAddressParams {
  userId: number;
}

class AddressController {
  async createAddress(request: FastifyRequest, reply: FastifyReply) {
    try {
      const address = await AddressService.createAddress(request.body);
      reply.code(201).send(address);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to create address",
        details: error.message,
      });
    }
  }
  async getallAddress(request: FastifyRequest, reply: FastifyReply) {
    try {
      const addresses = await AddressService.getAllAddress();
      reply.code(200).send(addresses);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to get address",
        details: error.message,
      });
    }
  }
  async getAddressById(
    request: FastifyRequest<{ Params: GetAddressParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const address = await AddressService.getAddressById(id);

      if (!address) {
        return reply.code(404).send({
          error: "Address not found",
          details: `No Address exists with ID ${id}`,
        });
      }

      reply.code(200).send(address);
    } catch (error: any) {
      reply.code(500).send({
        error: "Internal server error",
        details: error.message,
      });
    }
  }
  async UpdateAddress(
    request: FastifyRequest<{ Params: GetAddressParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const updatedData = request.body;
      const updatedAddress = await AddressService.UpdateAddress(id,updatedData);

      if (!updatedAddress) {
        return reply.code(404).send({
          error: "Address not found",
          details: `No address exists with ID ${id}`,
        });
      }

      reply.code(200).send(updatedAddress);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to update address",
        details: error.message,
      });
    }
  }


  async PatchUpdateAddress(
    request: FastifyRequest<{ Params: GetAddressParams }>,
    reply: FastifyReply
  ) {
    try {
      const id = request.params.userId;
      const updatedData = request.body;
      const updatedAddress = await AddressService.PatchUpdateAddress(id,updatedData);

      if (!updatedAddress) {
        return reply.code(404).send({
          error: "Address not found",
          details: `No address exists with ID ${id}`,
        });
      }

      reply.code(200).send(updatedAddress);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to update address",
        details: error.message,
      });
    }
  }

async deleteAddress(request: FastifyRequest, reply: FastifyReply) {
    try {
      const deletedCount = await AddressService.deleteAddress();
      reply.code(200).send({
        message: "All Addresses deleted successfully",
         deletedCount,
      });
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to delete addresses",
        details: error.message,
      });
    }
  }



async deleteAddressById(
  request: FastifyRequest<{ Params: GetAddressParams }>,
  reply: FastifyReply
) {
  try {
    const id = request.params.userId;
    const deletedAddress = await AddressService.deleteAddressById(id);

    if (!deletedAddress) {
      return reply.code(404).send({
        error: "Address not found",
        details: `No address exists with ID ${id}`,
      });
    }

    reply.code(200).send({
      message: "Address deleted successfully",
      address: deletedAddress,  
    });
  } catch (error: any) {
    reply.code(500).send({
      error: "Failed to delete address",
      details: error.message,
    });
  }
}


async getAddressesByPincode(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { pincode } = request.params as { pincode: string };
      const addresses = await AddressService.getAddressesByPincode(pincode);
      
      reply.code(200).send(addresses);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to fetch addresses by pincode",
        details: error.message,
      });
    }
  }

 async getUsersWithAddresses(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await AddressService.getUsersWithAddresses();
      reply.code(200).send(users);
    } catch (error: any) {
      reply.code(500).send({
        error: "Failed to fetch users with addresses",
        details: error.message,
      });
    }
  }

}

export default new AddressController();
