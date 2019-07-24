'use strict';

var _Defines = require('../../../Defines');

var _FormItemType = require('../../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = require('../FormInputsUtil');

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

var _CurrencyToValues = require('../currency/CurrencyToValues');

var _CurrencyToValues2 = _interopRequireDefault(_CurrencyToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    if (tplNode.type == 'currency') {
        return (0, _CurrencyToValues2.default)(options);
    } else {
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // BasePropToValues(options);//处理公共属性
        // }
        // //是否为表单项
        // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.number);
        // //是否为编辑项
        // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.number);
        //是否为搜索条件项
        var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.number;
        // if(tplNode.uitype == UiTypeDef.inputnumber
        //     || isFormItem || isEditItem || isSearchItem ) {
        for (var i = 0; i < formMeta.length; i++) {
            var meta = formMeta[i];
            if (!(meta.name in formData)) continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "defaultValue":
                case "min":
                case "max":
                case "addonAfter":
                case "direction":
                case "placeholder":
                case "range":
                    if (isSearchItem) {
                        _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                    }
                    break;
            }
        }
    }
    // }
};