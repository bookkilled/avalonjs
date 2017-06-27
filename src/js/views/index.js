/**
 * 首页
 */
require(['../config'], function (config) {
var mapList = [
    'api', 
    'avalon', 
    'text!../views/components/header.html', 
    'text!../views/components/footer.html', 
    'header', 
    'footer'
];
require(mapList, function(api, avalon, headerHtml, footerHtml, header, footer){
    var leadbank = avalon.define({
        $id: 'leadbank',
        tit: '当前首页',
        list: {},
        header: headerHtml,
        footer: footerHtml
    });
    // 赛选条件
    var filterDom = $('#filter');
    var parms = {
        'class': '',
        'pingji': '',
        'guimo': '',
        'jizhun': '',
        'qixian': ''
    };
    // 绑定筛选事件
    filterDom.on('click', function(ev){
        var target = ev.target;
        // console.log(ev);
        if (target.nodeName.toLowerCase() == 'a') {
            var fkey = $(target).parent().attr('data-key');
            var fvalue = $(target).attr('data-value');
            console.log($(target).parent().attr('data-key') + ': ' + $(target).attr('data-value'));
            $(target).siblings().removeClass('active');
            $(target).addClass('active');
            parms[fkey] = fvalue;
        }
        if ($(target).attr('class') == 'filter-class-rule' ) {
            var fkey = $(target).parent().attr('data-key');
            var fvalue = $(target).attr('data-value');
            console.log($(target).parent().attr('data-key') + ': ' + $(target).attr('data-value'));
            $(target).siblings().removeClass('active');
            $(target).addClass('active');
            parms[fkey] = fvalue;
        }
        console.log(parms);
    });


    // api.getProductDetail().then(function(res){
    //     console.log(res);
    //     // avalon.vmodels.header.tit = 'svenzhou';
    // }, function(err){
    //     console.log(err);
    // });




    avalon.scan(document.body);
});

});