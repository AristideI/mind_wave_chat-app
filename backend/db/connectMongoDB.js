import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {  
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default connectMongoDB;
