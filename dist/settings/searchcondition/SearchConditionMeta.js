'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '查询方案'
    }, {
        name: 'buttonIcon',
        label: '按钮图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: null
    }, {
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
                var rootSystem = (tplTree.dataprops || {}).system;
                //依据系统名称筛选实体
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                } else if (rootSystem) {
                    //再取页面级
                    return { "system.systemName": rootSystem.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: _indexDeps.MetaType.Refer,
        help: "先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" + "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" + "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" + "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" + "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n" + "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。",
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            multiselect: true,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                var rootEntity = (tplTree.dataprops || {}).entity;
                //将实体名作为参照过滤条件
                var cond = {};
                if (tplNode.dataprops && tplNode.dataprops.entity) {
                    //先取自身级
                    cond["entity.entityFullName"] = tplNode.dataprops.entity.entityFullName;
                } else if (rootEntity) {
                    //再取页面级
                    cond["entity.entityFullName"] = rootEntity.entityFullName;
                }
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    cond["projectName"] = tplNode.dataprops.system.systemName;
                } else if (rootSystem) {
                    //再取页面级
                    cond["projectName"] = rootSystem.systemName;
                }
                return cond;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: "XG01"
    }, {
        name: 'enableSenior',
        label: '高级搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enablePublic',
        label: '公共方案',
        help: '是否允许用户收藏方案为公共方案',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableItemSearch',
        label: '单项搜索',
        help: '是否启用在输入框输入关键词弹出下拉选择字段，进行单项字段搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableElasticSearch',
        label: '全文搜索',
        help: '是否启用在输入框输入关键词直接回车进行全文搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableSort',
        label: '支持排序',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
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