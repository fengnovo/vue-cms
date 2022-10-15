const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  userName: { type: String },
  passWord: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 8)
    }
  },
  icon: { type: String }
}, { versionKey: false })
// versionKey 不显示版本字段
// bcrypt 加密方法，散列成加密数据
// select:false 是为了不被查询，屏蔽查询

module.exports = mongoose.model('adminUsers', schema)
