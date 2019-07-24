'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'backSelect',
        label: '返回方式',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{
                text: '返回列表',
                value: 'list'
            }, {
                text: '上一次页面',
                value: 'prev'
            }]
        },
        defaultValue: 'list'
    }];
    return PropMeta;
};