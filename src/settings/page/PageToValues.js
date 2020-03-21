module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    tplNode.dataprops=tplNode.dataprops||{};
    for(var i=0;i<(formMeta||[]).length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "system":{//关联系统
                delete tplNode[meta.name];
                if(value){
                    // meta.defaultValue={};
                    // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                    // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                    // meta.defaultValue.id=value.id;
                    //先尝试取参照带回的值，带回值不存在则取默认值
                    tplNode.dataprops.system = {
                        id:value.id,
                        systemCnName:value.systemCnName?value.systemCnName:value.name,
                        systemName:value.systemName?value.systemName:value.code
                    };
                }else{
                    // meta.defaultValue=null;
                    delete tplNode.dataprops.system;
                }
                break;
            }
            case "entity":{//关联实体
                delete tplNode[meta.name];
                if(value){
                    // meta.defaultValue={};
                    // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                    // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                    // meta.defaultValue.id=value.id;
                    //先尝试取参照带回的值，带回值不存在则取默认值
                    tplNode.dataprops.entity = {
                        id:value.id,
                        entityCnName:value.entityCnName?value.entityCnName:value.name,
                        entityFullName:value.entityFullName?value.entityFullName:value.code
                    };
                }else{
                    // meta.defaultValue=null;
                    delete tplNode.dataprops.entity;
                }
                break;
            }
            case "billType":{//单据类型
                if(value){
                    // meta.defaultValue={};
                    // meta.defaultValue.id = value.id;
                    // meta.defaultValue.name = value.refName?value.refName:value.name;
                    // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                    tplNode.billName  = value.refName?value.refName:value.name;
                    tplNode.billType  = value.refCode?value.refCode:value.code;
                }else{
                    delete tplNode.billType;
                    delete tplNode.billName;
                }
                break;
            }
            case "logicFormula":{
                if(value){
                    // meta.defaultValue={};
                    // meta.defaultValue.logicFormula = value.code;
                    // meta.defaultValue.logicFormulaXml = value.xml;
                    tplNode.logicFormula = value.code;
                    tplNode.logicFormulaXml = value.xml;
                } else {
                    // meta.defaultValue=null;
                    delete tplNode.logicFormula;
                    delete tplNode.logicFormulaXml;
                }
                break;
            }
        }
    }
    //清理空对象dataprops
    if(!Object.keys(tplNode.dataprops).length){
        delete tplNode.dataprops;
    }
};
