import FormItemType from './FormItemType';
const FormInputsToValues = {};
FormInputsToValues[FormItemType.input] = require('./input/InputToValues');//输入框的配置项
FormInputsToValues[FormItemType.inputrefer] = require('./inputrefer/InputReferToValues');//参照的配置项
FormInputsToValues[FormItemType.date]=require('./date/DateToValues'); //日期框的配置项
FormInputsToValues[FormItemType.rangepicker]=require('./rangepicker/RangePickerToValues');//日期范围选择器的配置项
FormInputsToValues[FormItemType.number]=require('./number/NumberToValues');  //数字框的配置项
FormInputsToValues[FormItemType.switch]=require('./switch/SwitchToValues');//开关的配置项
FormInputsToValues[FormItemType.select]=require('./select/SelectToValues'); //下拉框的配置项
FormInputsToValues[FormItemType.enumselect]=require('./enumselect/EnumSelectToValues'); //自定义档案枚举扩展配置项
FormInputsToValues[FormItemType.currency]=require('./currency/CurrencyToValues'); //金额框的配置项
FormInputsToValues[FormItemType.cascader]=require('./cascader/CascaderToValues');//级联框的配置项
FormInputsToValues[FormItemType.radiogroup]=require('./radio/RadioGroupToValues');//单选框的配置项
FormInputsToValues[FormItemType.checkboxgroup]=require('./checkbox/CheckboxGroupToValues');//多选框的配置项
FormInputsToValues[FormItemType.imageupload]=require('./imageupload/ImageUploadToValues');//图片上传的配置项
FormInputsToValues[FormItemType.attachupload]=require('./attachupload/AttachuploadToValues');//附件上传的配置项
FormInputsToValues[FormItemType.textarea]=require('./textarea/TextareaToValues');//文本域的配置项
FormInputsToValues[FormItemType.inputmap]=require('./inputmap/InputMapToValues');//地图选址
FormInputsToValues[FormItemType.editor]=require('./editor/EditorToValues');//富文本编辑
FormInputsToValues[FormItemType.attachmgrw]=require('./attachmgrw/AttachMgrwToValues');//附件管理
FormInputsToValues[FormItemType.time]=require('./time/TimeToValues');//时间框
FormInputsToValues[FormItemType.plaintext]=require('./text/TextToValues');//纯文本
FormInputsToValues[FormItemType.autoselect]=require('./autoselect/AutoSelectToValues');//自动匹配

module.exports = FormInputsToValues;