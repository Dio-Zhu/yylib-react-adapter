'use strict';

var _FormItemType = require('./FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _Defines = require('../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * toNode回调方法，传递参数对象 options:{
 *  treeData - 当前树结构
 *  currNode - 当前结点对象
 *  tplNode - 即将添加的新子节点对象
 *  parser - 新子节点对象对应的组件解析器
 * }
 */
module.exports = function (options) {
    var tplTree = options.tplTree,
        tplNode = options.tplNode,
        tplParentNode = options.tplParentNode;

    if (tplParentNode.uitype == _Defines.UiTypeDef.formw) {
        //父节点为表单项
        tplNode.label = tplNode.uititle;
        //配置uisubtype为FormItemType值
        if (tplNode.uitype == _Defines.UiTypeDef.input) {
            tplNode.uisubtype = _FormItemType2.default.input;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputnumber) {
            tplNode.uisubtype = _FormItemType2.default.number;
        } else if (tplNode.uitype == _Defines.UiTypeDef.textarea) {
            tplNode.uisubtype = _FormItemType2.default.textarea;
        } else if (tplNode.uitype == _Defines.UiTypeDef.datepicker) {
            tplNode.uisubtype = _FormItemType2.default.date;
        } else if (tplNode.uitype == _Defines.UiTypeDef.timepicker) {
            tplNode.uisubtype = _FormItemType2.default.time;
        } else if (tplNode.uitype == _Defines.UiTypeDef.rangepicker) {
            tplNode.uisubtype = _FormItemType2.default.rangepicker;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputrefer) {
            tplNode.uisubtype = _FormItemType2.default.inputrefer;
        } else if (tplNode.uitype == _Defines.UiTypeDef.switch) {
            tplNode.uisubtype = _FormItemType2.default.switch;
        } else if (tplNode.uitype == _Defines.UiTypeDef.select) {
            tplNode.uisubtype = _FormItemType2.default.select;
        } else if (tplNode.uitype == _Defines.UiTypeDef.enumselect) {
            tplNode.uisubtype = _FormItemType2.default.enumselect;
        } else if (tplNode.uitype == _Defines.UiTypeDef.attachupload) {
            tplNode.uisubtype = _FormItemType2.default.attachupload;
        } else if (tplNode.uitype == _Defines.UiTypeDef.cascader) {
            tplNode.uisubtype = _FormItemType2.default.cascader;
        } else if (tplNode.uitype == _Defines.UiTypeDef.imageupload) {
            tplNode.uisubtype = _FormItemType2.default.imageupload;
        } else if (tplNode.uitype == _Defines.UiTypeDef.radiogroup) {
            tplNode.uisubtype = _FormItemType2.default.radiogroup;
        } else if (tplNode.uitype == _Defines.UiTypeDef.checkboxgroup) {
            tplNode.uisubtype = _FormItemType2.default.checkboxgroup;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputmap) {
            tplNode.uisubtype = _FormItemType2.default.inputmap;
        } else if (tplNode.uitype == _Defines.UiTypeDef.editor) {
            tplNode.uisubtype = _FormItemType2.default.editor;
        } else if (tplNode.uitype == _Defines.UiTypeDef.attachmgrw) {
            tplNode.uisubtype = _FormItemType2.default.attachmgrw;
        } else if (tplNode.uitype == _Defines.UiTypeDef.timepicker) {
            tplNode.uisubtype = _FormItemType2.default.time;
        } else if (tplNode.uitype == _Defines.UiTypeDef.text) {
            tplNode.uisubtype = _FormItemType2.default.plaintext;
        } else if (tplNode.uitype == _Defines.UiTypeDef.autoselect) {
            tplNode.uisubtype = _FormItemType2.default.autoselect;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputbutton) {
            tplNode.uisubtype = _FormItemType2.default.inputbutton;
        }
        //将uitype统一转换为FormItemWidget
        tplNode.uitype = _Defines.UiTypeDef.formitemw;
    }
};