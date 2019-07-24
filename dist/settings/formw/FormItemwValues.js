"use strict";

var _FormInputsValues = require("../forminputs/FormInputsValues");

var _FormInputsValues2 = _interopRequireDefault(_FormInputsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {}; //处理公共属性
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "uisubtype":{
            //     meta.defaultValue = tplNode.uisubtype?tplNode.uisubtype:meta.defaultValue;
            //     break;
            // }
            // case "labelHelp":{
            //     meta.defaultValue = tplNode.labelHelp?tplNode.labelHelp:meta.defaultValue;
            //     break;
            // }
            // case "extra":{
            //     meta.defaultValue = tplNode.extra?tplNode.extra:meta.defaultValue;
            //     break;
            // }
            // case "pattern":{
            //     meta.defaultValue = tplNode.pattern?tplNode.pattern:meta.defaultValue;
            //     break;
            // }
            // case "disabled":{
            //     meta.defaultValue = tplNode.disabled!=undefined?tplNode.disabled:meta.defaultValue;
            //     break;
            // }
            // case "patternMsg":{
            //     meta.defaultValue = tplNode.patternMsg?tplNode.patternMsg:meta.defaultValue;
            //     break;
            // }
            // case "newline":{
            //     meta.defaultValue = tplNode.newline!=undefined?tplNode.newline:meta.defaultValue;
            //     break;
            // }
            // case "required":{
            //     meta.defaultValue = tplNode.required!=undefined?tplNode.required:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue = tplNode.visible!=undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "wrapperCol":
                {
                    if (tplNode.wrapperCol && tplNode.wrapperCol.span) {
                        // meta.defaultValue =tplNode.wrapperCol.span;
                        newFormData[meta.name] = tplNode.wrapperCol.span;
                    } else if (tplNode.formWrapperCol) {
                        // meta.defaultValue =tplNode.formWrapperCol.span;
                        newFormData[meta.name] = tplNode.formWrapperCol.span;
                    }
                    break;
                }
            case "labelCol":
                {
                    if (tplNode.labelCol && tplNode.labelCol.span) {
                        // meta.defaultValue =tplNode.labelCol.span;
                        newFormData[meta.name] = tplNode.labelCol.span;
                    } else if (tplNode.formLabelCol) {
                        // meta.defaultValue =tplNode.formLabelCol.span;
                        newFormData[meta.name] = tplNode.formLabelCol.span;
                    }
                    break;
                }
            // case "rowBreak":{
            //     meta.defaultValue = tplNode.rowBreak!=undefined?tplNode.rowBreak:meta.defaultValue;
            //     break;
            // }

            // case "mathFormula":{
            //     meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
            //     break;
            // }
        }
    }
    //处理uisubtype特有属性
    if (typeof _FormInputsValues2.default[tplNode.uisubtype] == 'function') {
        newFormData = Object.assign(newFormData, _FormInputsValues2.default[tplNode.uisubtype](options));
    }
    return newFormData;
};