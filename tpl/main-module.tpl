/**
 * @file 入口模块
 * @author {{{author}}}({{{authorEmail}}})
 */

define(
    function (require) {
        var config = require('common/config');

        /**
         * 引入各业务模块的Action配置
         * 如果期望添加action时工具自动配置，请保持requireConfigs名称不变
         *
         * @ignore
         */
        function requireConfigs() {
        }

        requireConfigs();

        /**
         * 初始化UI，填写用户信息、初始化导航栏等
         *
         * @ignore
         */
        function init() {

            var user = require('bat-ria/system/user');
            var visitor = user.visitor;

            // 在这里用 visitor 信息初始化用户信息等 UI 元素
            // 以及自定义各种系统配置、导航栏等等

            // // 初始化主导航栏
            // var nav = config.nav;
            // if (nav && nav.navId && nav.tabs) {
            //     require('bat-ria/ui/navigator').init(nav.navId, nav.tabs);
            // }
        }

        /**
         * 启动RIA系统，请求关键数据等
         *
         * @ignore
         */
        function start() {
            require('bat-ria/main')
                .start(config)
                .then(init);
        }

        return {
            start: start
        };
    }
);
