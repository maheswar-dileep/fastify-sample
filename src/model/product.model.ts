import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  description: String,
});

const productsModel = model('Products', productSchema);
export default productsModel;
