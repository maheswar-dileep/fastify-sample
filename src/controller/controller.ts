import { FastifyRequest, FastifyReply } from 'fastify';
import Products from '../model/product.model.js';

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

    const newProducts = new Products({
      name,
      price,
      stock,
      description,
    });

    const product = await newProducts.save();
    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      product,
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
    const products = await Products.find();

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

//*--- Get-Product-by-ID---*//

export const getProductbyId = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id: string = req.params?.id as string;

    const products = await Products.find({ _id: id });

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      products,
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

    const product = await Products.updateOne(
      { _id: id },
      {
        name,
        price,
        stock,
        description,
      }
    );

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

//*--- delete-Products---*//

export const deleteProducts = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id: string = req.params?.id as string;

    const product = await Products.deleteOne({ _id: id });

    reply.code(200).send({
      statusCode: 200,
      msg: 'Get Products',
      product,
    });
  } catch (error) {
    console.log(error);
  }
};
