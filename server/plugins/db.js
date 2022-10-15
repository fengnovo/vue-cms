module.exports = () => {
  const mongoose = require("mongoose")
  mongoose
    .connect('mongodb://admin:123456@localhost:27017/node-admin?authSource=admin')
    .then(() => console.log("数据库连接成功"))
    .catch(error => {
      console.log("数据库连接失败")
      console.log(error)
    })
}