import {UiObjects,UiTypeDef} from './MyUiDefines';
import {GlobalAdapter} from './index-deps';
import UiSubUtils from './UiSubUtils';
/**
 * 生成子菜单项
 * 产出格式:{
 *  uitype:''
 *  uititle:''
 *  uiicon:''
 *  uidefault:{}
 * }
 */
function generateSubItems(uiObjects,keys){
    let items = [];
    for(let idx in keys){
        let key = keys[idx];
        let itemObj =  uiObjects[key];
        if(itemObj){
            let item = {};
            item.uiicon = itemObj.uiicon;
            item.uitype = itemObj.uitype;
            item.uititle = itemObj.uititle;
            item.uidefault = itemObj.uidefault;
            items.push(item);
        }
    }
    return items;
}
export default class MyGlobalAdapter extends GlobalAdapter{
    //--------------生命周期方法--------------------
    //工具箱菜单
    onViewMenus(options){
        let menus = [
            {
                uititle:"平台-常规",
                uiicon: 'tag',
                children: [
                    UiTypeDef.button,
                    UiTypeDef.buttonselect,
                    UiTypeDef.buttonrefer,
                    UiTypeDef.breadcrumb,
                    UiTypeDef.tree,
                    UiTypeDef.caption
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"平台-布局",
                uiicon: 'tag',
                children: [
                    UiTypeDef.accordions,
                    UiTypeDef.tabs,
                    UiTypeDef.row,
                    UiTypeDef.splitpane,
                    UiTypeDef.panel,
                    UiTypeDef.modal,
                    UiTypeDef.area,
                    UiTypeDef.scrollbar,
                    UiTypeDef.toolbar,
                    UiTypeDef.divide
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"平台-表格",
                uiicon: 'tag',
                children: [
                    UiTypeDef.table,
                    UiTypeDef.tablew,
                    UiTypeDef.edittablew
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"平台-表单",
                uiicon: 'tag',
                children: [
                    UiTypeDef.formw,
                    UiTypeDef.input,
                    UiTypeDef.select,
                    UiTypeDef.datepicker,
                    UiTypeDef.timepicker,
                    UiTypeDef.rangepicker,
                    UiTypeDef.inputnumber,
                    UiTypeDef.currency,
                    UiTypeDef.inputrefer,
                    UiTypeDef.switch,
                    UiTypeDef.textarea,
                    UiTypeDef.taggroup,
                    UiTypeDef.enumselect,
                    UiTypeDef.inputbutton,
                    UiTypeDef.cascader,
                    UiTypeDef.attachupload,
                    UiTypeDef.imageupload,
                    UiTypeDef.radiogroup,
                    UiTypeDef.checkboxgroup,
                    UiTypeDef.inputmap,
                    UiTypeDef.editor,
                    UiTypeDef.attachmgrw,
                    UiTypeDef.text,
                    UiTypeDef.autoselect,
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"平台-业务",
                uiicon: 'tag',
                children: [
                    UiTypeDef.searchcondition,
                    UiTypeDef.searchscheme,
                    UiTypeDef.bpmsubmitw,
                    UiTypeDef.bpmapprovew,
                    UiTypeDef.attachmgrw,
                    UiTypeDef.printbutton
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"平台-特殊",
                uiicon: 'tag',
                children: [
                    UiTypeDef.plugin,
                    UiTypeDef.chartw,
                    UiTypeDef.filterarea,
                    UiTypeDef.steps,
                    UiTypeDef.stepsnav,
                    UiTypeDef.iframe
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"建造-列表",
                uiicon: 'tag',
                children: [
                    UiTypeDef.CPListHeader,
                    UiTypeDef.CPListToolbar,
                    UiTypeDef.CPListTable
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"建造-卡片",
                uiicon: 'tag',
                children: [
                    UiTypeDef.CPCardHeader,
                    UiTypeDef.CPCardTitle,
                    UiTypeDef.CPCardBody
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"建造-定制",
                uiicon: 'tag',
                children: [
                    UiTypeDef.CPPluginMgr,
                    UiTypeDef.CPGoBack,
                    UiTypeDef.CPSearchBar,
                    UiTypeDef.CPIconButton,
                    UiTypeDef.CPDropdownButton,
                    UiTypeDef.CPAttachMgr,
                    UiTypeDef.CPBpmSubmit,
                    UiTypeDef.CPBpmApprove,
                    UiTypeDef.CPPrintButton,
                    UiTypeDef.CPAuditInfo,
                    UiTypeDef.CPFilterBar
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            },
            {
                uititle:"建造-产品",
                uiicon: 'tag',
                children: [
                    UiTypeDef.IjzHeader,
                    UiTypeDef.IjzFilter,
                    UiTypeDef.IjzListView
                ].map((uitype)=>{
                    return UiObjects.getByUiType(uitype);
                })
            }
        ];
        return menus;
    }

    /**
     * 获取全部组件项与可用子组件的关系
     * @param options
     */
    onUiSubset(options){
        let {tplNode} = options;
        // 只有唯一父级的子级
        let uniqueParentItems = ['option', 'tablecol', 'buttonitem', 'accordion', 'tab', 'tagitem', 'breadcrumbitem', 'edititemw',
            'col', 'searchitem', 'treenode', 'stepsnavitem', 'radio', 'checkbox', 'step'];
        let uiSubSet = [];
        switch (tplNode && tplNode.uitype) {
            case UiTypeDef.page:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
                , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
                , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr'].concat(uniqueParentItems));
                break;
            case UiTypeDef.toolbar:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.divide, UiTypeDef.row, UiTypeDef.button, UiTypeDef.buttonselect, UiTypeDef.buttonrefer
                    , UiTypeDef.input, UiTypeDef.caption, UiTypeDef.inputbutton, UiTypeDef.datepicker, UiTypeDef.inputnumber, UiTypeDef.currency
                    , UiTypeDef.switch, UiTypeDef.referinput, UiTypeDef.radiogroup, UiTypeDef.checkboxgroup, UiTypeDef.inputrefer
                    , UiTypeDef.bpmsubmitw, UiTypeDef.bpmapprovew, UiTypeDef.printbutton, UiTypeDef.searchcondition, UiTypeDef.attachmgrw];
                break;
            case UiTypeDef.area:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
                    , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
                    , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr']);
                break;
            case UiTypeDef.table:
                uiSubSet = [UiTypeDef.tablecol];
                break;
            case UiTypeDef.buttonselect:
                uiSubSet = [UiTypeDef.buttonitem];
                break;
            case UiTypeDef.accordions:
                uiSubSet = [UiTypeDef.accordion];
                break;
            case UiTypeDef.accordion:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
                break;
            case UiTypeDef.modal:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
                    , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
                    , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr'].concat(uniqueParentItems));
                break;
            case UiTypeDef.tabs:
                uiSubSet = [UiTypeDef.tab];
                break;
            case UiTypeDef.tab:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
                break;
            case UiTypeDef.formw:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.button, UiTypeDef.buttonrefer, UiTypeDef.enumselect, UiTypeDef.inputrefer,
                    UiTypeDef.textarea, UiTypeDef.datepicker, UiTypeDef.timepicker, UiTypeDef.rangepicker, UiTypeDef.input, UiTypeDef.select,
                    UiTypeDef.inputnumber, UiTypeDef.currency, UiTypeDef.referinput, UiTypeDef.switch, UiTypeDef.searchcondition, UiTypeDef.cascader,
                    UiTypeDef.formitemw, UiTypeDef.inputbutton,UiTypeDef.attachupload, UiTypeDef.imageupload, UiTypeDef.radiogroup, UiTypeDef.checkboxgroup,
                    UiTypeDef.inputmap, UiTypeDef.editor, UiTypeDef.attachmgrw, UiTypeDef.autoselect, UiTypeDef.text
                ];
                break;
            case UiTypeDef.breadcrumb:
                uiSubSet = [UiTypeDef.breadcrumbitem];
                break;
            case UiTypeDef.edittablew:
                uiSubSet = [UiTypeDef.edititemw];
                break;
            case UiTypeDef.row:
                uiSubSet = [UiTypeDef.col];
                break;
            case UiTypeDef.col:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
                break;
            case UiTypeDef.panel:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
                break;
            case UiTypeDef.searchcondition:
                uiSubSet = [UiTypeDef.searchitem];
                break;
            case UiTypeDef.tree:
                uiSubSet = [UiTypeDef.treenode];
                break;
            case UiTypeDef.stepsnav:
                uiSubSet = [UiTypeDef.stepsnavitem];
                break;
            case UiTypeDef.scrollbar:
                uiSubSet = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
                break;
            case UiTypeDef.steps:
                uiSubSet = [UiTypeDef.step];
                break;
            case UiTypeDef.tablew:
                uiSubSet = [UiTypeDef.tablecol];
                break;
            case UiTypeDef.splitpane:
                uiSubSet = [
                    UiTypeDef.formw, UiTypeDef.accordions, UiTypeDef.tabs, UiTypeDef.row, UiTypeDef.panel, UiTypeDef.area, UiTypeDef.scrollbar,
                    UiTypeDef.toolbar, UiTypeDef.splitpane, UiTypeDef.table, UiTypeDef.tablew, UiTypeDef.edittablew,
                    UiTypeDef.button, UiTypeDef.buttonrefer, UiTypeDef.buttonselect, UiTypeDef.breadcrumb, UiTypeDef.tree
                ];
                break;
            case UiTypeDef.radio:
                uiSubSet = [UiTypeDef.radiogroup];
                break;
            case UiTypeDef.checkboxgroup:
                uiSubSet = [UiTypeDef.checkbox];
                break;
            case UiTypeDef.taggroup:
                uiSubSet = [UiTypeDef.tagitem];
                break;
            case UiTypeDef.select:
                uiSubSet = [UiTypeDef.option];
                break;
                //----------建造模板------------
            case UiTypeDef.CPListPage:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.table, UiTypeDef.tablew, UiTypeDef.edittablew, UiTypeDef.accordions,
                    UiTypeDef.tabs, UiTypeDef.breadcrumb, UiTypeDef.steps, UiTypeDef.row, UiTypeDef.splitpane, UiTypeDef.panel,
                    UiTypeDef.area, UiTypeDef.scrollbar, UiTypeDef.toolbar, UiTypeDef.modal, UiTypeDef.filterarea, UiTypeDef.chartw,
                    UiTypeDef.CPListHeader, UiTypeDef.CPListToolbar, UiTypeDef.CPListTable, UiTypeDef.CPPluginMgr, UiTypeDef.CPFilterBar
                ];
                break;
            case UiTypeDef.CPListHeader:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.button, UiTypeDef.buttonrefer, UiTypeDef.buttonselect,
                    UiTypeDef.breadcrumb, UiTypeDef.CPGoBack, UiTypeDef.CPSearchBar,
                    UiTypeDef.searchscheme, UiTypeDef.CPIconButton
                ];
                break;
            case UiTypeDef.CPListToolbar:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.divide, UiTypeDef.row, UiTypeDef.button, UiTypeDef.buttonselect,
                    UiTypeDef.buttonrefer, UiTypeDef.input, UiTypeDef.caption, UiTypeDef.inputbutton, UiTypeDef.datepicker,
                    UiTypeDef.inputnumber, UiTypeDef.currency, UiTypeDef.switch, UiTypeDef.referinput, UiTypeDef.radiogroup,
                    UiTypeDef.checkboxgroup, UiTypeDef.inputrefer, UiTypeDef.bpmsubmitw, UiTypeDef.bpmapprovew,
                    UiTypeDef.printbutton, UiTypeDef.searchcondition, UiTypeDef.attachmgrw
                ];
                break;
            case UiTypeDef.CPCardPage:
                uiSubSet = [
                    UiTypeDef.plugin, UiTypeDef.table, UiTypeDef.tablew, UiTypeDef.edittablew, UiTypeDef.accordions,
                    UiTypeDef.tabs, UiTypeDef.row, UiTypeDef.splitpane, UiTypeDef.breadcrumb, UiTypeDef.steps,
                    UiTypeDef.panel, UiTypeDef.area, UiTypeDef.scrollbar, UiTypeDef.toolbar, UiTypeDef.modal, UiTypeDef.stepsnav,
                    UiTypeDef.CPCardHeader, UiTypeDef.CPCardTitle, UiTypeDef.CPCardBody, UiTypeDef.CPPluginMgr
                ];
                break;
            case UiTypeDef.CPCardHeader:
                uiSubSet = [UiTypeDef.plugin, UiTypeDef.button, UiTypeDef.buttonrefer, UiTypeDef.buttonselect, UiTypeDef.CPGoBack, UiTypeDef.CPIconButton, UiTypeDef.CPDropdownButton, UiTypeDef.CPBpmApprove, UiTypeDef.CPBpmSubmit, UiTypeDef.CPAttachMgr, UiTypeDef.CPPrintButton];
                break;
            case UiTypeDef.radiogroup:
            case UiTypeDef.checkbox:
            case UiTypeDef.inputmap:
            case UiTypeDef.editor:
            case UiTypeDef.autoselect:
            case UiTypeDef.searchscheme:
            case UiTypeDef.CPBpmSubmit:
            case UiTypeDef.bpmapprovew:
            case UiTypeDef.printbutton:
            case UiTypeDef.text:
            case UiTypeDef.textarea:
            case UiTypeDef.option:
            case UiTypeDef.tablecol:
            case UiTypeDef.enumselect:
            case UiTypeDef.inputbutton:
            case UiTypeDef.cascader:
            case UiTypeDef.timepicker:
            case UiTypeDef.rangepicker:
            case UiTypeDef.attachupload:
            case UiTypeDef.buttonitem:
            case UiTypeDef.imageupload:
            case UiTypeDef.divide:
            case UiTypeDef.attachmgrw:
            case UiTypeDef.button:
            case UiTypeDef.buttonrefer:
            case UiTypeDef.caption:
            case UiTypeDef.input:
            case UiTypeDef.datepicker:
            case UiTypeDef.inputnumber:
            case UiTypeDef.inputrefer:
            case UiTypeDef.switch:
            case UiTypeDef.plugin:
                uiSubSet = [];
                break;
        }
        return uiSubSet;
    }

    onPageTypes(options){
        let pageTypes = [
            {
                name: '自定义页面',
                code: 'YYPage',
                isDefault:true
            }, {
                name: '建造列表页面',
                code: 'CPListPage',
            }, {
                name: '建造卡片页面',
                code: 'CPCardPage',
            }
        ]
        return pageTypes;
    }
    onDefaultPageData(options){
        let {currApp,currPage} = options;
        let pageNode = {
            uikey:currPage.code//页面编码
            ,uititle:currPage.name//页面名称
            ,uitype:currPage.pageType||'YYPage'//默认值：YYPage
        };
        return pageNode;
    }
}