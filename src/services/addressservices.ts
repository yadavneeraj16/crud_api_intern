import User from "../models/user";
import Address from "../models/address";
class AddressService {
  async createAddress(data: any) {
    try {
      const address = await Address.create(data);
      return address;
    } catch (err: any) {
      throw new Error(err.message || "Failed to create user");
    }
  }
  async getAllAddress(){
    try {
      const addresses = await Address.findAll();
      return addresses;
    } catch (err: any) {
      throw new Error(err.message || "Failed to create user");
    }
  }
  async getAddressById(Id:any){
    try {
      const address = await Address.findByPk(Id);
      return address;
    } catch (err: any) {
      throw new Error(err.message || "Failed to create user");
    }
  }
  async UpdateAddress(id: number, data: any) {
      try {
        const address = await Address.findByPk(id);
        if (!address) return null; 
  
        await address.update(data);
        return address;
      } catch (err: any) {
        throw new Error(err.message || "Failed to update address");
      }
    }
     async PatchUpdateAddress(id: number, data: any) {
      try {
        const address = await Address.findByPk(id);
        if (!address) return null; 
  
        await address.update(data);
        return address;
      } catch (err: any) {
        throw new Error(err.message || "Failed to update address");
      }
    }

async deleteAddress() {
    try {
      const deletedCount = await Address.destroy({ where: {} });
      return deletedCount; // number of deleted rows
    } catch (err: any) {
      throw new Error(err.message || "Failed to delete address");
    }
  }

  async deleteAddressById(id: number) {
    try {
      const address = await Address.findByPk(id);
      if (!address) return null;

      await address.destroy();
      return address; // return deleted user
    } catch (err: any) {
      throw new Error(err.message || "Failed to delete address");
    }
  }


  async getAddressesByPincode(pincode: string) {
    try {
      const addresses = await Address.findAll({
        where: { pincode },
        include: [{ model: User, as: "user" }], 
      });
      return addresses;
    } catch (err: any) {
      throw new Error(err.message || "Failed to fetch addresse by pincode");
    }
  }

  async getUsersWithAddresses() {
    try {
      const users = await User.findAll({
        include: [{ model: Address, as: "addresses" }],
      });
      return users;
    } catch (err: any) {
      throw new Error(err.message || "Failed to fetch users with addresses");
    }
  }

}
export default new AddressService();
