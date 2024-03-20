const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  home: {
    header: {
      description: {
        type: String,
        required: true,
      },
      first_photo: {
        type: String,
        required: true,
      },
      second_photo: {
        type: String,
        required: true,
      },
    },
    about: {
      photo: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
});

module.exports = mongoose.model("Home", homeSchema);
