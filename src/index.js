import {UiLibrary, EventAdapter} from './index-deps';
import Defines from './Defines';
import AccordionsAdapter from './adapters/AccordionsAdapter';
import AccordionAdapter from './adapters/AccordionAdapter';
import AttachMgrwAdapter from './adapters/forminputs/AttachMgrwAdapter';
import FormwAdapter from "./adapters/FormwAdapter";
import SearchConditionAdapter from "./adapters/SearchConditionAdapter";
import SearchItemAdapter from "./adapters/SearchItemAdapter";
import SearchSchemeAdapter from "./adapters/SearchSchemeAdapter";
import AutoSelectAdapter from "./adapters/forminputs/AutoSelectAdapter";
import EnumSelectAdapter from "./adapters/forminputs/EnumSelectAdapter";
import ScrollbarAdapter from "./adapters/ScrollbarAdapter";
import TreeAdapter from "./adapters/TreeAdapter";
import TreeNodeAdapter from "./adapters/TreeNodeAdapter";
import DivideAdapter from "./adapters/DivideAdapter";
import ModalAdapter from "./adapters/ModalAdapter";
import StepsNavAdapter from "./adapters/StepsNavAdapter";
import StepsNavItemAdapter from "./adapters/StepsNavItemAdapter";
import EditorAdapter from "./adapters/forminputs/EditorAdapter";
import TagItemAdapter from "./adapters/TagItemAdapter";
import TagGroupAdapter from "./adapters/TagGroupAdapter";
import ToolbarAdapter from "./adapters/ToolbarAdapter";
import InputButtonAdapter from "./adapters/forminputs/InputButtonAdapter";
import CascaderAdapter from "./adapters/forminputs/CascaderAdapter";
import AttachuploadAdapter from "./adapters/forminputs/AttachuploadAdapter";
import PrintButtonAdapter from "./adapters/PrintButtonAdapter";
import RadioAdapter from "./adapters/forminputs/RadioAdapter";
import RadioGroupAdapter from "./adapters/forminputs/RadioGroupAdapter";
import CheckboxAdapter from "./adapters/forminputs/CheckboxAdapter";
import CheckboxGroupAdapter from "./adapters/forminputs/CheckboxGroupAdapter";
import NumberAdapter from "./adapters/forminputs/NumberAdapter";
import DateAdapter from "./adapters/forminputs/DateAdapter";
import TimeAdapter from "./adapters/forminputs/TimeAdapter";
import RangePickerAdapter from "./adapters/forminputs/RangePickerAdapter";
import ImageUploadAdapter from "./adapters/forminputs/ImageUploadAdapter";
import InputAdapter from "./adapters/forminputs/InputAdapter";
import InputMapAdapter from "./adapters/forminputs/InputMapAdapter";
import ButtonReferAdapter from "./adapters/forminputs/ButtonReferAdapter";
import InputReferAdapter from "./adapters/forminputs/InputReferAdapter";
import TextareaAdapter from "./adapters/forminputs/TextareaAdapter";
import TextAdapter from "./adapters/forminputs/TextAdapter";
import IframeAdapter from "./adapters/IframeAdapter";
import SplitPaneAdapter from "./adapters/SplitPaneAdapter";
import FilterAreaAdapter from "./adapters/FilterAreaAdapter";
import EChartsAdapter from "./adapters/EChartsAdapter";
import CPCardTitleAdapter from "./adapters/compact/CPCardTitleAdapter";
import BpmApprovewAdapter from "./adapters/BpmApprovewAdapter";
import BpmSubmitwAdapter from "./adapters/BpmSubmitwAdapter";
import CPIconButtonAdapter from "./adapters/compact/CPIconButtonAdapter";
import CPDropdownButtonAdapter from "./adapters/compact/CPDropdownButtonAdapter";
import CPGoBackAdapter from "./adapters/compact/CPGoBackAdapter";
import CPAuditInfoAdapter from "./adapters/compact/CPAuditInfoAdapter";
import CPPluginMgrAdapter from "./adapters/compact/CPPluginMgrAdapter";
import CPFilterBarAdapter from "./adapters/compact/CPFilterBarAdapter";
import CPFilterRowAdapter from "./adapters/compact/CPFilterRowAdapter";
import CPFRFieldAdapter from "./adapters/compact/CPFRFieldAdapter";
import BreadcrumbAdapter from "./adapters/BreadcrumbAdapter";
import BreadcrumbItemAdapter from "./adapters/BreadcrumbItemAdapter";
import ButtonAdapter from "./adapters/ButtonAdapter";
import PageAdapter from "./adapters/PageAdapter";
import CaptionAdapter from "./adapters/CaptionAdapter";
import FormItemwAdapter from "./adapters/FormItemwAdapter";
import OptionAdapter from "./adapters/forminputs/OptionAdapter";
import ButtonSelectAdapter from "./adapters/ButtonSelectAdapter";
import ButtonItemAdapter from "./adapters/ButtonItemAdapter";
import EditTablewAdapter from "./adapters/EditTablewAdapter";
import EditItemWAdapter from "./adapters/EditItemWAdapter";
import StepsAdapter from "./adapters/StepsAdapter";
import StepAdapter from "./adapters/StepAdapter";
import TableAdapter from "./adapters/TableAdapter";
import TableColAdapter from "./adapters/TableColAdapter";
import TabsAdapter from "./adapters/TabsAdapter";
import TabAdapter from "./adapters/TabAdapter";
import RowAdapter from "./adapters/RowAdapter";
import ColAdapter from "./adapters/ColAdapter";
import PanelAdapter from "./adapters/PanelAdapter";
import SelectAdapter from "./adapters/forminputs/SelectAdapter";
import SwitchAdapter from "./adapters/forminputs/SwitchAdapter";
import ButtonViewAdapter from "./viewadapters/ButtonViewAdapter";
import FormItemwViewAdapter from "./viewadapters/FormItemwViewAdapter";
import TableColViewAdapter from "./viewadapters/TableColViewAdapter";
import SplitPaneViewAdapter from "./viewadapters/SplitPaneViewAdapter";

const {UiTypeDef, UiTitleDef, UiIconDef, UiDefaultDef} = Defines;
const uiObjects = {};
for (let key in UiTypeDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uitype = UiTypeDef[key]
}
for (let key in UiTitleDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uititile = UiTitleDef[key]
}
for (let key in UiIconDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uiicon = UiIconDef[key]
}
for (let key in UiDefaultDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uidefault = UiDefaultDef[key]
}
const myLibrary = new UiLibrary();
//----------------组件定义------------------
for (let key in uiObjects) {
    let obj = uiObjects[key];
    myLibrary.addDefine(key, obj.uitype, obj.uititile, obj.uiicon, obj.uidefault);
}
//----------------属性适配--------------------
myLibrary.addPropAdapter(UiTypeDef.accordion, AccordionAdapter);
myLibrary.addPropAdapter(UiTypeDef.accordions, AccordionsAdapter);
myLibrary.addPropAdapter(UiTypeDef.bpmsubmitw, BpmSubmitwAdapter);
myLibrary.addPropAdapter(UiTypeDef.bpmapprovew, BpmApprovewAdapter);
myLibrary.addPropAdapter(UiTypeDef.breadcrumb, BreadcrumbAdapter);
myLibrary.addPropAdapter(UiTypeDef.breadcrumbitem, BreadcrumbItemAdapter);
myLibrary.addPropAdapter(UiTypeDef.button, ButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.attachmgrw, AttachMgrwAdapter);
myLibrary.addPropAdapter(UiTypeDef.page, PageAdapter);
myLibrary.addPropAdapter(UiTypeDef.caption, CaptionAdapter);
myLibrary.addPropAdapter(UiTypeDef.formw, FormwAdapter);
myLibrary.addPropAdapter(UiTypeDef.formitemw, FormItemwAdapter);
myLibrary.addPropAdapter(UiTypeDef.option, OptionAdapter);
myLibrary.addPropAdapter(UiTypeDef.buttonselect, ButtonSelectAdapter);
myLibrary.addPropAdapter(UiTypeDef.buttonitem, ButtonItemAdapter);
myLibrary.addPropAdapter(UiTypeDef.edittablew, EditTablewAdapter);
myLibrary.addPropAdapter(UiTypeDef.edititemw, EditItemWAdapter);
myLibrary.addPropAdapter(UiTypeDef.steps, StepsAdapter);
myLibrary.addPropAdapter(UiTypeDef.step, StepAdapter);
myLibrary.addPropAdapter(UiTypeDef.table, TableAdapter);
myLibrary.addPropAdapter(UiTypeDef.tablew, TableAdapter);
myLibrary.addPropAdapter(UiTypeDef.tablecol, TableColAdapter);
myLibrary.addPropAdapter(UiTypeDef.tabs, TabsAdapter);
myLibrary.addPropAdapter(UiTypeDef.tab, TabAdapter);
myLibrary.addPropAdapter(UiTypeDef.row, RowAdapter);
myLibrary.addPropAdapter(UiTypeDef.col, ColAdapter);
myLibrary.addPropAdapter(UiTypeDef.panel, PanelAdapter);
myLibrary.addPropAdapter(UiTypeDef.searchcondition, SearchConditionAdapter);
myLibrary.addPropAdapter(UiTypeDef.searchitem, SearchItemAdapter);
myLibrary.addPropAdapter(UiTypeDef.searchscheme, SearchSchemeAdapter);
myLibrary.addPropAdapter(UiTypeDef.select, SelectAdapter);
myLibrary.addPropAdapter(UiTypeDef.autoselect, AutoSelectAdapter);
myLibrary.addPropAdapter(UiTypeDef.enumselect, EnumSelectAdapter);
myLibrary.addPropAdapter(UiTypeDef.scrollbar, ScrollbarAdapter);
myLibrary.addPropAdapter(UiTypeDef.tree, TreeAdapter);
myLibrary.addPropAdapter(UiTypeDef.treenode, TreeNodeAdapter);
myLibrary.addPropAdapter(UiTypeDef.divide, DivideAdapter);
myLibrary.addPropAdapter(UiTypeDef.modal, ModalAdapter);
myLibrary.addPropAdapter(UiTypeDef.stepsnav, StepsNavAdapter);
myLibrary.addPropAdapter(UiTypeDef.stepsnavitem, StepsNavItemAdapter);
myLibrary.addPropAdapter(UiTypeDef.editor, EditorAdapter);
myLibrary.addPropAdapter(UiTypeDef.tagitem, TagItemAdapter);
myLibrary.addPropAdapter(UiTypeDef.taggroup, TagGroupAdapter);
myLibrary.addPropAdapter(UiTypeDef.toolbar, ToolbarAdapter);
myLibrary.addPropAdapter(UiTypeDef.inputbutton, InputButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.cascader, CascaderAdapter);

myLibrary.addPropAdapter(UiTypeDef.attachupload, AttachuploadAdapter);
myLibrary.addPropAdapter(UiTypeDef.printbutton, PrintButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.radio, RadioAdapter);
myLibrary.addPropAdapter(UiTypeDef.radiogroup, RadioGroupAdapter);
myLibrary.addPropAdapter(UiTypeDef.checkbox, CheckboxAdapter);
myLibrary.addPropAdapter(UiTypeDef.checkboxgroup, CheckboxGroupAdapter);
myLibrary.addPropAdapter(UiTypeDef.inputnumber, NumberAdapter);
myLibrary.addPropAdapter(UiTypeDef.datepicker, DateAdapter);
myLibrary.addPropAdapter(UiTypeDef.timepicker, TimeAdapter);
myLibrary.addPropAdapter(UiTypeDef.rangepicker, RangePickerAdapter);
myLibrary.addPropAdapter(UiTypeDef.imageupload, ImageUploadAdapter);
myLibrary.addPropAdapter(UiTypeDef.input, InputAdapter);
myLibrary.addPropAdapter(UiTypeDef.inputmap, InputMapAdapter);
myLibrary.addPropAdapter(UiTypeDef.buttonrefer, ButtonReferAdapter);
myLibrary.addPropAdapter(UiTypeDef.inputrefer, InputReferAdapter);
myLibrary.addPropAdapter(UiTypeDef.switch, SwitchAdapter);
myLibrary.addPropAdapter(UiTypeDef.textarea, TextareaAdapter);
myLibrary.addPropAdapter(UiTypeDef.text, TextAdapter);
myLibrary.addPropAdapter(UiTypeDef.iframe, IframeAdapter);
myLibrary.addPropAdapter(UiTypeDef.splitpane, SplitPaneAdapter);
myLibrary.addPropAdapter(UiTypeDef.filterarea, FilterAreaAdapter);
myLibrary.addPropAdapter(UiTypeDef.chartw, EChartsAdapter);

//---------------内置模板-------------------begin
myLibrary.addPropAdapter(UiTypeDef.CPListPage, PageAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPListTable, TableAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPCardPage, PageAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPCardTitle, CPCardTitleAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPIconButton, CPIconButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPDropdownButton, CPDropdownButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPGoBack, CPGoBackAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPSearchBar, SearchConditionAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPAuditInfo, CPAuditInfoAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPBpmSubmit, BpmSubmitwAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPBpmApprove, BpmApprovewAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPAttachMgr, AttachMgrwAdapter);

myLibrary.addPropAdapter(UiTypeDef.CPPrintButton, PrintButtonAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPPluginMgr, CPPluginMgrAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPFilterBar, CPFilterBarAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPFilterRow, CPFilterRowAdapter);
myLibrary.addPropAdapter(UiTypeDef.CPFRField, CPFRFieldAdapter);
//---------------内置模板----------------------end
//------------事件适配---------------
myLibrary.addEventAdapter(UiTypeDef.button, EventAdapter);
//------------视图适配----------------
myLibrary.addViewAdapter(UiTypeDef.button, ButtonViewAdapter);
myLibrary.addViewAdapter(UiTypeDef.formitemw, FormItemwViewAdapter);
myLibrary.addViewAdapter(UiTypeDef.tablecol, TableColViewAdapter);
myLibrary.addViewAdapter(UiTypeDef.edititemw, TableColViewAdapter);
myLibrary.addViewAdapter(UiTypeDef.splitpane, SplitPaneViewAdapter);
export default myLibrary;