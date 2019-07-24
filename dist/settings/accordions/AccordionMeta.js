'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'isOpen',
        label: '默认展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};