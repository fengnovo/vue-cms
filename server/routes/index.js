/**
 * 创建通用的增删改查的接口模型
*/
const lowcodeStr = `
{
    "tableComp": "Table",
    "tableHeaderComp": "TableHeader",
    "tableBodyComp": "RowItem",
    "tableColumns": [
        {
            "field": "id",
            "title": "序号",
            "width": 60,
            "align": "left"
        },
        {
            "field": "name",
            "title": "姓名"
        },
        {
            "field": "sex",
            "title": "性别"
        },
        {
            "field": "age",
            "title": "年龄"
        },
        {
            "field": "address",
            "title": "地址"
        },
        {
            "field": "blank",
            "title": "外链",
            "hasLink": "url"
        },
        {
            "field": "rlink",
            "title": "内链",
            "to": "500",
            "hasAction": "customerAction",
            "query": "xh"
        }
    ],
    "tableData": [
        {
            "id": 1,
            "name": "张三",
            "sex": "男",
            "age": 21,
            "address": "上海",
            "blank": "外链5",
            "rlink": "内链",
            "customerAction": "",
            "url": "http://www.baidu.com"
        },
        {
            "id": 2,
            "name": "李四",
            "sex": "里",
            "age": 22,
            "address": "北京",
            "blank": "外链4",
            "link": "内链",
            "customerAction": "",
            "url": "http://www.baidu.com"
        },
        {
            "id": 3,
            "name": "王五",
            "sex": "里",
            "age": 23,
            "address": "武汉",
            "blank": "外链1",
            "rlink": "内链",
            "customerAction": "(function(){alert(1)})()",
            "url": "http://www.baidu.com"
        },
        {
            "id": 4,
            "name": "陈六",
            "sex": "男",
            "age": 24,
            "address": "长沙",
            "blank": "外链2",
            "link": "内链",
            "customerAction": "",
            "url": "http://www.baidu.com"
        }
    ]
}`;
module.exports = app => {
  // 写了一个断言方法, http-assert 这个断言有问题不能捕获全部异常
  const { resourceMiddleWare, authMiddleWare } = require('./middleWare')
  // 引入 express 并把父子路由合并
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })
  /*======================== 定义接口以及方法 start ========================*/
  let result = {
    code: 200,
    msg: "请求成功"
  }
  // 获取人员或者按照id查询人员
  router.get('/lowcode', async (req, res) => {
    res.send(JSON.parse(lowcodeStr))
  })
  // 添加人员
  router.post('/postList', (req, res) => {
    if (req.body.parentId) req.body.parent = req.body.parentId || null
    req.ModelData.create(req.body)
    res.json({ ...result })
  })
  // 获取人员或者按照id查询人员
  router.get('/getList', async (req, res) => {
    const query = {
      userId: req.query.userId,
      pageNum: Number(req.query.pageNum)
    }
    if (query && query.userId) {
      const model = await req.ModelData.findById(query.userId)
      res.json({ ...result, data: [model] })
    } else {
      const model = await req.ModelData.find().populate('parent').limit(query.pageNum || 10)
      res.json({ ...result, data: model })
    }
  })
  // 修改人员
  router.post('/editList', async (req, res) => {
    const model = await req.ModelData.findByIdAndUpdate(req.body._id, req.body)
    res.json({ ...result, data: model })
  })
  // 删除人员
  router.post('/deleteList', (req, res) => {
    req.ModelData.findByIdAndDelete(req.body._id, req.body)
    res.json({ ...result })
  })
  /*======================== 定义接口以及方法 end ========================*/
  /**
    * 获取数据模型并路由挂载管理
    * 这个写法是一种动态写法，通过前台接口请求传入的参数动态引入模型文件
    * 如果名称需要类型名称转换的化可以用下面的这个方法进行转换。
    * require('inflection').classify(req.params.resource)
  */
  //  封装中间件
  // 封装中间件
  app.use('/admin/rest/:resource', authMiddleWare, resourceMiddleWare, router)
}