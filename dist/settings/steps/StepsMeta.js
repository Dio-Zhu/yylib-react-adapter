'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode;

    var PropMeta = [{
        name: 'current',
        label: '当前步骤',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var items = [];
                (tplNode.children || []).forEach(function (child, index) {
                    items.push({ value: index, text: child.uititle });
                });
                return items;
            }()
        },
        defaultValue: null
    }, {
        name: 'size',
        label: '大小',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '普通',
                value: 'default'
            }, {
                text: '迷你',
                value: 'small'
            }]
        },
        defaultValue: 'default'
    }, {
        name: 'direction',
        label: '步骤条方向',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '水平',
                value: 'default'
            }, {
                text: '垂直',
                value: 'vertical'
            }]
        },
        defaultValue: 'default'
    }];
    return PropMeta;
};