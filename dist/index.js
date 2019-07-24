'use strict';

var _indexDeps = require('./index-deps');

var _Defines = require('./Defines');

var _Defines2 = _interopRequireDefault(_Defines);

var _AccordionsAdapter = require('./adapters/AccordionsAdapter');

var _AccordionsAdapter2 = _interopRequireDefault(_AccordionsAdapter);

var _AccordionAdapter = require('./adapters/AccordionAdapter');

var _AccordionAdapter2 = _interopRequireDefault(_AccordionAdapter);

var _AttachMgrwAdapter = require('./adapters/forminputs/AttachMgrwAdapter');

var _AttachMgrwAdapter2 = _interopRequireDefault(_AttachMgrwAdapter);

var _FormwAdapter = require('./adapters/FormwAdapter');

var _FormwAdapter2 = _interopRequireDefault(_FormwAdapter);

var _SearchConditionAdapter = require('./adapters/SearchConditionAdapter');

var _SearchConditionAdapter2 = _interopRequireDefault(_SearchConditionAdapter);

var _SearchItemAdapter = require('./adapters/SearchItemAdapter');

var _SearchItemAdapter2 = _interopRequireDefault(_SearchItemAdapter);

var _SearchSchemeAdapter = require('./adapters/SearchSchemeAdapter');

var _SearchSchemeAdapter2 = _interopRequireDefault(_SearchSchemeAdapter);

var _AutoSelectAdapter = require('./adapters/forminputs/AutoSelectAdapter');

var _AutoSelectAdapter2 = _interopRequireDefault(_AutoSelectAdapter);

var _EnumSelectAdapter = require('./adapters/forminputs/EnumSelectAdapter');

var _EnumSelectAdapter2 = _interopRequireDefault(_EnumSelectAdapter);

var _ScrollbarAdapter = require('./adapters/ScrollbarAdapter');

var _ScrollbarAdapter2 = _interopRequireDefault(_ScrollbarAdapter);

var _TreeAdapter = require('./adapters/TreeAdapter');

var _TreeAdapter2 = _interopRequireDefault(_TreeAdapter);

var _TreeNodeAdapter = require('./adapters/TreeNodeAdapter');

var _TreeNodeAdapter2 = _interopRequireDefault(_TreeNodeAdapter);

var _DivideAdapter = require('./adapters/DivideAdapter');

var _DivideAdapter2 = _interopRequireDefault(_DivideAdapter);

var _ModalAdapter = require('./adapters/ModalAdapter');

var _ModalAdapter2 = _interopRequireDefault(_ModalAdapter);

var _StepsNavAdapter = require('./adapters/StepsNavAdapter');

var _StepsNavAdapter2 = _interopRequireDefault(_StepsNavAdapter);

var _StepsNavItemAdapter = require('./adapters/StepsNavItemAdapter');

var _StepsNavItemAdapter2 = _interopRequireDefault(_StepsNavItemAdapter);

var _EditorAdapter = require('./adapters/forminputs/EditorAdapter');

var _EditorAdapter2 = _interopRequireDefault(_EditorAdapter);

var _TagItemAdapter = require('./adapters/TagItemAdapter');

var _TagItemAdapter2 = _interopRequireDefault(_TagItemAdapter);

var _TagGroupAdapter = require('./adapters/TagGroupAdapter');

var _TagGroupAdapter2 = _interopRequireDefault(_TagGroupAdapter);

var _ToolbarAdapter = require('./adapters/ToolbarAdapter');

var _ToolbarAdapter2 = _interopRequireDefault(_ToolbarAdapter);

var _InputButtonAdapter = require('./adapters/forminputs/InputButtonAdapter');

var _InputButtonAdapter2 = _interopRequireDefault(_InputButtonAdapter);

var _CascaderAdapter = require('./adapters/forminputs/CascaderAdapter');

var _CascaderAdapter2 = _interopRequireDefault(_CascaderAdapter);

var _AttachuploadAdapter = require('./adapters/forminputs/AttachuploadAdapter');

var _AttachuploadAdapter2 = _interopRequireDefault(_AttachuploadAdapter);

var _PrintButtonAdapter = require('./adapters/PrintButtonAdapter');

var _PrintButtonAdapter2 = _interopRequireDefault(_PrintButtonAdapter);

var _RadioAdapter = require('./adapters/forminputs/RadioAdapter');

var _RadioAdapter2 = _interopRequireDefault(_RadioAdapter);

var _RadioGroupAdapter = require('./adapters/forminputs/RadioGroupAdapter');

var _RadioGroupAdapter2 = _interopRequireDefault(_RadioGroupAdapter);

var _CheckboxAdapter = require('./adapters/forminputs/CheckboxAdapter');

var _CheckboxAdapter2 = _interopRequireDefault(_CheckboxAdapter);

var _CheckboxGroupAdapter = require('./adapters/forminputs/CheckboxGroupAdapter');

var _CheckboxGroupAdapter2 = _interopRequireDefault(_CheckboxGroupAdapter);

var _NumberAdapter = require('./adapters/forminputs/NumberAdapter');

var _NumberAdapter2 = _interopRequireDefault(_NumberAdapter);

var _DateAdapter = require('./adapters/forminputs/DateAdapter');

var _DateAdapter2 = _interopRequireDefault(_DateAdapter);

var _TimeAdapter = require('./adapters/forminputs/TimeAdapter');

var _TimeAdapter2 = _interopRequireDefault(_TimeAdapter);

var _RangePickerAdapter = require('./adapters/forminputs/RangePickerAdapter');

var _RangePickerAdapter2 = _interopRequireDefault(_RangePickerAdapter);

var _ImageUploadAdapter = require('./adapters/forminputs/ImageUploadAdapter');

var _ImageUploadAdapter2 = _interopRequireDefault(_ImageUploadAdapter);

var _InputAdapter = require('./adapters/forminputs/InputAdapter');

var _InputAdapter2 = _interopRequireDefault(_InputAdapter);

var _InputMapAdapter = require('./adapters/forminputs/InputMapAdapter');

var _InputMapAdapter2 = _interopRequireDefault(_InputMapAdapter);

var _ButtonReferAdapter = require('./adapters/forminputs/ButtonReferAdapter');

var _ButtonReferAdapter2 = _interopRequireDefault(_ButtonReferAdapter);

var _InputReferAdapter = require('./adapters/forminputs/InputReferAdapter');

var _InputReferAdapter2 = _interopRequireDefault(_InputReferAdapter);

var _TextareaAdapter = require('./adapters/forminputs/TextareaAdapter');

var _TextareaAdapter2 = _interopRequireDefault(_TextareaAdapter);

var _TextAdapter = require('./adapters/forminputs/TextAdapter');

var _TextAdapter2 = _interopRequireDefault(_TextAdapter);

var _IframeAdapter = require('./adapters/IframeAdapter');

var _IframeAdapter2 = _interopRequireDefault(_IframeAdapter);

var _SplitPaneAdapter = require('./adapters/SplitPaneAdapter');

var _SplitPaneAdapter2 = _interopRequireDefault(_SplitPaneAdapter);

var _FilterAreaAdapter = require('./adapters/FilterAreaAdapter');

var _FilterAreaAdapter2 = _interopRequireDefault(_FilterAreaAdapter);

var _EChartsAdapter = require('./adapters/EChartsAdapter');

var _EChartsAdapter2 = _interopRequireDefault(_EChartsAdapter);

var _CPCardTitleAdapter = require('./adapters/compact/CPCardTitleAdapter');

var _CPCardTitleAdapter2 = _interopRequireDefault(_CPCardTitleAdapter);

var _BpmApprovewAdapter = require('./adapters/BpmApprovewAdapter');

var _BpmApprovewAdapter2 = _interopRequireDefault(_BpmApprovewAdapter);

var _BpmSubmitwAdapter = require('./adapters/BpmSubmitwAdapter');

var _BpmSubmitwAdapter2 = _interopRequireDefault(_BpmSubmitwAdapter);

var _CPIconButtonAdapter = require('./adapters/compact/CPIconButtonAdapter');

var _CPIconButtonAdapter2 = _interopRequireDefault(_CPIconButtonAdapter);

var _CPDropdownButtonAdapter = require('./adapters/compact/CPDropdownButtonAdapter');

var _CPDropdownButtonAdapter2 = _interopRequireDefault(_CPDropdownButtonAdapter);

var _CPGoBackAdapter = require('./adapters/compact/CPGoBackAdapter');

var _CPGoBackAdapter2 = _interopRequireDefault(_CPGoBackAdapter);

var _CPAuditInfoAdapter = require('./adapters/compact/CPAuditInfoAdapter');

var _CPAuditInfoAdapter2 = _interopRequireDefault(_CPAuditInfoAdapter);

var _CPPluginMgrAdapter = require('./adapters/compact/CPPluginMgrAdapter');

var _CPPluginMgrAdapter2 = _interopRequireDefault(_CPPluginMgrAdapter);

var _CPFilterBarAdapter = require('./adapters/compact/CPFilterBarAdapter');

var _CPFilterBarAdapter2 = _interopRequireDefault(_CPFilterBarAdapter);

var _CPFilterRowAdapter = require('./adapters/compact/CPFilterRowAdapter');

var _CPFilterRowAdapter2 = _interopRequireDefault(_CPFilterRowAdapter);

var _CPFRFieldAdapter = require('./adapters/compact/CPFRFieldAdapter');

var _CPFRFieldAdapter2 = _interopRequireDefault(_CPFRFieldAdapter);

var _BreadcrumbAdapter = require('./adapters/BreadcrumbAdapter');

var _BreadcrumbAdapter2 = _interopRequireDefault(_BreadcrumbAdapter);

var _BreadcrumbItemAdapter = require('./adapters/BreadcrumbItemAdapter');

var _BreadcrumbItemAdapter2 = _interopRequireDefault(_BreadcrumbItemAdapter);

var _ButtonAdapter = require('./adapters/ButtonAdapter');

var _ButtonAdapter2 = _interopRequireDefault(_ButtonAdapter);

var _PageAdapter = require('./adapters/PageAdapter');

var _PageAdapter2 = _interopRequireDefault(_PageAdapter);

var _CaptionAdapter = require('./adapters/CaptionAdapter');

var _CaptionAdapter2 = _interopRequireDefault(_CaptionAdapter);

var _FormItemwAdapter = require('./adapters/FormItemwAdapter');

var _FormItemwAdapter2 = _interopRequireDefault(_FormItemwAdapter);

var _OptionAdapter = require('./adapters/forminputs/OptionAdapter');

var _OptionAdapter2 = _interopRequireDefault(_OptionAdapter);

var _ButtonSelectAdapter = require('./adapters/ButtonSelectAdapter');

var _ButtonSelectAdapter2 = _interopRequireDefault(_ButtonSelectAdapter);

var _ButtonItemAdapter = require('./adapters/ButtonItemAdapter');

var _ButtonItemAdapter2 = _interopRequireDefault(_ButtonItemAdapter);

var _EditTablewAdapter = require('./adapters/EditTablewAdapter');

var _EditTablewAdapter2 = _interopRequireDefault(_EditTablewAdapter);

var _EditItemWAdapter = require('./adapters/EditItemWAdapter');

var _EditItemWAdapter2 = _interopRequireDefault(_EditItemWAdapter);

var _StepsAdapter = require('./adapters/StepsAdapter');

var _StepsAdapter2 = _interopRequireDefault(_StepsAdapter);

var _StepAdapter = require('./adapters/StepAdapter');

var _StepAdapter2 = _interopRequireDefault(_StepAdapter);

var _TableAdapter = require('./adapters/TableAdapter');

var _TableAdapter2 = _interopRequireDefault(_TableAdapter);

var _TableColAdapter = require('./adapters/TableColAdapter');

var _TableColAdapter2 = _interopRequireDefault(_TableColAdapter);

var _TabsAdapter = require('./adapters/TabsAdapter');

var _TabsAdapter2 = _interopRequireDefault(_TabsAdapter);

var _TabAdapter = require('./adapters/TabAdapter');

var _TabAdapter2 = _interopRequireDefault(_TabAdapter);

var _RowAdapter = require('./adapters/RowAdapter');

var _RowAdapter2 = _interopRequireDefault(_RowAdapter);

var _ColAdapter = require('./adapters/ColAdapter');

var _ColAdapter2 = _interopRequireDefault(_ColAdapter);

var _PanelAdapter = require('./adapters/PanelAdapter');

var _PanelAdapter2 = _interopRequireDefault(_PanelAdapter);

var _SelectAdapter = require('./adapters/forminputs/SelectAdapter');

var _SelectAdapter2 = _interopRequireDefault(_SelectAdapter);

var _SwitchAdapter = require('./adapters/forminputs/SwitchAdapter');

var _SwitchAdapter2 = _interopRequireDefault(_SwitchAdapter);

var _ButtonViewAdapter = require('./viewadapters/ButtonViewAdapter');

var _ButtonViewAdapter2 = _interopRequireDefault(_ButtonViewAdapter);

var _FormItemwViewAdapter = require('./viewadapters/FormItemwViewAdapter');

var _FormItemwViewAdapter2 = _interopRequireDefault(_FormItemwViewAdapter);

var _TableColViewAdapter = require('./viewadapters/TableColViewAdapter');

var _TableColViewAdapter2 = _interopRequireDefault(_TableColViewAdapter);

var _SplitPaneViewAdapter = require('./viewadapters/SplitPaneViewAdapter');

var _SplitPaneViewAdapter2 = _interopRequireDefault(_SplitPaneViewAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiTypeDef = _Defines2.default.UiTypeDef,
    UiTitleDef = _Defines2.default.UiTitleDef,
    UiIconDef = _Defines2.default.UiIconDef,
    UiDefaultDef = _Defines2.default.UiDefaultDef;

var uiObjects = {};
for (var key in UiTypeDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uitype = UiTypeDef[key];
}
for (var _key in UiTitleDef) {
    uiObjects[_key] = uiObjects[_key] || {};
    uiObjects[_key].uititile = UiTitleDef[_key];
}
for (var _key2 in UiIconDef) {
    uiObjects[_key2] = uiObjects[_key2] || {};
    uiObjects[_key2].uiicon = UiIconDef[_key2];
}
for (var _key3 in UiDefaultDef) {
    uiObjects[_key3] = uiObjects[_key3] || {};
    uiObjects[_key3].uidefault = UiDefaultDef[_key3];
}
var uiDefines = new _indexDeps.UiDefines();
for (var _key4 in uiObjects) {
    var obj = uiObjects[_key4];
    uiDefines.add(_key4, obj.uitype, obj.uititile, obj.uiicon, obj.uidefault);
}
module.exports = {
    //组件定义
    UiDefines: uiDefines,
    //属性适配
    PropAdapters: [new _AccordionAdapter2.default(UiTypeDef.accordion), new _AccordionsAdapter2.default(UiTypeDef.accordions), new _BpmSubmitwAdapter2.default(UiTypeDef.bpmsubmitw), new _BpmApprovewAdapter2.default(UiTypeDef.bpmapprovew), new _BreadcrumbAdapter2.default(UiTypeDef.breadcrumb), new _BreadcrumbItemAdapter2.default(UiTypeDef.breadcrumbitem), new _ButtonAdapter2.default(UiTypeDef.button), new _AttachMgrwAdapter2.default(UiTypeDef.attachmgrw), new _PageAdapter2.default(UiTypeDef.page), new _CaptionAdapter2.default(UiTypeDef.caption), new _FormwAdapter2.default(UiTypeDef.formw), new _FormItemwAdapter2.default(UiTypeDef.formitemw), new _OptionAdapter2.default(UiTypeDef.option), new _ButtonSelectAdapter2.default(UiTypeDef.buttonselect), new _ButtonItemAdapter2.default(UiTypeDef.buttonitem), new _EditTablewAdapter2.default(UiTypeDef.edittablew), new _EditItemWAdapter2.default(UiTypeDef.edititemw), new _StepsAdapter2.default(UiTypeDef.steps), new _StepAdapter2.default(UiTypeDef.step), new _TableAdapter2.default(UiTypeDef.table), new _TableAdapter2.default(UiTypeDef.tablew), new _TableColAdapter2.default(UiTypeDef.tablecol), new _TabsAdapter2.default(UiTypeDef.tabs), new _TabAdapter2.default(UiTypeDef.tab), new _RowAdapter2.default(UiTypeDef.row), new _ColAdapter2.default(UiTypeDef.col), new _PanelAdapter2.default(UiTypeDef.panel), new _SearchConditionAdapter2.default(UiTypeDef.searchcondition), new _SearchItemAdapter2.default(UiTypeDef.searchitem), new _SearchSchemeAdapter2.default(UiTypeDef.searchscheme), new _SelectAdapter2.default(UiTypeDef.select), new _AutoSelectAdapter2.default(UiTypeDef.autoselect), new _EnumSelectAdapter2.default(UiTypeDef.enumselect), new _ScrollbarAdapter2.default(UiTypeDef.scrollbar), new _TreeAdapter2.default(UiTypeDef.tree), new _TreeNodeAdapter2.default(UiTypeDef.treenode), new _DivideAdapter2.default(UiTypeDef.divide), new _ModalAdapter2.default(UiTypeDef.modal), new _StepsNavAdapter2.default(UiTypeDef.stepsnav), new _StepsNavItemAdapter2.default(UiTypeDef.stepsnavitem), new _EditorAdapter2.default(UiTypeDef.editor), new _TagItemAdapter2.default(UiTypeDef.tagitem), new _TagGroupAdapter2.default(UiTypeDef.taggroup), new _ToolbarAdapter2.default(UiTypeDef.toolbar), new _InputButtonAdapter2.default(UiTypeDef.inputbutton), new _CascaderAdapter2.default(UiTypeDef.cascader), new _AttachuploadAdapter2.default(UiTypeDef.attachupload), new _PrintButtonAdapter2.default(UiTypeDef.printbutton), new _RadioAdapter2.default(UiTypeDef.radio), new _RadioGroupAdapter2.default(UiTypeDef.radiogroup), new _CheckboxAdapter2.default(UiTypeDef.checkbox), new _CheckboxGroupAdapter2.default(UiTypeDef.checkboxgroup), new _NumberAdapter2.default(UiTypeDef.inputnumber), new _DateAdapter2.default(UiTypeDef.datepicker), new _TimeAdapter2.default(UiTypeDef.timepicker), new _RangePickerAdapter2.default(UiTypeDef.rangepicker), new _ImageUploadAdapter2.default(UiTypeDef.imageupload), new _InputAdapter2.default(UiTypeDef.input), new _InputMapAdapter2.default(UiTypeDef.inputmap), new _ButtonReferAdapter2.default(UiTypeDef.buttonrefer), new _InputReferAdapter2.default(UiTypeDef.inputrefer), new _SwitchAdapter2.default(UiTypeDef.switch), new _TextareaAdapter2.default(UiTypeDef.textarea), new _TextAdapter2.default(UiTypeDef.text), new _IframeAdapter2.default(UiTypeDef.iframe), new _SplitPaneAdapter2.default(UiTypeDef.splitpane), new _FilterAreaAdapter2.default(UiTypeDef.filterarea), new _EChartsAdapter2.default(UiTypeDef.chartw),

    //---------------内置模板-------------------begin
    new _PageAdapter2.default(UiTypeDef.CPListPage), new _TableAdapter2.default(UiTypeDef.CPListTable), new _PageAdapter2.default(UiTypeDef.CPCardPage), new _CPCardTitleAdapter2.default(UiTypeDef.CPCardTitle), new _CPIconButtonAdapter2.default(UiTypeDef.CPIconButton), new _CPDropdownButtonAdapter2.default(UiTypeDef.CPDropdownButton), new _CPGoBackAdapter2.default(UiTypeDef.CPGoBack), new _SearchConditionAdapter2.default(UiTypeDef.CPSearchBar), new _CPAuditInfoAdapter2.default(UiTypeDef.CPAuditInfo), new _BpmSubmitwAdapter2.default(UiTypeDef.CPBpmSubmit), new _BpmApprovewAdapter2.default(UiTypeDef.CPBpmApprove), new _AttachMgrwAdapter2.default(UiTypeDef.CPAttachMgr), new _PrintButtonAdapter2.default(UiTypeDef.CPPrintButton), new _CPPluginMgrAdapter2.default(UiTypeDef.CPPluginMgr), new _CPFilterBarAdapter2.default(UiTypeDef.CPFilterBar), new _CPFilterRowAdapter2.default(UiTypeDef.CPFilterRow), new _CPFRFieldAdapter2.default(UiTypeDef.CPFRField)
    //---------------内置模板----------------------end
    ],
    //事件适配
    EventAdapters: [new _indexDeps.EventAdapter(UiTypeDef.button)],
    //视图适配
    ViewAdapters: [new _ButtonViewAdapter2.default(UiTypeDef.button), new _FormItemwViewAdapter2.default(UiTypeDef.formitemw), new _TableColViewAdapter2.default(UiTypeDef.tablecol), new _TableColViewAdapter2.default(UiTypeDef.edititemw), new _SplitPaneViewAdapter2.default(UiTypeDef.splitpane)]
};