const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  mobileNumber: {type: String, required: true, unique: true},
  role: {type: String, required: true, default: "user"},
});

module.exports = mongoose.model("User", userSchema);
