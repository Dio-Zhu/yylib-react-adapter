module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var rootDataprops = tplTree.dataprops||{};
    var rootSystem=rootDataprops.system;
    var rootEntity=rootDataprops.entity;
    var newFormData = {};//处理公共属性
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            // case "checkable":{
            //     meta.defaultValue=tplNode.checkable!==undefined?tplNode.checkable:meta.defaultValue;
            //     break;
            // }
            // case "bordered":{
            //     meta.defaultValue=tplNode.bordered!==undefined?tplNode.bordered:meta.defaultValue;
            //     break;
            // }
            // case "showRowNum":{
            //     meta.defaultValue=tplNode.showRowNum!==undefined?tplNode.showRowNum:meta.defaultValue;
            //     break;
            // }
            // case "draggable":{
            //     meta.defaultValue=tplNode.draggable!==undefined?tplNode.draggable:meta.defaultValue;
            //     break;
            // }
            // case "visibleRowNum":{
            //     meta.defaultValue=tplNode.visibleRowNum!==undefined?tplNode.visibleRowNum:meta.defaultValue;
            //     break;
            // }
            // case "totalIndex":{
            //     meta.defaultValue=tplNode.totalIndex!==undefined?tplNode.totalIndex:meta.defaultValue;
            //     break;
            // }
            // case "totalText":{
            //     meta.defaultValue=tplNode.totalText!==undefined?tplNode.totalText:meta.defaultValue;
            //     break;
            // }
            case "scrollY":{
                // meta.defaultValue=tplNode.scroll!==undefined&&tplNode.scroll.y!==undefined?tplNode.scroll.y:meta.defaultValue;
                if(tplNode.scroll&&tplNode.scroll.y!==undefined){
                    newFormData[meta.name] = tplNode.scroll.y;
                }
                break;
            }
            case "system":{//关联系统
                // if(tplNode.dataprops&&tplNode.dataprops.system){
                //     meta.defaultValue={};
                //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                //     meta.defaultValue.id=tplNode.dataprops.system.id;
                //     //meta.defaultValue.baseUrl=tplNode.dataprops.system.baseUrl;
                // }else if(rootSystem){//再取页面配置的系统对象
                //     meta.defaultValue = {};
                //     meta.defaultValue.name = rootSystem.systemCnName;
                //     meta.defaultValue.code = rootSystem.systemName;
                //     meta.defaultValue.id = rootSystem.id;
                // }else{
                //     meta.defaultValue=null;
                // }

                if(tplNode.dataprops&&tplNode.dataprops.system) {//先取自身配置的系统对象
                    newFormData[meta.name] = {};
                    newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                    newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                    newFormData[meta.name].id = tplNode.dataprops.system.id;
                }else if(rootSystem){//再取页面配置的系统对象
                    newFormData[meta.name] = {};
                    newFormData[meta.name].name = rootSystem.systemCnName;
                    newFormData[meta.name].code = rootSystem.systemName;
                    newFormData[meta.name].id = rootSystem.id;
                }
                break;
            }
            case "entity":{//关联实体
                // if(tplNode.dataprops&&tplNode.dataprops.entity){
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
                if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身配置的实体对象
                    newFormData[meta.name]={};
                    newFormData[meta.name].name=tplNode.dataprops.entity.entityCnName;
                    newFormData[meta.name].code=tplNode.dataprops.entity.entityFullName;
                    newFormData[meta.name].id=tplNode.dataprops.entity.id;
                }else if(rootEntity){//再取页面配置的实体对象
                    newFormData[meta.name]={};
                    newFormData[meta.name].name=rootEntity.entityCnName;
                    newFormData[meta.name].code=rootEntity.entityFullName;
                    newFormData[meta.name].id=rootEntity.id;
                }
                break;
            }
            case "fields":{
                break;
            }
            // case "rowKey":{
            //     meta.defaultValue=tplNode.rowKey?tplNode.rowKey:meta.defaultValue;
            //     break;
            // }
            // case "enableRowClickEdit":{
            //     meta.defaultValue = tplNode.enableRowClickEdit!==undefined?tplNode.enableRowClickEdit:meta.defaultValue
            //     break;
            // }
            // case "rowBreak":{
            //     meta.defaultValue=tplNode.rowBreak!==undefined?tplNode.rowBreak:meta.defaultValue;
            //     break;
            // }
            // case "autoSelect":{
            //     meta.defaultValue=tplNode.autoSelect!==undefined?tplNode.autoSelect:meta.defaultValue;
            //     break;
            // }
            // case "dataSource":{
            //     meta.defaultValue=tplNode.dataSource!==undefined?tplNode.dataSource:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};
