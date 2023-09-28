const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  profilePic: String,
  totalLinks: { type: Number, default: 0 },
});

const User = mongoose.model("user", userSchema);

exports.User = User;
