const mongoose = require('mongoose');

const Banner = new mongoose.Schema({
    id: Number,
    title: String,
    url: String,
    to: String
})

module.exports = mongoose.model('Banner', Banner);