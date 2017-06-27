# avalonjs
搭建avalonPC版脚手架（requirejs +avalon）  

主要插件列表：
requirejs: RequireJS works in IE 6+, Firefox 2+, Safari 3.2+, Chrome 3+, and Opera 10+.

接口请求reqwest:  [Doc](http://www.bootcdn.cn/reqwest/readme/)

## 备注： 
1、r.js打包压缩代码配合配置项 build.js，打包代码 ` node r.js -o build.js `  
2、text.js 的引用 不能本地目录协议调试，IE汇报拒绝访问，因为text.js也是异步请求。  
3、IE678 发送Ajax请求直接进error方法：1、检查语法是否规范；2、请求类型（GET/POST）和请求地址（是否跨域）是否匹配；3、jquery版本是否支持（兼容IE一般1.x.x版本）  




## 包含内容：
1、ajax接口请求（接口定义都在api/api.js内）兼容 IE7+
```javascript
// 举例
// mock拦截替换返回数据对象 Mdata.login
Mock.mock(/login\.json/, 'get', Mdata.login)
var login = function () {
    var parms = {
        productId: '10034600'
    };
    return $.ajax({
        url: 'login.json',
        type: 'GET',
        data: encryptData(parms),
        cache: false,
        dataType: 'json',
        timeout: Timeout,
        contentType: 'application/json;charset=utf-8'
    });
};
return {
    login: login
}
// 调用
api.login().then(function(res){
    console.log('success');
},function(err){
    console.log('error');
});
```
2、Mock数据模拟拦截替换，文档[传送门]（http://mockjs.com/）
3、r.js打包发布



## 问题待解决：
1、登录态多页面切换 如何解决？
2、组件化多页面情况是否需要？

