const express = require("express");
const router = express.Router();
const {addProductToCart, getCart} = require("../controllers/cartController");

router.post("/", addProductToCart);
router.get("/", getCart);
module.exports = router;