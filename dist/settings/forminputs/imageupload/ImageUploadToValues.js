"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.imageupload||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.imageupload)) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxCount":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxWidth":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxHeight":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxType":{
            //     meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
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
        }
    }
    // }
};