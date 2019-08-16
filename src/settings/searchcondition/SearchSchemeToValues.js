module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "billType":{
                if(typeof value == 'object'){
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
            // case "enableUnSelect":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};
