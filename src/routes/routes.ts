import { FastifyPluginCallback } from 'fastify';
import * as bodySchema from '../helpers/addProducts.js';
import * as controller from '../controller/controller.js';

const productRoutes: FastifyPluginCallback = (fastify, options, done) => {
  //*--- product-Routes ---*//;

  fastify.get('/', controller.getProducts);
  fastify.get('/:id', controller.getProductbyId);
  fastify.delete('/:id', controller.editProducts);
  fastify.post(
    '/',
    {
      schema: {
        body: bodySchema.productsValidation,
      },
    },
    controller.addProducts
  );
  fastify.put(
    '/:id',
    {
      schema: {
        body: bodySchema.productsValidation,
      },
    },
    controller.editProducts
  );

  done();
};

export default productRoutes;
