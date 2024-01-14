const mongoose = require('mongoose');

const aboutSectionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
  
});

module.exports = mongoose.model('AboutSection', aboutSectionSchema);