/**
 * 常用 Base方法
 */
define([
    'jquery',
    'json'
], function($, JSON) {
    'use strict';
    // 渲染弹窗
    function renderStyle() {
        $(".mes-box").css({
            top: "50%",
            left: "50%",
            position: "fixed",
            margin: "auto",
            marginLeft: "-200px",
            marginTop: "-110px",
            width: "400px",
            height: "220px",
            zIndex: "1000",
            backgroundColor: "#fff",
            borderRadius: "6px",
            textAlign: "center",
            color: "#171717",
            fontSize: "14px"
        }),
        $(".mes-title").css({
            fontSize: "20px",
            marginTop: "30px"
        }),
        $(".mes-text").css({
            lineHeight: "26px",
            margin: "0 auto",
            width: "80%",
            marginTop: "20px"
        }),
        $(".mes-btn").css({
            marginTop: "30px",
            cursor: "pointer"
        }),
        $(".mes-confirm").css({
            color: "#fff",
            padding: "6px 22px",
            backgroundColor: "#fc6621",
            borderRadius: "2px",
            height: "22px",
            display: "inline-block"
        }),
        $(".mes-cancel").css({
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
            height: "30px",
            background: "url(../../assets/img/x24.png) no-repeat center center"
        }),
        $(".mes-mask").css({
            position: "fixed",
            background: "#000",
            opacity: "0.5",
            zIndex: "999",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            filter: "alpha(opacity=50)"
        })
    }

    return {
        // URL取参
        getQueryString: function(param) {
            var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r !== null) return unescape(r[2]);
            return null;
        },
        // 弹窗定义
        messageBox: function(e) {
            var s = e.title || "提示"
            , i = e.text
            , t = e.confirmText
            , n = e.cancelText
            , o = e.confirmCallback
            , a = e.cancelCallback
            , c = '<div class="mes-box"><div class="mes-title">' + s + '</div><div class="mes-text">' + i + '</div><div class="mes-btn"><a type="button" class="mes-confirm">' + t + '</a><a type="button" class="mes-cancel">' + n + '</a></div></div><div class="mes-mask"></div>';
            $("body").append(c),
            $(".mes-confirm").click(function() {
                $(".mes-box, .mes-mask").css({
                    display: "none"
                }),
                o()
            }),
            $(".mes-cancel").click(function() {
                $(".mes-box, .mes-mask").css({
                    display: "none"
                }),
                a()
            }),
            renderStyle()
        }
    }
});