const Cart = require("../modals/cartModal");

const addProductToCart = async (req, res) => {
  const {productId, quantity} = req.body;
  try {
    const cart = await Cart.findOne({user: req.user._id});
    if (!cart) {
      const newCart = new Cart({
        user: req.user._id,
        items: [{product: productId, quantity}],
      });
      await newCart.save();
      res.status(201).json({message: "Product added to cart successfully"});
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );
      if (itemIndex > -1) {
        const item = cart.items[itemIndex];
        const newQuantity = item.quantity + quantity;
        cart.items[itemIndex].quantity = newQuantity;
      } else {
        cart.items.push({product: productId, quantity});
      }
      await cart.save();
      res.status(201).json({message: "Product added to cart successfully"});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({user: req.user._id}).populate(
      "items.product"
    );
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = {addProductToCart, getCart};
