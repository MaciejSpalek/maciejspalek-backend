const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
});

module.exports = mongoose.model("User", userSchema);
