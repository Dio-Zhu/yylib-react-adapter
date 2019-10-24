import {UiObjects,UiTypeDef} from './Defines';
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
    //
    onViewMenus(options){

        let menus = [
            {
                uititle:"平台-常规",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['button','buttonselect','buttonrefer','breadcrumb','tree','caption'])
            },
            {
                uititle:"平台-布局",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['accordions','tabs','row','splitpane','panel','modal','area','scrollbar','toolbar','divide'])
            },
            {
                uititle:"平台-表格",
                uiicon: 'tag',
                children:generateSubItems(UiObjects,['table','tablew','edittablew'])
            },
            {
                uititle:"平台-表单",
                uiicon: 'tag',
                children:generateSubItems(UiObjects,['formw','input','select','datepicker','timepicker','rangepicker','inputnumber','currency','inputrefer','switch','textarea','taggroup',
                    'enumselect','inputbutton','cascader','attachupload','imageupload','radiogroup','checkboxgroup','inputmap','editor','attachmgrw','text','autoselect'])
            },
            {
                uititle:"平台-业务",
                uiicon: 'tag',
                children:generateSubItems(UiObjects,['searchcondition','searchscheme','bpmsubmitw','bpmapprovew','attachmgrw','printbutton'])
            },
            {
                uititle:"平台-特殊",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['chartw','filterarea','steps','stepsnav','iframe'])
            },

            {
                uititle: "建造-列表",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['CPListHeader', 'CPListToolbar', 'CPListTable'])
            },
            {
                uititle: "建造-卡片",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['CPCardHeader', 'CPCardTitle', 'CPCardBody'])
            },
            {
                uititle: "建造-定制",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['CPPluginMgr','CPGoBack','CPSearchBar','CPIconButton', 'CPDropdownButton'
                    ,'CPAttachMgr','CPBpmSubmit','CPBpmApprove','CPPrintButton','CPAuditInfo','CPFilterBar'])
            },
            {
                uititle: "建造-产品",
                uiicon: 'tag',
                children: generateSubItems(UiObjects,['IjzHeader', 'IjzFilter', 'IjzListView'])
            }

        ]
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
        let subset = {};
        subset[UiTypeDef.page] = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
            , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
            , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr'].concat(uniqueParentItems));
        subset[UiTypeDef.toolbar] = UiSubUtils.include(UiTypeDef, ['plugin', 'divide', 'row', 'button', 'buttonselect', 'buttonrefer', 'input', 'caption', 'inputbutton', 'datepicker', 'inputnumber', 'currency'
            , 'switch', 'referinput', 'radiogroup', 'checkboxgroup', 'inputrefer'
            , 'bpmsubmitw', 'bpmapprovew', 'printbutton', 'searchcondition', 'attachmgrw']);
        subset[UiTypeDef.area] = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
            , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
            , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr']);
        subset[UiTypeDef.table] = [UiTypeDef.tablecol];
        subset[UiTypeDef.button] = [];
        subset[UiTypeDef.buttonrefer] = [];
        subset[UiTypeDef.caption] = [];
        subset[UiTypeDef.buttonselect] = [UiTypeDef.buttonitem];
        subset[UiTypeDef.accordions] = [UiTypeDef.accordion];
        subset[UiTypeDef.accordion] = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
        subset[UiTypeDef.modal] = UiSubUtils.exclude(UiTypeDef, ['CPListHeader', 'CPListToolbar', 'CPListTable', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPIconButton', 'CPDropdownButton', 'CPGoBack', 'CPSearchBar'
            , 'CPBpmSubmit', 'CPBpmApprove', 'CPAttachMgr'
            , 'CPAuditInfo', 'CPPrintButton', 'CPPluginMgr'].concat(uniqueParentItems));
        subset[UiTypeDef.tabs] = [UiTypeDef.tab];
        subset[UiTypeDef.tab] = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
        subset[UiTypeDef.formw] = UiSubUtils.include(UiTypeDef, ['plugin', 'button', 'buttonrefer', 'enumselect', 'inputrefer', 'textarea', 'datepicker', 'timepicker', 'rangepicker', 'input', 'select',
            'inputnumber', 'currency', 'referinput', 'switch', 'searchcondition', 'cascader', 'formitemw', 'inputbutton',
            'attachupload', 'imageupload', 'radiogroup', 'checkboxgroup', 'inputmap', 'editor', 'attachmgrw', 'autoselect', 'text']);
        subset[UiTypeDef.input] = [];
        subset[UiTypeDef.datepicker] = [];
        subset[UiTypeDef.inputnumber] = [];
        subset[UiTypeDef.inputrefer] = [];
        subset[UiTypeDef.switch] = [];
        subset[UiTypeDef.breadcrumb] = [UiTypeDef.breadcrumbitem];
        subset[UiTypeDef.edittablew] = [UiTypeDef.edititemw];
        subset[UiTypeDef.row] = [UiTypeDef.col];
        subset[UiTypeDef.col] = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
        subset[UiTypeDef.panel] = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
        subset[UiTypeDef.searchcondition] = [UiTypeDef.searchitem];
        subset[UiTypeDef.tree] = [UiTypeDef.treenode];
        subset[UiTypeDef.divide] = [];
        subset[UiTypeDef.stepsnav] = [UiTypeDef.stepsnavitem];
        subset[UiTypeDef.scrollbar] = UiSubUtils.exclude(UiTypeDef, uniqueParentItems);
        subset[UiTypeDef.attachmgrw] = [];
        subset[UiTypeDef.steps] = [UiTypeDef.step];
        subset[UiTypeDef.tablew] = [UiTypeDef.tablecol];
        subset[UiTypeDef.splitpane] = UiSubUtils.include(UiTypeDef, ['formw', 'accordions', 'tabs', 'row', 'panel', 'area', 'scrollbar', 'toolbar', 'splitpane', 'table', 'tablew', 'edittablew', 'button', 'buttonrefer', 'buttonselect', 'breadcrumb', 'tree']);
        subset[UiTypeDef.attachupload] = [];
        subset[UiTypeDef.buttonitem] = [];
        subset[UiTypeDef.imageupload] = [];
        subset[UiTypeDef.radio] = [UiTypeDef.radiogroup];
        subset[UiTypeDef.radiogroup] = [];
        subset[UiTypeDef.checkboxgroup] = [UiTypeDef.checkbox];
        subset[UiTypeDef.checkbox] = [];
        subset[UiTypeDef.inputmap] = [];
        subset[UiTypeDef.editor] = [];
        subset[UiTypeDef.autoselect] = [];
        subset[UiTypeDef.searchscheme] = [];
        subset[UiTypeDef.CPBpmSubmit] = [];
        subset[UiTypeDef.bpmapprovew] = [];
        subset[UiTypeDef.printbutton] = [];
        subset[UiTypeDef.text] = [];
        subset[UiTypeDef.textarea] = [];
        subset[UiTypeDef.taggroup] = [UiTypeDef.tagitem];
        subset[UiTypeDef.enumselect] = [];
        subset[UiTypeDef.inputbutton] = [];
        subset[UiTypeDef.cascader] = [];
        subset[UiTypeDef.timepicker] = [];
        subset[UiTypeDef.rangepicker] = [];
        subset[UiTypeDef.select] = [UiTypeDef.option];
        subset[UiTypeDef.option] = [];
        subset[UiTypeDef.tablecol] = [];
        //----------建造模板------------
        subset[UiTypeDef.CPListPage] = UiSubUtils.include(UiTypeDef, ['plugin', 'table', 'tablew', 'edittablew', 'accordions', 'tabs', 'breadcrumb', 'steps', 'row', 'splitpane', 'panel', 'area', 'scrollbar', 'toolbar', 'modal', 'filterarea', 'chartw', 'CPListHeader', 'CPListToolbar', 'CPListTable', 'CPPluginMgr', 'CPFilterBar']);
        subset[UiTypeDef.CPListHeader] = UiSubUtils.include(UiTypeDef, ['plugin', 'button', 'buttonrefer', 'buttonselect', 'breadcrumb', 'CPGoBack', 'CPSearchBar', 'searchscheme', 'CPIconButton']);
        subset[UiTypeDef.CPListToolbar] = subset[UiTypeDef.toolbar];

        subset[UiTypeDef.CPCardPage] = UiSubUtils.include(UiTypeDef, ['plugin', 'table', 'tablew', 'edittablew', 'accordions', 'tabs', 'row', 'splitpane', 'breadcrumb', 'steps', 'panel', 'area', 'scrollbar', 'toolbar', 'modal', 'stepsnav', 'CPCardHeader', 'CPCardTitle', 'CPCardBody', 'CPPluginMgr']);
        subset[UiTypeDef.CPCardHeader] = UiSubUtils.include(UiTypeDef, ['plugin', 'button', 'buttonrefer', 'buttonselect', 'CPGoBack', 'CPIconButton', 'CPDropdownButton', 'CPBpmApprove', 'CPBpmSubmit', 'CPAttachMgr', 'CPPrintButton']);
        return tplNode?subset[tplNode.uitype]:null;
    }
}