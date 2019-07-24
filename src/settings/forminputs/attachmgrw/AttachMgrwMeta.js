import {MetaType,SUPPORT_SERVER} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // PropMeta = PropMeta.concat([]);
    //     //当附件管理独立使用在列表页面的工具栏时需要配置指定的sourceId（卡片表单页面sourceId不允许配置）
    //     PropMeta.push({
    //         name: 'sourceId',
    //         label: '单据标识',
    //         type: MetaType.Text,
    //         props: {},
    //         defaultValue: ''
    //     });
    // }
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw){

        PropMeta = PropMeta.concat([{
            name: 'buttonText',
            label: '按钮文本',
            type: MetaType.Text,
            props: {

            },
            defaultValue: null
        },{
            name:'sourceType',
            label:'业务类型',
            help:'单据下的细分业务类型标识',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        }, {
            name: 'billType',
            label: '单据类型',
            type: MetaType.Refer,
            props: {
                refinfokey: 'bill_001',
                serverUrl: SUPPORT_SERVER,

            },
            defaultValue: ''
        }, {
            name: 'serverUrl',
            label: '服务地址',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        }, {
            name: 'align',
            label: '排列方式',
            type: MetaType.Select,
            props: {

                options: [{
                    text: '从左侧排列',
                    value: 'left'
                }, {
                    text: '从右侧排列',
                    value: 'right'
                }]
            },
            defaultValue: 'left'
        }, {
            name: 'readOnly',
            label: '只读下载',
            help: '启用后将不允许上传和删除附件，只能进行下载',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'enableUser',
            label: '当前用户',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'btnType',
            label: '按钮风格',
            type: MetaType.Select,
            props: {

                options: [{text: '灰色', value: 'default'}, {text: '蓝色', value: 'primary'}, {
                    text: '绿色',
                    value: 'success'
                }, {text: '红色', value: 'error'}, {text: '黄色', value: 'warning'}]
            },
            defaultValue: 'default'
        },{
            name: 'btnGhost',
            label: '按钮透明',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'fileLengthVisible',
            label: '显示角标',
            type: MetaType.Bool,
            props: {},
            help:'在右上角显示附件数量角标',
            defaultValue: false
        }, {
            name: 'multiple',
            label: '批量上传',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'showUploadBtn',
            label: '上传按钮',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'showDelBtn',
            label: '删除按钮',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'deleteTip',
            label: '删除提示',
            help:'默认提示内容“删除的附件不可恢复！确定要删除？”',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'accept',
            label: '文件类型',
            help: '限制只允许上传指定类型的文件,例如：.jpg,.png,.doc,.docx,.xls,.xlsx等',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        }]);

    // }
    return PropMeta
}
