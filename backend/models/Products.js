import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  vatRate: Number
});

export default mongoose.model("Product", productSchema);
