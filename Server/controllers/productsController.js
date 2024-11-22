const Product = require("../modals/Products");
const createProduct = async (req, res) => {
  const {productName, description, price, quantity, category, image} = req.body;
  const product = new Product({
    productName,
    description,
    price,
    quantity,
    category,
    image,
  });
  try {
    await product.save();
    res.status(201).json({
      message: "Product created successfully",
    });
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const updateProduct = async (req, res) => {
  const {productName, description, price, quantity, category, image} = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    product.productName = productName;
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    product.category = category;
    product.image = image;
    await product.save();
    res.status(200).json({message: "Product updated successfully"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    await product.remove();
    res.status(200).json({message: "Product deleted successfully"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({category: req.params.category});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
