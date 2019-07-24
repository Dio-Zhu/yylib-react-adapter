
module.exports = function(options){
    var newFormData = {};//处理公共属性
    var {formMeta,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            case "system":{//关联系统
                // if(tplNode.dataprops&&tplNode.dataprops.system){
                //     meta.defaultValue={};
                //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                //     meta.defaultValue.id=tplNode.dataprops.system.id;
                // }else{
                //     meta.defaultValue=null;
                // }

                if(tplNode.dataprops&&tplNode.dataprops[meta.name]!==undefined) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode.dataprops[meta.name].id;
                    newFormData[meta.name].code = tplNode.dataprops[meta.name].systemName;
                    newFormData[meta.name].name = tplNode.dataprops[meta.name].systemCnName;
                }
                break;
            }
            case "entity":{//关联实体
                // if(tplNode.dataprops&&tplNode.dataprops.entity){
                //     meta.defaultValue={};
                //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                // }else{
                //     meta.defaultValue=null;
                // }
                if(tplNode.dataprops&&tplNode.dataprops[meta.name]!==undefined) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode.dataprops[meta.name].id;
                    newFormData[meta.name].code = tplNode.dataprops[meta.name].entityFullName;
                    newFormData[meta.name].name = tplNode.dataprops[meta.name].entityCnName;
                }
                break;
            }
            case "billType":{
                // if(tplNode.billName&&tplNode.billType){
                //     meta.defaultValue={};
                //     meta.defaultValue.code = tplNode.billType;
                //     meta.defaultValue.name = tplNode.billName;
                // }else{
                //     meta.defaultValue = null;
                // }
                if(tplNode.billName&&tplNode.billType){
                    newFormData[meta.name]={};
                    newFormData[meta.name].code = tplNode.billType;
                    newFormData[meta.name].name = tplNode.billName;
                }
                break;
            }
            case "logicFormula":{
                // if(tplNode.logicFormula && tplNode.logicFormulaXml) {
                //     meta.defaultValue={
                //         logicFormula : tplNode.logicFormula,
                //         logicFormulaXml : tplNode.logicFormulaXml
                //     }
                // } else {
                //     meta.defaultValue = null;
                // }
                if(tplNode.logicFormula && tplNode.logicFormulaXml) {
                    newFormData[meta.name]={};
                    newFormData[meta.name].code = tplNode.logicFormula;
                    newFormData[meta.name].xml = tplNode.logicFormulaXml;
                }
                break;
            }
        }
    }
    return newFormData;
};
