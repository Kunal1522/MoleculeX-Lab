import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Missing MONGODB_URL in environment variables");
}

export const connectToDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    const connection = await mongoose.connect(MONGODB_URL, {
      dbName: "proteinBind",
      bufferCommands: false,
    });
    console.log("Database connected successfully");
    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw new Error("Failed to connect to the database");
  }
};
