const mongoose = require("mongoose");
const { BLOCK_TYPE } = require("../helpers");

const blockSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: BLOCK_TYPE.COMMON || BLOCK_TYPE.HINT,
    default: BLOCK_TYPE.COMMON,
  },
  image: {
    type: String,
    required: true,
  },
});

const articleSchema = new mongoose.Schema({
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
