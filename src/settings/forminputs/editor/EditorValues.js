module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.editor
    //     ||tplNode.uitype == UiTypeDef.formitemw
    // ) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "icons":{
    //                 meta.defaultValue=tplNode.icons!=undefined?tplNode.icons:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};
