
module.exports = app => {
  // 获取数据模型
  const usersData = require('../models/usersData')
  // 合并url参数
  let result = {
    code: 200,
    msg: "请求成功"
  }
  // 添加人员
  app.post('/', function (req, res) {
      usersData.create(req.body)
      res.json({code: result.code, msg: result.msg})
  })
  // 获取人员
  app.get('/', async function (req, res) {
    if (req.query && req.query.userId) {
      const model = await usersData.findById(req.query.userId)
      res.json({code: result.code, msg: result.msg, data: [model]})
    } else {
      const model = await usersData.find().limit(10)
      res.json({code: result.code, msg: result.msg, data: model})
      // .populate('parent')
    }
  })
  // 修改人员
  app.post('/', async function (req, res) {
    const model = await usersData.findByIdAndUpdate(req.body._id, req.body)
    res.json({code: result.code, msg: result.msg, data: model})
  })
  // 删除人员
  app.post('/', async function (req, res) {
    const model = await usersData.findByIdAndDelete(req.body._id, req.body)
    res.json({code: result.code, msg: result.msg})
  })
}