module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.attachupload);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.attachupload);
    // if(tplNode.uitype == UiTypeDef.attachupload
    //     || isFormItem || isEditItem ){
        for(var i=0;i<formMeta.length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                // case "action":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "buttonText":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "showUploadList":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "enableUser":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "multiple":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
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
                // case "btnType":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
                //     break;
                // }
                // case "sourceType":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
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
