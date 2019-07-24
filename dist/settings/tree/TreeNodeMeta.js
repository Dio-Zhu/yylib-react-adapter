'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'disabled',
        label: '禁用响应',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'disableCheckbox',
        label: '禁用勾选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'expanded',
        label: '是否展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'selectable',
        label: '允许选中',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'draggable',
        label: '允许拖拽',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];

    return PropMeta;
};