// 主入口文件
console.log('进入main.js');
require.config({
    paths: {
        'jquery': 'lib/jquery', // v1.12.3
        'avalon': 'lib/avalon', // v2.2.8
        'leadbase': 'utils/leadbase-encrypts', // 接口入参加密
        'reqwest': 'lib/reqwest.min', // 接口依赖插件
        'json': 'lib/json3.min', // support for IE6/7
        'api': 'api/api' // 接口请求list
    },
    shim: {
        'api': {
            deps: ['jquery', 'reqwest'],
            exports: 'api'
        }
    }
});
