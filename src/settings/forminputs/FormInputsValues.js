import FormItemType from './FormItemType';
const FormInputsValues = {};
FormInputsValues[FormItemType.attachupload] = require('./attachupload/AttachuploadValues');//附件上传的配置项
FormInputsValues[FormItemType.cascader] = require('./cascader/CascaderValues');//级联框的配置项
FormInputsValues[FormItemType.currency] = require('./currency/CurrencyValues');//金额框的配置项
FormInputsValues[FormItemType.date] = require('./date/DateValues');//日期框的配置项
FormInputsValues[FormItemType.rangepicker] = require('./rangepicker/RangePickerValues'); //日期范围选择器的配置项
FormInputsValues[FormItemType.enumselect] = require('./enumselect/EnumSelectValues');//自定义档案枚举扩展配置项
FormInputsValues[FormItemType.imageupload] = require('./imageupload/ImageUploadValues');//图片上传的配置项
FormInputsValues[FormItemType.input] = require('./input/InputValues');//输入框的配置项
FormInputsValues[FormItemType.inputrefer] = require('./inputrefer/InputReferValues');//参照的配置项
FormInputsValues[FormItemType.number] = require('./number/NumberValues'); //数字框的配置项
FormInputsValues[FormItemType.checkboxgroup] = require('./checkbox/CheckboxGroupValues');//多选框的配置项
FormInputsValues[FormItemType.radiogroup] = require('./radio/RadioGroupValues');//单选框的配置项
FormInputsValues[FormItemType.select] = require('./select/SelectValues');//下拉框的配置项
FormInputsValues[FormItemType.switch] = require('./switch/SwitchValues');//开关的配置项
FormInputsValues[FormItemType.textarea] = require('./textarea/TextareaValues');//文本域的配置项
FormInputsValues[FormItemType.editor] = require('./editor/EditorValues');//富文本编辑的配置项
FormInputsValues[FormItemType.attachmgrw] = require('./attachmgrw/AttachMgrwValues');//附件管理
FormInputsValues[FormItemType.time] = require('./time/TimeValues');//时间框
FormInputsValues[FormItemType.plaintext] = require('./text/TextValues');//纯文本
FormInputsValues[FormItemType.autoselect] = require('./autoselect/AutoSelectValues');//自动匹配
FormInputsValues[FormItemType.inputmap] = null; //地图选址的配置项
FormInputsValues[FormItemType.inputbutton] = null;  //输入框按钮
module.exports = FormInputsValues;