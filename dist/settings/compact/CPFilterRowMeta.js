'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'title',
        label: '条件标题',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'rowKey',
        label: '条件行键值',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'multiple',
        label: '多选模式',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'referObj',
        label: '档案编码',
        props: {
            refinfokey: 'bd-009',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        type: _indexDeps.MetaType.Refer,
        defaultValue: ''
    }, {
        name: 'serverUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};