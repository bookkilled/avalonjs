// 关闭调试模式
avalon.config({debug: true, interpolate: ['{$','$}']})
// 定义一个顶层的vmodel，用来放置全局共享数据
var root = avalon.define({
  $id: "leadbank",
  currPath: '',// 当前路径
  currPage: '',// 当前页面
  config: {}
});

// 存储子页面VM、Dom
var states = {};
function addState(path, vm, html) {
    states[path] = {
        vm: vm,
        html: html
    }
}

// 创建组件
avalon.component('ms-view', {
    template: '<div :html="@page" class="ms-view"></div>',
    defaults: {
        page: '&nbsp;',
        path: 'no',
        onReady: function(e) {
            // 取出当前state对象
            var state = states[e.vmodel.path];
            avalon.vmodels[state.vm.$id] = state.vm;
            setTimeout(function() {//必须等它扫描完这个template,才能替换
                e.vmodel.page = state.html;
            },100)
        },
        onDispose: function(e) {
            // 移除组件 清空状态
            var state = states[e.vmodel.path];
            delete avalon.vmodels[state.vm.$id]
        }
    }
});

function getPage(path) {
    path = path.slice(1);
    var html = '<xmp is="ms-view" class="view-container" ms-widget="{path:\'' + path + '\',page: @page}"></xmp>';
    return html
}

// 页面路由列表设置
var pages = ["index", "404", "ucenter/index"];

