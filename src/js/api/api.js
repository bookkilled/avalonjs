/**
 * 接口请求列表API
 */
define(['jquery', 'reqwest', 'mock'], function ($, request, Mock){
    // 拼接公共参数
    function encryptData(obj) {
        var parms = {
            tag: 'wap'
        };
        $.extend(true, obj, parms);
        return obj;
    };

    var Timeout = 3000;
    Mock.mock(/login\.json/, 'get', {
        "stateCode": "000000",
        "stateMsg": "登录成功"
    })
    var getDate = function () {
        console.log(new Date());
        return 1;
    }

    var getWeather = function () {
        var parms = {
            city: '%B1%B1%BE%A9',
            password: 'DJOYnieT8234jlsK',
            day: 0
        };
        $.ajax({
            url: 'http://php.weather.sina.com.cn/xml.php',
            type: 'GET',
            data: encryptData(parms),
            cache: false,
            dataType: 'jsonp',
            timeout: Timeout,
            success: function(req) {
                console.log(req);
            },
            error: function(err) {
                console.log(err);
            },
        });
    }

    var getProductDetail = function () {
        var parms = {
            productId: '10034600'
        };
        // $.ajax({
        //     url: 'https://pa18-wapmall-dmzstg1.pingan.com.cn:53443/chaoshi/finance/open/product/productInfo.do',
        //     type: 'GET',
        //     data: encryptData(parms),
        //     cache: false,
        //     dataType: 'jsonp',
        //     timeout: Timeout,
        //     success: function(req) {
        //         console.log(req);
        //     },
        //     error: function(err) {
        //         console.log(err);
        //     },
        // });
        return request({
            url: 'https://pa18-wapmall-dmzstg1.pingan.com.cn:53443/chaoshi/finance/open/product/productInfo.do',
            method: 'GET',
            cache: false,
            type: 'jsonp',
            timeout: Timeout,
            contentType: 'application/json;charset=utf-8',
            data: encryptData(parms)
        })
    }

    var login = function () {
        var parms = {
            productId: '10034600'
        };
        return request({
            url: '../js/mock/login.json',
            method: 'GET',
            cache: false,
            type: 'json',
            timeout: Timeout,
            contentType: 'application/json;charset=utf-8',
            data: encryptData(parms)
        })
    }
    var logout = function () {
        return {
            stateCode: '999999',
            stateMsg: '退出成功'
        }
    }

    return {
        encryptData: encryptData,
        getDate: getDate,
        getWeather: getWeather,
        getProductDetail: getProductDetail,
        login: login,
        logout: logout
    };
});
