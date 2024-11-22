const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema({
  productName: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  category: {
    type: String,
    required: true,
    enum: ["Mobile", "Laptop", "Tablet"],
    default: "Mobile",
  },
  image: {type: String, required: true},
});
module.exports = mongoose.model("Product", productSchema);
