'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = require('../../index-deps');

var _FormInputsToValues = require('../forminputs/FormInputsToValues');

var _FormInputsToValues2 = _interopRequireDefault(_FormInputsToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当inputtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode) {
    //需要保留的属性清单
    var keepProps = ['nid', 'uikey', 'uititle', 'uitype', 'className', 'inputtype', 'fieldkey', 'title', 'fieldtype', 'oper', 'hidden', 'required', 'enableSearch', 'enableOrder', 'preFunction'];
    //需要清理的属性清单
    var removeProps = [];
    for (var key in tplNode) {
        if (!Array.includes(keepProps, key)) removeProps.push(key);
    }
    //console.log('需要清理的属性：',removeProps);
    //执行清理
    for (var idx in removeProps) {
        delete tplNode[removeProps[idx]];
    }
}
module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            case "uikey":
                {
                    // tplNode.fieldkey = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'fieldkey', value);
                    break;
                }
            // case "fieldtype":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "oper":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "inputtype":
                {
                    // meta.defaultValue = value;
                    if (tplNode.inputtype != value) {
                        tplNode.inputtype = value;
                        clearOtherProps(tplNode); //当uisubtype发生变更时清理属性
                    }
                    break;
                }
            // case "hidden":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "readonly":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrder":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "preFunction":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.name;
                        // meta.defaultValue.code = value.code;
                        tplNode.funcId = value.id;
                        tplNode.funcCode = value.code;
                        tplNode.funcName = value.name;
                    } else {
                        delete tplNode.funcId;
                        delete tplNode.funcCode;
                        delete tplNode.funcName;
                    }
                    break;
                }
        }
    }
    //初始化inputprops属性
    tplNode.inputprops = tplNode.inputprops || {};
    //处理inputtype特有属性
    if (typeof _FormInputsToValues2.default[tplNode.inputtype] == 'function') {
        _FormInputsToValues2.default[tplNode.inputtype](options);
    }
    //清理inputprops空对象属性
    if (tplNode.inputprops && !Object.keys(tplNode.inputprops).length) {
        delete tplNode.inputprops;
    }
};