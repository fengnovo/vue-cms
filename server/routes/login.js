/**
 * 创建用户登录接口
*/
module.exports = app => {
  // 写了一个断言方法, http-assert 这个断言有问题不能捕获全部异常
  const { httpAssert } = require('./middleWare')
  // 用户登录
  app.post('/admin/login', async (req, res) => {
    const { userName, passWord } = req.body
    const AdminUser = require('../models/adminUsers')
    // 校验用户名，注意数据接口里面select设置了false 这里要用select('+')
    const user = await AdminUser.findOne({ userName }).select('+passWord')
    httpAssert(res, user, 400, "用户不存在")
    // 校验密码
    const isValid = require('bcrypt').compareSync(passWord, user.passWord)
    httpAssert(res, isValid, 400, '密码错误')
    // 返回token
    const jwt = require('jsonwebtoken')
    // jwt.sign({ id: user._id, 可以加任何数据 }, 'kjhkj533asdasdad设置一个密钥，固定的随机数据防止破解')
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.json({ code: 200, msg: '请求成功', data: { userId: user._id, userName: user.userName, token } })
  })
}