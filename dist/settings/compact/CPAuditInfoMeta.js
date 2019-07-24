'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'primaryKey',
        label: '主键字段',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: 'id'
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'bpm',
        label: '走审批流',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];

    return PropMeta;
};