const mongoose = require("mongoose");
const { BLOCK_TYPE } = require("../helpers/article");

const blockSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: BLOCK_TYPE.COMMON,
  },
  image: {
    type: String,
  },
});

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String || null,
  },
  blocks: {
    type: [blockSchema],
    required: true,
  },
});

module.exports = mongoose.model("Article", articleSchema);
