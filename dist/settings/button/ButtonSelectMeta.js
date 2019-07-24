'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'type',
        label: '颜色',
        help: '按钮的填充颜色',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};