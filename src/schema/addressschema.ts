export const addressSchema = {
  $id: "Address",
  type: "object",
  properties: {
    id: { type: "number" },
    user_id: { type: "number" },
    street: { type: "string" },
    city: { type: "string" },
    state: { type: "string" },
    pincode: { type: "string" },
    created_at: { type: "string", format: "date-time" },
    updated_at: { type: "string", format: "date-time" },
  },
  required: ["user_id", "street", "city", "state", "pincode"],
};

export const postAddressSchema = {
  body: {
    type: "object",
    properties: {
      user_id: { type: "number" },
      street: { type: "string" },
      city: { type: "string" },
      state: { type: "string" },
      pincode: { type: "string",pattern: "^[0-9]{6}$" },
    },
    required: ["user_id", "street", "city", "state", "pincode"],
  },
  response: {
    201: { $ref: "Address#" },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const getAddressByIdSchema = {
  params: {
    type: "object",
    properties: {
      userId: { type: "number" },
    },
    required: ["userId"],
  },
  response: {
    200: { $ref: "Address#" },
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const getAllAddressesSchema = {
  response: {
    200: {
      type: "array",
      items: { $ref: "Address#" },
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const updateAddressSchema = {
  params: {
    type: "object",
    properties: {
      userId: { type: "number" },
    },
    required: ["userId"],
  },
  body: {
    type: "object",
    properties: {
      street: { type: "string" },
      city: { type: "string" },
      state: { type: "string" },
      pincode: { type: "string" },
    },
    required: ["street", "city", "state", "pincode"],
    additionalProperties: false,
  },
  response: {
    200: { $ref: "Address#" },
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const PatchupdateAddressSchema = {
  params: {
    type: "object",
    properties: {
      userId: { type: "number" },
    },
    required: ["userId"],
  },
  body: {
    type: "object",
    properties: {
      street: { type: "string" },
      city: { type: "string" },
      state: { type: "string" },
      pincode: { type: "string" },
    },

    additionalProperties: false,
  },
  response: {
    200: { $ref: "Address#" },
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};
export const deleteAddressSchema = {
  response: {
    200: {
      type: "object",
      properties: {
        message: { type: "string" },
        deletedCount: { type: "number" },
      },
      required: ["message", "deletedCount"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const deleteAddressByIdSchema = {
  params: {
    type: "object",
    properties: {
      userId: { type: "number" },
    },
    required: ["userId"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        message: { type: "string" },
        address: { $ref: "Address#" },
      },
      required: ["message", "address"],
    },
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const getUsersWithAddressesSchema = {
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          first_name: { type: "string" },
          last_name: { type: "string" },
          email: { type: "string" },
          addresses: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                street: { type: "string" },
                state: { type: "string" },
                city: { type: "string" },
                pincode: { type: "string" },
              },
            },
          },
        },
      },
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};

export const getAddressesByPincodeSchema = {
  params: {
    type: "object",
    properties: {
      pincode: { type: "string", pattern: "^[0-9]{6}$" },
    },
    required: ["pincode"],
  },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          street: { type: "string" },
          state: { type: "string" },
          city: { type: "string" },
          pincode: { type: "string" },
        },
      },
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        details: { type: "string" },
      },
      required: ["error", "details"],
    },
  },
};
