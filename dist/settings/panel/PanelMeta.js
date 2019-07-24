'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'expand',
        label: '展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'expandText',
        label: '展开文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '收起'

    }, {
        name: 'collapseText',
        label: '折叠文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '展开'
    }, {
        name: 'enableHeader',
        label: '显示头部',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    if (tplNode.enableHeader !== false) {
        PropMeta.push({
            name: 'enableCollapse',
            label: '支持折叠',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    return PropMeta;
};