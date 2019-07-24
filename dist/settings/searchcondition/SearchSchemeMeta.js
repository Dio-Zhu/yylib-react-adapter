'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
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
    }, {
        name: 'enableUnSelect',
        label: '启用反选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};