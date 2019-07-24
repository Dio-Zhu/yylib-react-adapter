'use strict';

var _FormItemType = require('./FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputsToValues = {};
FormInputsToValues[_FormItemType2.default.input] = require('./input/InputToValues'); //输入框的配置项
FormInputsToValues[_FormItemType2.default.inputrefer] = require('./inputrefer/InputReferToValues'); //参照的配置项
FormInputsToValues[_FormItemType2.default.date] = require('./date/DateToValues'); //日期框的配置项
FormInputsToValues[_FormItemType2.default.rangepicker] = require('./rangepicker/RangePickerToValues'); //日期范围选择器的配置项
FormInputsToValues[_FormItemType2.default.number] = require('./number/NumberToValues'); //数字框的配置项
FormInputsToValues[_FormItemType2.default.switch] = require('./switch/SwitchToValues'); //开关的配置项
FormInputsToValues[_FormItemType2.default.select] = require('./select/SelectToValues'); //下拉框的配置项
FormInputsToValues[_FormItemType2.default.enumselect] = require('./enumselect/EnumSelectToValues'); //自定义档案枚举扩展配置项
FormInputsToValues[_FormItemType2.default.currency] = require('./currency/CurrencyToValues'); //金额框的配置项
FormInputsToValues[_FormItemType2.default.cascader] = require('./cascader/CascaderToValues'); //级联框的配置项
FormInputsToValues[_FormItemType2.default.radiogroup] = require('./radio/RadioGroupToValues'); //单选框的配置项
FormInputsToValues[_FormItemType2.default.checkboxgroup] = require('./checkbox/CheckboxGroupToValues'); //多选框的配置项
FormInputsToValues[_FormItemType2.default.imageupload] = require('./imageupload/ImageUploadToValues'); //图片上传的配置项
FormInputsToValues[_FormItemType2.default.attachupload] = require('./attachupload/AttachuploadToValues'); //附件上传的配置项
FormInputsToValues[_FormItemType2.default.textarea] = require('./textarea/TextareaToValues'); //文本域的配置项
FormInputsToValues[_FormItemType2.default.inputmap] = require('./inputmap/InputMapToValues'); //地图选址
FormInputsToValues[_FormItemType2.default.editor] = require('./editor/EditorToValues'); //富文本编辑
FormInputsToValues[_FormItemType2.default.attachmgrw] = require('./attachmgrw/AttachMgrwToValues'); //附件管理
FormInputsToValues[_FormItemType2.default.time] = require('./time/TimeToValues'); //时间框
FormInputsToValues[_FormItemType2.default.plaintext] = require('./text/TextToValues'); //纯文本
FormInputsToValues[_FormItemType2.default.autoselect] = require('./autoselect/AutoSelectToValues'); //自动匹配

module.exports = FormInputsToValues;