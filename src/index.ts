import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import productRoutes from './routes/routes.js';
import connection from './config/db.config.js';
import * as swagger from './config/swagger.js';

//*--- swagger-documentation ---*/

fastify.register(fastifySwagger, swagger.swaggerOptions);
fastify.register(fastifySwaggerUi, swagger.swaggerUiOptions);
//*--- Routes ---*/

fastify.register(productRoutes, { prefix: '/api/v1/products' });

//*--- DB Conneciton ---*/

connection();

//*--- Server Conneciton ---*/

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
