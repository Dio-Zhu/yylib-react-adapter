'use strict';

var _indexDeps = require('../../index-deps');

var _FormInputsToValues = require('../forminputs/FormInputsToValues');

var _FormInputsToValues2 = _interopRequireDefault(_FormInputsToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当uisubtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode) {
    //需要保留的属性清单
    var keepProps = ['nid', 'uikey', 'uititle', 'uitype', 'className', 'uisubtype', 'label', 'labelHelp', 'extra', 'pattern', 'patternMsg', 'newline', 'rowBreak', 'required', 'labelCol', 'disabled', 'wrapperCol', 'visible'];
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

    var oldUiSubType = tplNode.uisubtype;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // tplNode.label = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'label', value);
                    break;
                }
            case "uisubtype":
                {
                    // meta.defaultValue = value;
                    if (oldUiSubType !== value) {
                        clearOtherProps(tplNode); //当uisubtype发生变更时清理属性
                    }
                    break;
                }
            // case "labelHelp":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "extra":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "pattern":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "patternMsg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "newline":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "rowBreak":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "labelCol":
            case "wrapperCol":
                if (meta.defaultValue === value) {
                    delete tplNode[meta.name];
                } else {
                    tplNode[meta.name] = { span: value };
                }
                break;
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //处理uisubtype特有属性
    if (typeof _FormInputsToValues2.default[tplNode.uisubtype] == 'function') {
        _FormInputsToValues2.default[tplNode.uisubtype](options);
    }
};