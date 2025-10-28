export const userSchema = {
  $id: 'User',
  type: 'object',
  properties: {
    id: { type: 'number' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
  },
  required: ['first_name', 'last_name', 'email'],
};

export const postUserSchema = {
  body: {
    type: 'object',
    properties: {
      first_name: { type: 'string' },
      last_name: { type: 'string' },
      email: { type: 'string', format: 'email' },
    },
    required: ['first_name', 'last_name', 'email'],
  },
  response: {
    201: { $ref: 'User#' },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};

export const getUserByIdSchema = {
  params: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
    },
    required: ['userId'],
  },
  response: {
    200: { $ref: 'User#' },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};

export const getAllUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: { $ref: 'User#' },
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};


export const updateUserSchema = {
  params: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
    },
    required: ['userId'],
  },
  body: {
    type: 'object',
    properties: {
      first_name: { type: 'string' },
      last_name: { type: 'string' },
      email: { type: 'string', format: 'email' },
    },
    additionalProperties: false,
  },
  response: {
    200: { $ref: 'User#' },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};


export const deleteUserSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        deletedCount: { type: 'number' },
      },
      required: ['message', 'deletedCount'],
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};


export const deleteUserByIdSchema = {
  params: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
    },
    required: ['userId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: { $ref: 'User#' },
      },
      required: ['message', 'user'],
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        details: { type: 'string' },
      },
      required: ['error', 'details'],
    },
  },
};
