import FormInputsValues from '../forminputs/FormInputsValues';
module.exports = function(options){
    var newFormData = {};//处理公共属性
    var {formMeta,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            // case "fieldtype":{
            //     meta.defaultValue=tplNode.fieldtype?tplNode.fieldtype:meta.defaultValue;
            //     break;
            // }
            // case "oper":{
            //     meta.defaultValue=tplNode.oper?tplNode.oper:meta.defaultValue;
            //     break;
            // }
            // case "inputtype":{
            //     meta.defaultValue=tplNode.inputtype?tplNode.inputtype:meta.defaultValue;
            //     break;
            // }
            // case "hidden":{
            //     meta.defaultValue=tplNode.hidden!==undefined?tplNode.hidden:meta.defaultValue;
            //     break;
            // }
            // case "required":{
            //     meta.defaultValue=tplNode.required!==undefined?tplNode.required:meta.defaultValue;
            //     break;
            // }
            // case "readonly":{
            //     meta.defaultValue=tplNode.readonly!==undefined?tplNode.readonly:meta.defaultValue;
            //     break;
            // }
            // case "enableSearch":{
            //     meta.defaultValue=tplNode.enableSearch!==undefined?tplNode.enableSearch:meta.defaultValue;
            //     break;
            // }
            // case "enableOrder":{
            //     meta.defaultValue=tplNode.enableOrder!==undefined?tplNode.enableOrder:meta.defaultValue;
            //     break;
            // }
            case "preFunction":{
                // if(tplNode.funcId&&tplNode.funcCode&&tplNode.funcName){
                //     meta.defaultValue={};
                //     meta.defaultValue.id = tplNode.funcId;
                //     meta.defaultValue.code = tplNode.funcCode;
                //     meta.defaultValue.name = tplNode.funcName;
                // }else{
                //     meta.defaultValue = null;
                // }
                if(tplNode.funcId&&tplNode.funcCode&&tplNode.funcName){
                    newFormData[meta.name]={};
                    newFormData[meta.name].id = tplNode.funcId;
                    newFormData[meta.name].code = tplNode.funcCode;
                    newFormData[meta.name].name = tplNode.funcName;
                }
                break;
            }
        }
    }
    //处理inputtype特有属性
    if(typeof FormInputsValues[tplNode.inputtype]=='function'){
        newFormData = Object.assign(newFormData,FormInputsValues[tplNode.inputtype](options));
    }
    return newFormData;
};
