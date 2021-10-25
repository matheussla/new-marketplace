export default {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    contact: {
      name: 'Matheus Abreu',
      email: 'matheus.la1999@gmail.com',
      url: 'https://www.linkedin.com/in/matheus-abreu-js',
    },
  },
  tags: [
    {
      name: 'Auth',
      description: 'Generete Bearer Token, used in header',
    },
    {
      name: 'clients',
      description: 'Your Clients',
    },
    {
      name: 'products',
      description: 'Your Products',
    },
  ],
  schemes: [
    'https',
    'http',
  ],
  paths: {
    '/generateAuth': {
      post: {
        tags: [
          'Auth',
        ],
        summary: 'Generete bearer token',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Clients',
            },
          },
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/clients': {
      post: {
        tags: [
          'clients',
        ],
        summary: 'Add a new clients',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Clients',
            },
          },
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
      get: {
        tags: [
          'clients',
        ],
        summary: 'Get an existing clients',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/clients/favoriteProduct/add': {
      post: {
        tags: [
          'clients',
        ],
        summary: 'Add favorite product in client',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/AddFavoriteProduct',
            },
          },
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/clients/favoriteProduct/:id': {
      delete: {
        tags: [
          'clients',
        ],
        summary: '/:id',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/clients/favoriteProducts/:id': {
      get: {
        tags: [
          'clients',
        ],
        summary: 'Get an existing client with your favorite products',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/clients/:id': {
      put: {
        tags: [
          'clients',
        ],
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Clients',
            },
          },
        ],
      },
      delete: {
        tags: [
          'clients',
        ],
        summary: '/:id',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            clientsproducts_auth: [
              'write:clientss',
              'read:clientss',
            ],
          },
        ],
      },
    },
    '/products': {
      get: {
        tags: [
          'products',
        ],
        produces: [
          'application/json',
        ],
        parameters: [],
      },
      post: {
        tags: [
          'products',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the clients',
            required: true,
            schema: {
              $ref: '#/definitions/Products',
            },
          },
        ],
      },
    },
    '/products:id': {
      put: {
        tags: [
          'products',
        ],
        description: '/:id',
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Products',
            },
          },
        ],
      },
      delete: {
        tags: [
          'products',
        ],
        description: '/:id',
        produces: [
          'application/xml',
          'application/json',
        ],
      },
    },
  },
  definitions: {
    Products: {
      type: 'object',
      properties: {
        price: {
          type: 'integer',
          example: '500',
        },
        image: {
          type: 'string',
          example: 'www.apple.com',
        },
        brand: {
          type: 'string',
          example: 'Apple',
        },
        title: {
          type: 'string',
          example: 'Iphone 12',
        },
        reviewScore: {
          type: 'integer',
          example: '10',
        },
      },
      xml: {
        name: 'Products',
      },
    },
    Clients: {
      type: 'object',
      required: [
        'name',
        'description',
        'type',
      ],
      properties: {
        name: {
          type: 'string',
          example: 'Matheus',
        },
        email: {
          type: 'string',
          example: 'matheus@gmail.com',
        },
      },
      xml: {
        name: 'Clients',
      },
    },
    AddFavoriteProduct: {
      type: 'object',
      properties: {
        productId: {
          type: 'uuid',
          example: 'uuid Product id',
        },
        clientId: {
          type: 'uuid',
          example: 'uuid Client id',
        },
      },
      xml: {
        name: 'AddFavoriteProduct',
      },
    },
  },
};
