// 主入口文件
console.log('进入main.js');
require.config({
    baseUrl: './js/',
    paths: {
        'jquery': 'lib/jquery', // v1.12.3
        'avalon': 'lib/avalon', // v2.2.8
        'leadbase': 'utils/leadbase-encrypts', // 接口入参加密
        'mock': 'lib/mock', // mock
        'mdata': 'mock/mdata', // mock 数据
        'json': 'lib/json3.min', // support for IE6/7
        'domReady': 'lib/domReady', // require插件 
        'text': 'lib/text', // require插件文本格式转换
        'api': 'api/api', // 接口请求list
        'header': 'components/header',
        'footer': 'components/footer'
    },
    shim: {
        'api': {
            deps: ['jquery', 'json'],
            exports: 'api'
        }
    }
});
