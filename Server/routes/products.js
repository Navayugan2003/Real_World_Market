const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/productsController");

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/", updateProduct);
router.delete("/", deleteProduct);
router.get("/:category", getProductsByCategory);

module.exports = router;
