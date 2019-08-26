import {UiObjects} from './Defines';
import {GlobalAdapter} from './index-deps';
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
}