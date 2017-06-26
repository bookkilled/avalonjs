define(['avalon'],function(avalon){
    // 关闭调试模式
    avalon.config({debug: true, interpolate: ['{$','$}']})
    var header = avalon.define({
        $id: 'header',
        tit: '您好，<i class="user">未登录</i>',
        loginbtn: '立即登录',
        logout: function(e) {
            header.tit = '您好，<i class="user">未登录</i>';
            header.loginbtn = '立即登录';
        },
        login: function (e) {
            header.tit = '您好，<i class="user">svenzhou</i>';
            header.loginbtn = '退出';
        }
    });
});

