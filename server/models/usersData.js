const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  age: { type: String },
  sex: { type: String },
  parentId: { type: mongoose.SchemaTypes.ObjectId },
  parent:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'usersData'
  }
},{ versionKey: false })
// versionKey 不显示版本字段

module.exports = mongoose.model('usersData', schema)
