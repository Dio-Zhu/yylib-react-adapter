import {MetaType,SUPPORT_SERVER} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.enumselect//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
        PropMeta = PropMeta.concat([   //自定义档案枚举选择扩展配置
            {
                name: 'referObj',
                label: '档案编码',
                props: {
                    refinfokey: 'bd-009',
                    serverUrl: SUPPORT_SERVER,

                },
                type: MetaType.Refer,
                defaultValue: ''
            },
            {
                name: 'placeholder',
                label: '置空提示',
                props: {

                },
                type: MetaType.Text,
                defaultValue: ''
            },
            {
                name: 'defaultActiveFirstOption',
                label: '默认首项',
                help:'默认选中第一项值',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            },
            //{
            //    name: 'defaultValue',
            //    label: '默认选中',
            //    help:'对应值下拉项的键值',
            //    type: MetaType.Text,
            //    props: {
            //
            //    },
            //    defaultValue: ''
            //},
            {
                name: 'serverUrl',
                label: '服务地址',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            },
            {
                name: 'enableOrg',
                label: '当前组织',
                type: MetaType.Bool,
                props: {},
                defaultValue: false
            }, {
                name: 'allowClear',
                label: '启用清除',
                type: MetaType.Bool,
                props: {},
                defaultValue: false
            },  {
                name: 'valueType',
                label: '取值类型',
                help:"定义onChange回调提供的值类型",
                type: MetaType.Select,
                props: {

                    options: [{value:'string', text:'字符串值'}, {value:'object', text:'对象值'}]
                },
                defaultValue: 'string'
            }, {
                name: 'valueKey',
                label: '取值属性',
                help:"定义当取值类型为字符串值（string）时，值来自于id还是code",
                type: MetaType.Select,
                props: {

                    options: [{value:'code', text:'属性code值'}, {value:'id', text:'属性id值'}, {value:'name', text:'属性name值'}]
                },
                defaultValue: 'code'
            },{
                name: 'multiple',
                label: '支持多选',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }
        ]);
    // }
    return PropMeta;
}