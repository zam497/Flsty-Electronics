import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { products } from "./data/products.js";
import Product from "./models/Product.js";

async function seed() {
  await connectDB();

  await Product.deleteMany({});
  await Product.insertMany(products);

  console.log(`Copied ${products.length} products into the database`);
  await mongoose.disconnect();
}

seed();