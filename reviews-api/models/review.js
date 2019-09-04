const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title:String,
    description: String,
    review: String,
    rating: Number
})

module.exports = mongoose.model('Review', ReviewSchema);