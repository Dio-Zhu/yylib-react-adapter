'use strict';

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
    // if(tplNode.uitype == UiTypeDef.rangepicker){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.rangepicker);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.rangepicker);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.rangepicker;

    // if(tplNode.uitype == UiTypeDef.rangepicker || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "format":
            case "showTime":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};