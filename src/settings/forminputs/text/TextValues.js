
module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.text ){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.input||
    //     tplNode.uitype == UiTypeDef.formitemw) {
    //     for(var i=0;i<(formMeta||[]).length;i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "value":{
    //                 meta.defaultValue = tplNode.value!=undefined?tplNode.value:meta.defaultValue;
    //                 break;
    //             }
    //             case "addonAfter":{
    //                 meta.defaultValue = tplNode.addonAfter!=undefined?tplNode.addonAfter:meta.defaultValue;
    //             break;
    //             }
    //             case "fieldtype":{
    //                 meta.defaultValue = tplNode.fieldtype!=undefined?tplNode.fieldtype:meta.defaultValue;
    //                 break;
    //             }
    //             case "comma":{
    //                 meta.defaultValue = tplNode.comma!=undefined?tplNode.comma:meta.defaultValue;
    //                 break;
    //             }
    //             case "decimal":{
    //                 meta.defaultValue = tplNode.decimal!=undefined?tplNode.decimal:meta.defaultValue;
    //                 break;
    //             }
    //             case "showDecimal":{
    //                 meta.defaultValue = tplNode.showDecimal!=undefined?tplNode.showDecimal:meta.defaultValue;
    //                 break;
    //             }
    //             case "zeroFilling":{
    //                 meta.defaultValue = tplNode.zeroFilling != undefined ? tplNode.zeroFilling : meta.defaultValue;
    //                 break;
    //             }
    //             case "format":{//日期格式
    //                 meta.defaultValue = tplNode.format!=undefined?tplNode.format:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
}