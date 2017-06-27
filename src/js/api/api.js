/**
 * 接口请求列表API
 */
define(['jquery', 'json', 'mdata', 'mockjax'], function ($, JSON, Mdata){
    
    var Domain = location.protocol + '//' + location.host;
    var Timeout = 3000;

    // 拼接公共参数
    function encryptData(obj) {
        var parms = {
            tag: 'wap'
        };
        $.extend(true, obj, parms);
        return obj;
    };

    // mock拦截接口定义
    $.mockjax({
        url: 'login.json',
        responseText: Mdata.login
    });
    // 请求定义
    return {
        // 用户登录
        login: function(parms) {
            return $.ajax({
                url: 'login.json',
                type: 'GET',
                data: encryptData(parms || {}),
                cache: false,
                dataType: 'json',
                timeout: Timeout,
                contentType: 'application/json;charset=utf-8'
            });
        }
    }
});
