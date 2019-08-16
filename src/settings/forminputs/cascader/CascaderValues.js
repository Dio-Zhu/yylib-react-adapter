module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.cascader ){
    //     // newFormData = BasePropValues(options);
    // }
    // if(tplNode.uitype == UiTypeDef.cascader
    //     ||tplNode.uitype == UiTypeDef.formitemw
    //     ||tplNode.uitype == UiTypeDef.edititemw
    // ) {
    //     for (var i = 0; i < formMeta.length; i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "size":{
    //                 meta.defaultValue = tplNode.size != undefined ? tplNode.size : meta.defaultValue;
    //                 break;
    //             }
    //             case "allowClear":{
    //                 meta.defaultValue = tplNode.allowClear != undefined ? tplNode.allowClear : meta.defaultValue;
    //                 break;
    //             }
    //             case "placeholder":{
    //                 meta.defaultValue = tplNode.placeholder != undefined ? tplNode.placeholder : meta.defaultValue;
    //                 break;
    //             }
    //             case "changeOnSelect":{
    //                 meta.defaultValue = tplNode.changeOnSelect != undefined ? tplNode.changeOnSelect : meta.defaultValue;
    //                 break;
    //             }
    //             case "expandTrigger":{
    //                 meta.defaultValue = tplNode.expandTrigger != undefined ? tplNode.expandTrigger : meta.defaultValue;
    //                 break;
    //             }
    //             case "options":{
    //                 meta.defaultValue=tplNode.options!==undefined?tplNode.options:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
}
