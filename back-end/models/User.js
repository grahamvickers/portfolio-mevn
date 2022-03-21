const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: { type: String, unique: true },
  password: String,
  token: String
});

module.exports = mongoose.model("User", userSchema);