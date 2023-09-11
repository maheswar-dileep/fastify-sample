import { FastifyRequest, FastifyReply } from 'fastify';
import Products from '../model/product.model.js';
import * as services from '../services/services.js';

interface IProducts {
  name: string;
  price: number;
  stock: number;
  description: string;
}

//*--- add-products---*//
export const addProducts = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { name, price, stock, description }: IProducts = req.body as IProducts;

    const data = await services.addProducts({ name, price, stock, description });

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      data,
    });
  } catch (error) {
    console.error(error);
    reply.code(500).send({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An error occurred while processing your request',
    });
  }
};

//*--- Get-Products---*//

export const getProducts = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = await services.findAllProducts();

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

//*--- Get-Product-by-ID---*//

export const getProductbyId = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id: string = req.params?.id as any ;

    const data = await services.findProductById(id);

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

//*--- edit-Products---*//

export const editProducts = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id: string = req.params?.id as string;
    const { name, price, stock, description }: IProducts = req.body as IProducts;

    const data = await services.editProducts(id, { name, price, stock, description });

    reply.code(200).send({
      statusCode: 200,
      msg: 'Product edited',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

//*--- delete-Products---*//

export const deleteProducts = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id: string = req.params?.id as string;

    const data = services.deleteProduct(id);
    reply.code(200).send({
      statusCode: 200,
      msg: 'Product deleted',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
