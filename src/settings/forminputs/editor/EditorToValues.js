
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.editor);
    // // 富文本编辑配置
    // if(tplNode.uitype == UiTypeDef.editor
    //     || isFormItem
    // ) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "icons":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //         }
    //     }
    // }
};
