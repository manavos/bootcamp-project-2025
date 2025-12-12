import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Using existing MongoDB connection");
      return mongoose.connection;
    }

    const url = process.env.MONGO_URI;
    if (!url) throw new Error("Missing MONGO_URI in environment variables");
    console.log("Connecting to MongoDB...");

    await mongoose.connect(url);
    console.log("MongoDB connected successfully");

    return mongoose.connection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

export default connectDB;
