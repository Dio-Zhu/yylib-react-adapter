/**
 * 基础的通用属性定义
 */
import {MetaType} from './index-deps';
import {UiTypeDef} from './MyUiDefines';
window.EnvConfig = window.EnvConfig || {};
const SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;//业务支撑服务地址
const PRODUCT_TYPE_PAGE_SIMPLE = 2;//按组织隔离的运营版设计器
module.exports = function(options){
    var {productType,tplNode,currPage} = options;
    var PropMeta = [{
        name: 'uikey',
        label: '键值',
        type: MetaType.Text,
        props: {},
        readOnly:!!(productType == PRODUCT_TYPE_PAGE_SIMPLE && currPage && currPage.isDevelopment!==1),
        defaultValue: ''
    },{
        name: 'uititle',
        label: '名称',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    if(tplNode&&tplNode.uitype == UiTypeDef.page){
        PropMeta.push({
            name: 'themeClassName',
            label: '页面风格',
            help:'主题样式皮肤风格名称',
            type: MetaType.Select,
            props: {
                options:[{text:'平台默认',value:''},{text:'公有云风格',value:'GYY'}]
            },
            defaultValue: ''
        })
    }
    PropMeta=PropMeta.concat([{
        name: 'className',
        label: '定制样式',
        help:'自定义样式规则的名称，即：css的class名称',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    },{
        name: 'specialTag',
        label: '特殊标识',
        type: MetaType.Refer,
        props: {
            refinfokey: 'defdoc-component_props',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    }]);
    return PropMeta;
}