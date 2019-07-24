'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }, {
        name: 'linkTarget',
        label: '跳转目标',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'description',
        label: '描述',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];

    return PropMeta;
};