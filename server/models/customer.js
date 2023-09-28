const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  email: String,
  name: String,
  profilePic: String,
  totalLinks: {type : Number , default : 0},
});

const Customer = mongoose.model("customer", customerSchema);

exports.Customer = Customer;
