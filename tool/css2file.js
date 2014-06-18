/**
 * @file 处理edp-webserver的输出本地CSS相关功能
 * @author Justineo(justice360@gmail.com)
 */
var css2file = {};

var fs = require('fs');

function handler(context) {
    console.log('css2file');
    var conf = context.conf;
    var docRoot  = conf.documentRoot;
    var pathname = context.request.pathname;
    var filePath = (docRoot + pathname).replace(/\.(?:less|styl)$/g, '.css');

    var css = context.content;

    fs.writeFileSync(filePath, css);
}

css2file.getHandler = function() {
    return handler;
};


css2file.getHandlers = function() {
    return [handler];
};

module.exports = exports = css2file;