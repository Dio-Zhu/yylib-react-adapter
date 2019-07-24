'use strict';

var _indexDeps = require('../../../index-deps');

var _Defines = require('../../../Defines');

var _FormItemType = require('../../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = require('../FormInputsUtil');

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.select){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.select);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.select);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.select;
    //是否支持多选
    var isMultiple = tplNode.multiple !== undefined ? tplNode.multiple : false;

    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.select || isFormItem || isEditItem || isSearchItem){
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "defaultValue":
                {
                    if (isMultiple) {
                        value = value == "" || value == undefined || value == null ? [] : value;
                    }
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "multiple":
                {
                    // meta.defaultValue = value;
                    //当是否支持多选发生变更时，清除之前的默认值配置
                    if (tplNode.multiple == undefined && value == true || tplNode.multiple == true && value == false) {
                        delete tplNode.defaultValue;
                    }
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isTrueSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "allowClear":
            case "valueType":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};