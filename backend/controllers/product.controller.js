import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

export const getProducts = async (req, res) => {
  res.json(await Product.find());
};
