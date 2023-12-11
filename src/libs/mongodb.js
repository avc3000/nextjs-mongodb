import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect("mongodb://0.0.0.0:27017/nextjs_mongodb");
}
