'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

var _Constant = require('../../Constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     tplNode[meta.name]=value;
            //     break;
            // }
            // case "buttonIcon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "system":
                {
                    //关联系统
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "fields":
                {
                    //添加关联字段
                    delete tplNode[meta.name];
                    if (value) {
                        for (var idx = 0; idx < value.length; idx++) {
                            var item = value[idx];
                            //注意attrName属性赋值给uikey
                            var field = _Utils2.default.findByUiKey(tplNode.children, item.attrName);
                            if (!field) {
                                //不存在则添加,防止重复添加
                                var uikey = item.attrName;
                                var uititle = item.attrCnName;
                                //依据JAVA元数据字段类型自动匹配对应的数据类型
                                var fieldtype = (0, _Constant.JavaTypeToFieldType)(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var inputtype = _Constant.FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.searchitem,
                                    uititle: uititle,
                                    title: uititle,
                                    uikey: uikey,
                                    key: uikey,
                                    fieldtype: fieldtype,
                                    inputtype: inputtype,
                                    oper: []
                                };
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
            case "billType":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "enableSenior":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enablePublic":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableItemSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableElasticSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableSort":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
};