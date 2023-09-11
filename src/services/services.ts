import Products from '../model/product.model.js';

interface IProducts {
  name: string;
  price: number;
  stock: number;
  description: string;
}

export const addProducts = async (products: IProducts) => {
  const newProducts = new Products(products);
  return await newProducts.save();
};

export const findAllProducts = async () => {
  return await Products.find();
};

export const findProductById = async (id: string) => {
  const product = await Products.find({ _id: id });
  return product;
};

export const editProducts = async (id: string, product: IProducts) => {
  return await Products.updateOne(
    { _id: id },
    {
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
    }
  );
};

export const deleteProduct = async (id: string) => {
  return await Products.deleteOne({ _id: id });
};
