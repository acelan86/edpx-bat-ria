/**
 * 创建内容
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令名称
 *
 * @type {string}
 */
cli.command = 'create';

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '添加新内容';

/**
 * 命令选项信息
 *
 * @type {Array}
 */
cli.options = [];

var creators = {
    action: require( '../../lib/util/create-action' ),
    api: require( '../../lib/util/create-api' )
};
var typeCreator = {
    action: 'action',
    base: 'action',
    list: 'action',
    form: 'action',
    api: 'api'
};

var logger = require( '../../tools/logger' );

/**
 * 模块命令行运行入口
 * 
 * @param {Array} args 命令运行参数
 */
cli.main = function ( args ) {
    var dir = process.cwd();
    var edpProject = require( 'edp-project' );
    var projectInfo = edpProject.getInfo( dir );

    if ( !projectInfo ) {
        return;
    }
    if ( !args[ 0 ] ) {
        logger.error( 'CREATE', 'ERROR', '<type> is required for `bat-ria create`.' );
        return;
    }

    var type = args[ 0 ] = args[ 0 ].toLowerCase();

    if ( !typeCreator[ type ] ) {
        logger.error( 'CREATE', 'ERROR', '"' + type + '" is not a valid type for `bat-ria create`.' );
        return;
    }
    else {
        creators[ typeCreator[ type ] ]( projectInfo, args );
    }
};

/**
 * 命令行配置项
 *
 * @type {Object}
 */
exports.cli = cli;