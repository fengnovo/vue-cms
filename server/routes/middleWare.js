// 引入模型
const AdminUser = require('../models/adminUsers')
// 映入jsonwebtoken方法
const jwt = require('jsonwebtoken')

// 断言的公共方法 res/判断/状态/提示
const httpAssert = (isRes, isValue, isStatus, isMessage) =>{
  if(!isValue) {
    return isRes.status(isStatus).json({
       msg: isMessage
    })
  }
}
// 通用组件索引中间件
const resourceMiddleWare = async (req, res, next) => {
  req.ModelData = await require(`../models/${req.params.resource}`) // 给请求绑定原型的名称并引入数据库原型
  next()
}
// 权限校验中间件
const authMiddleWare = async (req, res, next) => {
  const token = req.headers.authorization
  httpAssert(res, token, 400, 'token不存在，请先登录!')
  const { id } = jwt.verify(token, req.app.get('secret'))
  httpAssert(res, id, 400, '人员不存，请重新登录!')
  req.user = await AdminUser.findById(id)
  httpAssert(res, req.user, 400, '用户不存在!')
  next()
}
// 抛出去函数
module.exports = { httpAssert, resourceMiddleWare, authMiddleWare }