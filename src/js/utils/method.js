/**
 * 常用 Base方法
 */
define([
    'jquery',
    'json'
], function($, JSON) {
    'use strict';
    return {
        // URL取参
        getQueryString: function(param) {
            var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r !== null) return unescape(r[2]);
            return null;
        }
        // 
    }
});