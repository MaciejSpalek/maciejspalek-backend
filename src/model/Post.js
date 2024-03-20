const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
