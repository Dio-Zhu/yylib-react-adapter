module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "billTypeId":{
                if(value){
                    // meta.defaultValue={};
                    // meta.defaultValue.id = value.id;
                    // meta.defaultValue.name = value.refName?value.refName:value.name;
                    // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                    tplNode.billName  = value.refName?value.refName:value.name;
                    tplNode.billRefId  = value.refId?value.refId:value.id;
                    tplNode.billTypeId  = value.refCode?value.refCode:value.code;
                }else{
                    delete tplNode.billRefId;
                    delete tplNode.billTypeId;
                    delete tplNode.billName;
                }
                break;
            }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "serUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};
