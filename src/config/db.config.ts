import mongoose from 'mongoose';

const connection = async () => {
  try {
    mongoose.connection.once('connected', () => {
      console.log('db connected successfully');
    });

    await mongoose.connect('mongodb://127.0.0.1:27017/fastify-test');
  } catch (error) {
    console.log(error);
  }
};

export default connection;
