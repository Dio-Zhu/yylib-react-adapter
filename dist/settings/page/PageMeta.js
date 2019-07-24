'use strict';

var _indexDeps = require('../../index-deps');

var _require = require('../../Defines'),
    UiTypeDef = _require.UiTypeDef;

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    if (!process.env.YYLIB_ENV) {
        //开发态
        PropMeta.push({
            name: 'logicFormula',
            label: '逻辑公式',
            type: _indexDeps.MetaType.LogicFormula,
            props: {},
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                //依据系统名称筛选实体
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }]);
    if (tplNode.uitype === UiTypeDef.CPListPage) {
        PropMeta.push({
            name: 'billType',
            label: '单据类型',
            type: _indexDeps.MetaType.Refer,
            props: {

                refinfokey: 'bill_001',
                serverUrl: _indexDeps.SUPPORT_SERVER
            },
            defaultValue: null
        });
    }
    return PropMeta;
};