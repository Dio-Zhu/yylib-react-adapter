import {UiDefines,EventAdapter} from './index-deps';
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
const {UiTypeDef,UiTitleDef,UiIconDef,UiDefaultDef} = Defines;
const uiObjects = {};
for(let key in UiTypeDef){
    uiObjects[key] = uiObjects[key]||{};
    uiObjects[key].uitype = UiTypeDef[key]
}
for(let key in UiTitleDef){
    uiObjects[key] = uiObjects[key]||{};
    uiObjects[key].uititile = UiTitleDef[key]
}
for(let key in UiIconDef){
    uiObjects[key] = uiObjects[key]||{};
    uiObjects[key].uiicon = UiIconDef[key]
}
for(let key in UiDefaultDef){
    uiObjects[key] = uiObjects[key]||{};
    uiObjects[key].uidefault = UiDefaultDef[key]
}
const uiDefines = new UiDefines();
for(let key in uiObjects){
    let obj = uiObjects[key];
    uiDefines.add(key,obj.uitype,obj.uititile,obj.uiicon,obj.uidefault);
}
module.exports = {
    //组件定义
    UiDefines:uiDefines,
    //属性适配
    PropAdapters:[
        new AccordionAdapter(UiTypeDef.accordion),
        new AccordionsAdapter(UiTypeDef.accordions),
        new BpmSubmitwAdapter(UiTypeDef.bpmsubmitw),
        new BpmApprovewAdapter(UiTypeDef.bpmapprovew),
        new BreadcrumbAdapter(UiTypeDef.breadcrumb),
        new BreadcrumbItemAdapter(UiTypeDef.breadcrumbitem),
        new ButtonAdapter(UiTypeDef.button),
        new AttachMgrwAdapter(UiTypeDef.attachmgrw),
        new PageAdapter(UiTypeDef.page),
        new CaptionAdapter(UiTypeDef.caption),
        new FormwAdapter(UiTypeDef.formw),
        new FormItemwAdapter(UiTypeDef.formitemw),
        new OptionAdapter(UiTypeDef.option),
        new ButtonSelectAdapter(UiTypeDef.buttonselect),
        new ButtonItemAdapter(UiTypeDef.buttonitem),
        new EditTablewAdapter(UiTypeDef.edittablew),
        new EditItemWAdapter(UiTypeDef.edititemw),
        new StepsAdapter(UiTypeDef.steps),
        new StepAdapter(UiTypeDef.step),
        new TableAdapter(UiTypeDef.table),
        new TableAdapter(UiTypeDef.tablew),
        new TableColAdapter(UiTypeDef.tablecol),
        new TabsAdapter(UiTypeDef.tabs),
        new TabAdapter(UiTypeDef.tab),
        new RowAdapter(UiTypeDef.row),
        new ColAdapter(UiTypeDef.col),
        new PanelAdapter(UiTypeDef.panel),
        new SearchConditionAdapter(UiTypeDef.searchcondition),
        new SearchItemAdapter(UiTypeDef.searchitem),
        new SearchSchemeAdapter(UiTypeDef.searchscheme),
        new SelectAdapter(UiTypeDef.select),
        new AutoSelectAdapter(UiTypeDef.autoselect),
        new EnumSelectAdapter(UiTypeDef.enumselect),
        new ScrollbarAdapter(UiTypeDef.scrollbar),
        new TreeAdapter(UiTypeDef.tree),
        new TreeNodeAdapter(UiTypeDef.treenode),
        new DivideAdapter(UiTypeDef.divide),
        new ModalAdapter(UiTypeDef.modal),
        new StepsNavAdapter(UiTypeDef.stepsnav),
        new StepsNavItemAdapter(UiTypeDef.stepsnavitem),
        new EditorAdapter(UiTypeDef.editor),
        new TagItemAdapter(UiTypeDef.tagitem),
        new TagGroupAdapter(UiTypeDef.taggroup),
        new ToolbarAdapter(UiTypeDef.toolbar),
        new InputButtonAdapter(UiTypeDef.inputbutton),
        new CascaderAdapter(UiTypeDef.cascader),

        new AttachuploadAdapter(UiTypeDef.attachupload),
        new PrintButtonAdapter(UiTypeDef.printbutton),
        new RadioAdapter(UiTypeDef.radio),
        new RadioGroupAdapter(UiTypeDef.radiogroup),
        new CheckboxAdapter(UiTypeDef.checkbox),
        new CheckboxGroupAdapter(UiTypeDef.checkboxgroup),
        new NumberAdapter(UiTypeDef.inputnumber),
        new DateAdapter(UiTypeDef.datepicker),
        new TimeAdapter(UiTypeDef.timepicker),
        new RangePickerAdapter(UiTypeDef.rangepicker),
        new ImageUploadAdapter(UiTypeDef.imageupload),
        new InputAdapter(UiTypeDef.input),
        new InputMapAdapter(UiTypeDef.inputmap),
        new ButtonReferAdapter(UiTypeDef.buttonrefer),
        new InputReferAdapter(UiTypeDef.inputrefer),
        new SwitchAdapter(UiTypeDef.switch),
        new TextareaAdapter(UiTypeDef.textarea),
        new TextAdapter(UiTypeDef.text),
        new IframeAdapter(UiTypeDef.iframe),
        new SplitPaneAdapter(UiTypeDef.splitpane),
        new FilterAreaAdapter(UiTypeDef.filterarea),
        new EChartsAdapter(UiTypeDef.chartw),

        //---------------内置模板-------------------begin
        new PageAdapter(UiTypeDef.CPListPage),
        new TableAdapter(UiTypeDef.CPListTable),
        new PageAdapter(UiTypeDef.CPCardPage),
        new CPCardTitleAdapter(UiTypeDef.CPCardTitle),
        new CPIconButtonAdapter(UiTypeDef.CPIconButton),
        new CPDropdownButtonAdapter(UiTypeDef.CPDropdownButton),
        new CPGoBackAdapter(UiTypeDef.CPGoBack),
        new SearchConditionAdapter(UiTypeDef.CPSearchBar),
        new CPAuditInfoAdapter(UiTypeDef.CPAuditInfo),
        new BpmSubmitwAdapter(UiTypeDef.CPBpmSubmit),
        new BpmApprovewAdapter(UiTypeDef.CPBpmApprove),
        new AttachMgrwAdapter(UiTypeDef.CPAttachMgr),

        new PrintButtonAdapter(UiTypeDef.CPPrintButton),
        new CPPluginMgrAdapter(UiTypeDef.CPPluginMgr),
        new CPFilterBarAdapter(UiTypeDef.CPFilterBar),
        new CPFilterRowAdapter(UiTypeDef.CPFilterRow),
        new CPFRFieldAdapter(UiTypeDef.CPFRField)
        //---------------内置模板----------------------end
    ],
    //事件适配
    EventAdapters:[
        new EventAdapter(UiTypeDef.button)
    ],
    //视图适配
    ViewAdapters:[
        new ButtonViewAdapter(UiTypeDef.button),
        new FormItemwViewAdapter(UiTypeDef.formitemw),
        new TableColViewAdapter(UiTypeDef.tablecol),
        new TableColViewAdapter(UiTypeDef.edititemw),
        new SplitPaneViewAdapter(UiTypeDef.splitpane)
    ]
};