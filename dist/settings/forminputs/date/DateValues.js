"use strict";

var _Defines = require("../../../Defines");

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.datepicker ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.datepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "format":
            case "showTime":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};