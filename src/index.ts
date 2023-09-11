import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

import productRoutes from './routes/routes.js';


fastify.register(productRoutes, { prefix: '/api/v1/products' });


const start = async () => {
  try {
    fastify.listen({ port: 8801 }, () => {
      console.log(`Server Started on http://localhost:${8801}`);
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
