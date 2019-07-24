"use strict";

module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    //获取页面配置的系统、实体信息
    var rootDataprops = tplTree.dataprops || {};
    var rootSystem = rootDataprops.system;
    var rootEntity = rootDataprops.entity;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "colnumber":{
            //     meta.defaultValue=tplNode.colnumber?tplNode.colnumber:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue = tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "labelCol":
            case "wrapperCol":
                if (tplNode[meta.name] && tplNode[meta.name].span) {
                    newFormData[meta.name] = tplNode[meta.name].span;
                }
                break;
            case "system":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.system){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id=tplNode.dataprops.system.id;
                    // }else if(rootSystem){//再取页面配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = rootSystem.systemCnName;
                    //     meta.defaultValue.code = rootSystem.systemName;
                    //     meta.defaultValue.id = rootSystem.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops.system) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                        newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                        newFormData[meta.name].id = tplNode.dataprops.system.id;
                    } else if (rootSystem) {
                        //再取页面配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootSystem.systemCnName;
                        newFormData[meta.name].code = rootSystem.systemName;
                        newFormData[meta.name].id = rootSystem.id;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else if(rootEntity){//再取页面配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=rootEntity.entityCnName;
                    //     meta.defaultValue.code=rootEntity.entityFullName;
                    //     meta.defaultValue.id=rootEntity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops.entity) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.entity.entityCnName;
                        newFormData[meta.name].code = tplNode.dataprops.entity.entityFullName;
                        newFormData[meta.name].id = tplNode.dataprops.entity.id;
                    } else if (rootEntity) {
                        //再取页面配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootEntity.entityCnName;
                        newFormData[meta.name].code = rootEntity.entityFullName;
                        newFormData[meta.name].id = rootEntity.id;
                    }
                    break;
                }
            case "fields":
                {
                    break;
                }
        }
    }
    return newFormData;
};