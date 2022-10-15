const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  age: { type: String },
})

module.exports = mongoose.model('categoriesData', schema)
