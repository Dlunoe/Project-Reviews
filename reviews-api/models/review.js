const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title:String,
    description: String
})

module.exports = mongoose.model('Review', ReviewSchema);