'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'status',
        label: '当前状态',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '待运行',
                value: 'wait'
            }, {
                text: '进行中',
                value: 'process'
            }, {
                text: '已完成',
                value: 'finish'
            }, {
                text: '失败',
                value: 'error'
            }]
        },
        defaultValue: undefined
    }, {
        name: 'description',
        label: '描述',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }];
    return PropMeta;
};