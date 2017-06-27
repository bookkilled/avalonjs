define(['jquery', 'avalon', 'api', 'json', 'method'],function($, avalon, api, JSON, method){
    // 判断浏览器版本
    $.browser.msie && ($.browser.version < 8) && method.messageBox({
        title: "温馨提示",
        text: "当前浏览器版本过低，为了更好的浏览体验，建议升级到IE8或以上版本。谢谢！",
        confirmText: "我知道了",
        cancelText: "",
        confirmCallback: function() {},
        cancelCallback: function() {}
    });
    /Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && (window.location.href = "//m.leadfund.com.cn/html/pubFund/index.html");

    // 关闭调试模式
    avalon.config({debug: true, interpolate: ['{$','$}']})
    var header = avalon.define({
        $id: 'header',
        tit: '您好，<i class="user">未登录</i>',
        loginbtn: '立即登录',
        searchtxt: '',
        // logout: function(e) {
        //     console.log('--退出--');
        //     header.tit = '您好，<i class="user">未登录</i>';
        //     header.loginbtn = '立即登录';
        // },
        login: function (e) {
            console.log('--登陆--');
            api.login().then(function(res){
                console.log('success');
                if (res.responseCode == '000000') {
                    header.tit = '您好，<i class="user">svenzhou</i>';
                    header.loginbtn = '退出';
                }
            }, function(err){
                console.log('err');
            });
        }
    });
});

