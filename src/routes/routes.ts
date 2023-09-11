import { FastifyPluginCallback } from 'fastify';
import * as controller from '../controller/controller.js';

const productRoutes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/', controller.getProducts);

  done();
};

export default productRoutes;
