const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title:String,
    description: String,
    playthrough: String,
    review: String,
    rating: Number,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Review', ReviewSchema);