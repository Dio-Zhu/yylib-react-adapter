"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = require("../../../index-deps");

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.textarea){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "autosize":
                {
                    //     // meta.defaultValue = value;
                    //     LogicUtils.isExistSet(tplNode,meta.name,value);
                    tplNode.autosize = value === false ? false : {};
                    break;
                }
            case "minRows":
            case "maxRows":
                delete tplNode[meta.name];
                if (tplNode.autosize !== false) {
                    tplNode.autosize = _typeof(tplNode.autosize) == 'object' ? tplNode.autosize : {};
                    _indexDeps.LogicUtils.isExistSet(tplNode.autosize, meta.name, value);
                }
                break;
            // case "maxLength":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "placeholder":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showTitle":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    // }
};