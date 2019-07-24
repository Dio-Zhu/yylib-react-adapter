'use strict';

var _FormItemType = require('./FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttachUploadMeta = require('./attachupload/AttachuploadMeta');
var CascaderMeta = require('./cascader/CascaderMeta');
var CurrencyMeta = require('./currency/CurrencyMeta');
var DateMeta = require('./date/DateMeta');
var EnumSelectMeta = require('./enumselect/EnumSelectMeta');
var ImageUploadMeta = require('./imageupload/ImageUploadMeta');
var InputMeta = require('./input/InputMeta');
var InputButtonMeta = require('./inputbutton/InputButtonMeta');
var InputReferMeta = require('./inputrefer/InputReferMeta');
var NumberMeta = require('./number/NumberMeta');
var CheckboxGroupMeta = require('./checkbox/CheckboxGroupMeta');
var RadioGroupMeta = require('./radio/RadioGroupMeta');
var SelectMeta = require('./select/SelectMeta');
var SwitchMeta = require('./switch/SwitchMeta');
var TextareaMeta = require('./textarea/TextareaMeta');
var InputMapMeta = require('./inputmap/InputMapMeta');
var EditorMeta = require('./editor/EditorMeta');
var AttachMgrwMeta = require('./attachmgrw/AttachMgrwMeta');
var TimeMeta = require('./time/TimeMeta');
var RangePickerMeta = require('./rangepicker/RangePickerMeta');
var TextMeta = require('./text/TextMeta');
var AutoSelectMeta = require('./autoselect/AutoSelectMeta');

module.exports = function (options) {
    //var {tplNode,tplTree} = options;
    var PropMeta = {};
    PropMeta[_FormItemType2.default.inputrefer] = InputReferMeta(options);
    PropMeta[_FormItemType2.default.input] = InputMeta(options);
    PropMeta[_FormItemType2.default.select] = SelectMeta(options);
    PropMeta[_FormItemType2.default.date] = DateMeta(options);
    PropMeta[_FormItemType2.default.number] = NumberMeta(options);
    PropMeta[_FormItemType2.default.currency] = CurrencyMeta(options);
    PropMeta[_FormItemType2.default.switch] = SwitchMeta(options);
    PropMeta[_FormItemType2.default.enumselect] = EnumSelectMeta(options);
    PropMeta[_FormItemType2.default.cascader] = CascaderMeta(options);
    PropMeta[_FormItemType2.default.radiogroup] = RadioGroupMeta(options);
    PropMeta[_FormItemType2.default.checkboxgroup] = CheckboxGroupMeta(options);
    PropMeta[_FormItemType2.default.textarea] = TextareaMeta(options);
    PropMeta[_FormItemType2.default.imageupload] = ImageUploadMeta(options);
    PropMeta[_FormItemType2.default.attachupload] = AttachUploadMeta(options);
    PropMeta[_FormItemType2.default.inputmap] = InputMapMeta(options);
    PropMeta[_FormItemType2.default.editor] = EditorMeta(options);
    PropMeta[_FormItemType2.default.attachmgrw] = AttachMgrwMeta(options);
    PropMeta[_FormItemType2.default.time] = TimeMeta(options);
    PropMeta[_FormItemType2.default.rangepicker] = RangePickerMeta(options);
    PropMeta[_FormItemType2.default.plaintext] = TextMeta(options);
    PropMeta[_FormItemType2.default.autoselect] = AutoSelectMeta(options);
    PropMeta[_FormItemType2.default.inputbutton] = InputButtonMeta(options);
    return PropMeta;
};