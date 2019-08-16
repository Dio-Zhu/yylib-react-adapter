module.exports = function(options){
    var newFormData = {};
    var {formMeta,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue=tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "billTypeId":{
                // if(tplNode.billName&&tplNode.billTypeId){
                //     meta.defaultValue={};
                //     meta.defaultValue.code = tplNode.billTypeId;
                //     meta.defaultValue.name = tplNode.billName;
                //     meta.defaultValue.id = tplNode.billId;
                // }else{
                //     meta.defaultValue = null;
                // }
                if(tplNode[meta.name]) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode.billId;
                    newFormData[meta.name].code = tplNode.billTypeId;
                    newFormData[meta.name].name = tplNode.billName;
                }
                break;
            }
            // case "formurl":{
            //     meta.defaultValue=tplNode.formurl!==undefined?tplNode.formurl:meta.defaultValue;
            //     break;
            // }
            // case "serUrl":{
            //     meta.defaultValue=tplNode.serUrl!==undefined?tplNode.serUrl:meta.defaultValue;
            //     break;
            // }
            // case "refUrl":{
            //     meta.defaultValue=tplNode.refUrl!=undefined?tplNode.refUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!=undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};
