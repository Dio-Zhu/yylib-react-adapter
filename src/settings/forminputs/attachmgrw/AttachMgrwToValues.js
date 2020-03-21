module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;

    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // BasePropToValues(options);//处理公共属性
    // }

    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                // case "buttonText":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "serverUrl":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "sourceId":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "sourceType":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                case "billType":{
                    if(value){
                        // meta.defaultValue = {}
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billTypeId = value.id;
                        tplNode.billTypeName = value.refName?value.refName:value.name;
                        tplNode.billType = value.refCode?value.refCode:value.code;
                    } else {
                        delete tplNode.billTypeId;
                        delete tplNode.billTypeName;
                        delete tplNode.billType;
                    }
                    break;
                }
                // case "readOnly":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isTrueSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "enableUser":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "showUploadBtn":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "multiple":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isTrueSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "showDelBtn":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "align":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isEqualSet(tplNode,meta.name,value,'right');
                //     break;
                // }
                // case "btnType":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
                //     break;
                // }
                // case "btnGhost":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isTrueSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "fileLengthVisible": {
                //     // meta.defaultValue = value;
                //     LogicUtils.isTrueSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "deleteTip":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "accept":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
            }
        }
    // }
};
