import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  feature: { type: String, default: "" },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, min: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: { type: Number, default: 0, min: 0 },
  badge: { type: String, default: "" },
  category: { type: String, required: true },
  flash: { type: Boolean, default: false },
});

export default mongoose.model("Product", productSchema);