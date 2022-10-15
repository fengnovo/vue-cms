# vue-cms
前端vue2，后台node.js
  
## monogo DB 说明文件
```
// 将 mongo shell 连接到 mongodb，也就是先连接，后验证用户身份
mongo

use admin
db.auth("admin", "123456" )
```

测试连接代码： ./vue-cms/server/x.js   
连接地址： ./vue-cms/server/plugins/db.js   