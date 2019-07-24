'use strict';

var _Defines = require('../../../Defines');

var _CurrencyValues = require('../currency/CurrencyValues');

var _CurrencyValues2 = _interopRequireDefault(_CurrencyValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    if (tplNode.type == 'currency') {
        return (0, _CurrencyValues2.default)(options);
    } else {
        // //处理公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // newFormData = BasePropValues(options);
        // }
        //是否为搜索条件项
        var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
        // //处理特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||isSearchItem//条件项
        // ) {
        for (var i = 0; i < formMeta.length; i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "defaultValue":
                case "min":
                case "max":
                case "addonAfter":
                case "direction":
                case "placeholder":
                case "range":
                    if (isSearchItem) {
                        if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                            newFormData[meta.name] = tplNode.inputprops[meta.name];
                        }
                    }
                    break;
            }
        }
    }
    // }
    return newFormData;
};