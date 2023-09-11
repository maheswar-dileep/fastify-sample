export const productsValidation = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    price: { type: 'number' },
    stock: { type: 'number' },
    description: { type: 'string' },
  },
  required: ['name', 'price', 'stock', 'description'],
};
