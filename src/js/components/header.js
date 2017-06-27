define(['avalon', 'api', 'json'],function(avalon, api, JSON){
    // 关闭调试模式
    avalon.config({debug: true, interpolate: ['{$','$}']})
    var header = avalon.define({
        $id: 'header',
        tit: '您好，<i class="user">未登录</i>',
        loginbtn: '立即登录',
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

