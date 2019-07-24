'use strict';

var _FormItemType = require('./FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputsValues = {};
FormInputsValues[_FormItemType2.default.attachupload] = require('./attachupload/AttachuploadValues'); //附件上传的配置项
FormInputsValues[_FormItemType2.default.cascader] = require('./cascader/CascaderValues'); //级联框的配置项
FormInputsValues[_FormItemType2.default.currency] = require('./currency/CurrencyValues'); //金额框的配置项
FormInputsValues[_FormItemType2.default.date] = require('./date/DateValues'); //日期框的配置项
FormInputsValues[_FormItemType2.default.rangepicker] = require('./rangepicker/RangePickerValues'); //日期范围选择器的配置项
FormInputsValues[_FormItemType2.default.enumselect] = require('./enumselect/EnumSelectValues'); //自定义档案枚举扩展配置项
FormInputsValues[_FormItemType2.default.imageupload] = require('./imageupload/ImageUploadValues'); //图片上传的配置项
FormInputsValues[_FormItemType2.default.input] = require('./input/InputValues'); //输入框的配置项
FormInputsValues[_FormItemType2.default.inputrefer] = require('./inputrefer/InputReferValues'); //参照的配置项
FormInputsValues[_FormItemType2.default.number] = require('./number/NumberValues'); //数字框的配置项
FormInputsValues[_FormItemType2.default.checkboxgroup] = require('./checkbox/CheckboxGroupValues'); //多选框的配置项
FormInputsValues[_FormItemType2.default.radiogroup] = require('./radio/RadioGroupValues'); //单选框的配置项
FormInputsValues[_FormItemType2.default.select] = require('./select/SelectValues'); //下拉框的配置项
FormInputsValues[_FormItemType2.default.switch] = require('./switch/SwitchValues'); //开关的配置项
FormInputsValues[_FormItemType2.default.textarea] = require('./textarea/TextareaValues'); //文本域的配置项
FormInputsValues[_FormItemType2.default.editor] = require('./editor/EditorValues'); //富文本编辑的配置项
FormInputsValues[_FormItemType2.default.attachmgrw] = require('./attachmgrw/AttachMgrwValues'); //附件管理
FormInputsValues[_FormItemType2.default.time] = require('./time/TimeValues'); //时间框
FormInputsValues[_FormItemType2.default.plaintext] = require('./text/TextValues'); //纯文本
FormInputsValues[_FormItemType2.default.autoselect] = require('./autoselect/AutoSelectValues'); //自动匹配
FormInputsValues[_FormItemType2.default.inputmap] = null; //地图选址的配置项
FormInputsValues[_FormItemType2.default.inputbutton] = null; //输入框按钮
module.exports = FormInputsValues;