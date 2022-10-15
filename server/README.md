# 说明文件

### 初始化
```
npm install
```
### 启动
admin 和 server, admin已经配置了打包，npm run build 直接会打包的到 server里面的Admin文件里面
```
npm run serve
```
### 后台地址

// npm i inflection 添加字符转换
```
npm i inflection
```

// npm i multer 文件上传中间件
``
npm i multer 
``

// npm i bcrypt 散列，密码加密方法
```
npm i bcrypt
```

// web-token 的安装
```
npm i jsonwebtoken
```

// http-assert 安装断言插件
```
npm i http-assert
```
 这个插件有问题 Promise被拒绝，捕获不到全部的异常
***
断言插件有问题 所以自己写了一个断言方法 httpAssert.js

***
```
const httpAssert = (isRes, isValue, isStatus, isMessage) =>{
  if(!isValue) {
    return isRes.status(isStatus).json({
       msg: isMessage
    })
  }
}
// httpAssert(res, token, 400, 'token不存在，请先登录!')
```
express的路由里抛出异常后，全局中间件没办法捕获，需要在所有的路由函数里写try catch，这坑爹的逻辑让人每次都要多写n行代码
官方错误捕获中件间代码如下
https://blog.csdn.net/weixin_30242907/article/details/101785370

```