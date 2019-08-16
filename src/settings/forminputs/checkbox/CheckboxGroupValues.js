module.exports = function(options){
     var {formMeta,tplNode,tplTree} = options;
     var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup
    //     ||tplNode.uitype == UiTypeDef.formitemw
    //     ||tplNode.uitype == UiTypeDef.edititemw
    // ) {
    //     for(var i=0;i<formMeta.length;i++){
    //         var meta = formMeta[i];
    //         switch(meta.name){
    //             case "defaultValue":{
    //                 meta.defaultValue = tplNode.defaultValue !== undefined ? tplNode.defaultValue : meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};
