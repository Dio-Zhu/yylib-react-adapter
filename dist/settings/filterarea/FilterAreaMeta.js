'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'filterItems',
        label: '筛选条件',
        type: _indexDeps.MetaType.FilterAreaConfig,
        props: {},
        defaultValue: []
    }, {
        name: 'trigger',
        label: '触发方式',
        type: _indexDeps.MetaType.Select,
        help: '条件内容区域展开/折叠的触发方式',
        props: {

            options: [{ text: '点击(Click)', value: 'click' }, { text: '悬浮(Hover)', value: 'hover' }]
        },
        defaultValue: 'click'
    }, {
        name: 'rowHidden',
        label: '自动隐藏',
        help: '当某行的条件已被选时，将自动隐藏本行筛选条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};