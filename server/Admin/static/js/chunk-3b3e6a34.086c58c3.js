(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b3e6a34"],{"02d5":function(t,n,e){"use strict";e("cdb7")},"3c36":function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return u}));var a=e("0c6d"),i=function(t){return Object(a["a"])({url:"admin/rest/listData/postList",method:"post",data:t})},r=function(t){return Object(a["a"])({url:"admin/rest/listData/getList",method:"get",params:t})},c=function(t){return Object(a["a"])({url:"admin/rest/listData/editList",method:"post",data:t})},o=function(t){return Object(a["a"])({url:"admin/rest/listData/deleteList",method:"post",data:t})},u=function(){return Object(a["a"])({url:"admin/rest/listData/lowcode",method:"get"})}},8987:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e(t.table.tableComp,{tag:"component",attrs:{table:t.table}})],1)},i=[],r=e("3c36"),c={name:"App",data:function(){return{table:{tableComp:"Table"}}},created:function(){this.init()},methods:{init:function(){var t=this;Object(r["d"])().then((function(n){t.table=n.data,console.log(t.table)}))}}},o=c,u=(e("02d5"),e("2877")),s=Object(u["a"])(o,a,i,!1,null,"f3af7544",null);n["default"]=s.exports},cdb7:function(t,n,e){}}]);