"use strict";

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.cascader){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.cascader||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.cascader)) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "size":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "allowClear":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isTrueSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "placeholder":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "expandTrigger":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "changeOnSelect":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isTrueSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "options":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode, meta.name,value);
    //                 break;
    //             }
    //         }
    //     }
    // }
};