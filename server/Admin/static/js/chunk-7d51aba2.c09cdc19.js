(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d51aba2"],{"3b8b":function(t,e,n){"use strict";n("84c4")},6498:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n("0c6d"),o=function(t){return Object(r["a"])({url:"admin/rest/adminUsers/postList",method:"post",data:t})},s=function(t){return Object(r["a"])({url:"admin/rest/adminUsers/getList",method:"get",params:t})},i=function(t){return Object(r["a"])({url:"admin/rest/adminUsers/editList",method:"post",data:t})},a=function(t){return Object(r["a"])({url:"admin/rest/adminUsers/deleteList",method:"post",data:t})}},"84c4":function(t,e,n){},b953:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-form"},[n("h3",[t._v("用户注册")]),n("el-form",{ref:"loginForm",attrs:{model:t.loginForm}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.loginForm.userName,callback:function(e){t.$set(t.loginForm,"userName",e)},expression:"loginForm.userName"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.loginForm.passWord,callback:function(e){t.$set(t.loginForm,"passWord",e)},expression:"loginForm.passWord"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即注册")])],1)],1)],1)])},o=[],s=n("6498"),i={name:"login",data:function(){return{loginForm:{userName:"admin",passWord:"123456"}}},created:function(){},mounted:function(){},methods:{onSubmit:function(){var t=this;Object(s["d"])(this.loginForm).then((function(){t.$message({message:"添加成功",type:"success"})}))}}},a=i,u=(n("3b8b"),n("2877")),c=Object(u["a"])(a,r,o,!1,null,"4fd0b3ac",null);e["default"]=c.exports}}]);