'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {

    var PropMeta = [{
        name: 'billTypeId',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
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
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'formurl',
        label: '链接地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'serUrl',
        label: '审批服务',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'refUrl',
        label: '参照服务',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];

    return PropMeta;
};