'use strict';

var _indexDeps = require('../../../index-deps');

var _Defines = require('../../../Defines');

var _FormInputsUtil = require('../FormInputsUtil');

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    //是否为编辑项

    var isEditItem = tplNode.uitype == _Defines.UiTypeDef.edititemw;
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.currency
    //     || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "decimal":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列精确小数位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalDecimal = value;
                        }
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "zeroFilling":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isFalseSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列千分位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalZeroFilling = value;
                        }
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "comma":
                {
                    //联动编辑表格
                    if (isEditItem) {
                        //联动精确数值框千分位
                        tplNode.commaVisible = value;
                        //联动编辑表格合计列千分位
                        if (tplNode.total) {
                            tplNode.totalComma = value;
                        }
                    }
                    break;
                }
            case "commaVisible":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isFalseSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列千分位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalComma = value;
                        }
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "range":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isTrueSet(tplNode, meta.name, value);
                        _indexDeps.LogicUtils.isExistSet(tplNode, 'defaultValue', value ? [] : null); //为了忘记在range模式下配置defaultValue准备
                    }
                    break;
                }
            case "showDecimal":
            case "enableCalc":
            case "symbol":
            case "addonAfter":
            case "direction":
            case "min":
            case "max":
            case "placeholder":
            case "minus":
            case "precisionConfig":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};