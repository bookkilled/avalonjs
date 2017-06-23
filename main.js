// 主入口文件
console.log('进入main.js');
require.config({
    paths: {
        'jquery': 'js/lib/jquery', // v1.12.3
        'avalon': 'js/lib/avalon', // v2.2.8
        'leadbase': 'js/utils/leadbase-encrypts', // 接口入参加密
        'reqwest': 'js/lib/reqwest.min', // 接口依赖插件
        'json': 'js/lib/json3.min', // support for IE6/7
        'api': 'js/api/index' // 接口请求list
    },
    shim: {
        'api': {
            deps: ['jquery', 'reqwest'],
            exports: 'api'
        }
    }
});
require(['api'], function(api){
    api.getProductDetail();
});