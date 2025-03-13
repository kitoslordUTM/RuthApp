import mongoose from 'mongoose';
import { mongodb_Uri } from './config/config';

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_Uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Si no se puede conectar, terminamos la aplicación
  }
};

export default connectDB;
