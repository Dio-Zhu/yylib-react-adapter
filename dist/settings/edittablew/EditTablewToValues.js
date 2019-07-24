'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

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
            // case "checkable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "bordered":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visibleRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "totalIndex":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "totalText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "scrollY":{
            //     // meta.defaultValue = value;
            //     if(value===false){//{x:true|Number}
            //         if(tplNode.scroll)delete tplNode.scroll.y
            //     }else{//true|string
            //         if(!tplNode.scroll){tplNode.scroll = {}}
            //         tplNode.scroll.y = value;
            //     }
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
                                var fieldtype = JavaTypeToFieldType(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var uisubtype = FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.edititemw,
                                    uisubtype: uisubtype,
                                    uititle: uititle,
                                    title: uititle,
                                    uikey: uikey,
                                    key: uikey,
                                    dataIndex: uikey
                                };
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
            // case "rowKey":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableRowClickEdit":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            // }
            // case "rowBreak": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "autoSelect":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "dataSource":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
    if (tplNode.scroll && !Object.keys(tplNode.scroll).length) {
        delete tplNode.scroll;
    }
};