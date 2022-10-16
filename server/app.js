var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var cors = require('cors')
var logger = require('morgan')
var compression = require('compression')

var app = express()

// 开启gzip
app.use(compression())

// 创建一个加密钥匙，用来创建token
app.set('secret', 'keen')

app.set('views', path.join(__dirname, 'views'))
// view engine setup
/**
 * 设置 views 文件夹为存放视图文件的目录,
 * 即存放模板文件的地方,__dirname 为全局变量,
 * 存储当前正在执行的脚本所在的目录。
 */
app.set('views', path.join(__dirname, 'views'))

// 设置模板引擎为jade
app.set('view engine', 'jade')

// 加载日志中间件
app.use(logger('dev'))

// 加载解析json的中间件
app.use(express.json())
// 设置跨域
app.use(cors())

// 加载解析urlencoded请求体的中间件,post请求
app.use(express.urlencoded({ extended: false }))

// 加载解析cookie的中间件
app.use(cookieParser());
// 设置public文件夹为放置静态文件的目录
app.use('/public', express.static(path.join(__dirname, 'public')))
// 设置前端静态文件目录以及映射
app.use('/', express.static(path.join(__dirname, '/Admin')))

// 引入子路由文件
require('./routes/index')(app)
require('./routes/upload')(app)
require('./routes/login')(app)

/*
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
app.use('/', require('./routes/index'));
app.use('/users', usersRouter);
*/
// 链接数据库文件
require('./plugins/db')()

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// 报错信息的处理
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// 设置跨域访问
/*
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
*/
// 把app导出，别的地方就可以通过 require("app") 获取到这个对象
module.exports = app;
