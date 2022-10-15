/**
 * 创建文件上传的接口
*/
module.exports = app => {
  // 校验token和人员中间件
  const { authMiddleWare } = require('./middleWare')
  // 文件上传
  const multer = require('multer')
  // __dirname 绝对路径 当前执行文件的上一级public/upload 储存
  const upload = multer({ dest: __dirname + '/../public/uploads' })

  app.post('/admin/upload', authMiddleWare, upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3001/public/uploads/${file.filename}`
    res.send(file)
  })
}