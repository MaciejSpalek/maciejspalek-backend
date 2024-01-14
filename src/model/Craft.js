const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
  
});

module.exports = mongoose.model('Craft', craftSchema);