"use strict";

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.checkboxgroup||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.checkboxgroup)) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "defaultValue":{
    //                 // meta.defaultValue = value;
    //                 //当为"无"时，值为空字符串，所以只要不等于undefined就设置值
    //                 LogicUtils.isNotEqualSet(tplNode,meta.name,value,undefined);
    //                 break;
    //             }
    //         }
    //     }
    // }
};