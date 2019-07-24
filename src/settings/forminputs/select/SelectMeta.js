import {MetaType} from '../../../index-deps';
module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.select){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.select//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
        //var isMultiple = tplNode.multiple!==undefined?tplNode.multiple:false;
        PropMeta = PropMeta.concat([//下拉选择扩展的配置
            {
                name: 'defaultValue',
                label: '默认选中',
                type: MetaType.Select,
                props: {
                    allowClear:true,
                    options: function(){
                        var optionNodes = tplNode.children||[];
                        var formMetaOptions = [];
                        optionNodes.forEach(function(option){
                            formMetaOptions.push({
                                value:option.uikey,
                                key:option.uikey,
                                text:option.uititle
                            });
                        });
                        return formMetaOptions;
                    }()//注意立即执行
                },
                defaultValue: ''
            }, {
                name: 'allowClear',
                label: '启用清除',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }, {
                name: 'valueType',
                label: '取值类型',
                help:"定义onChange回调提供的值类型",
                type: MetaType.Select,
                props: {

                    options: [{value:'string', text:'字符串值'}, {value:'object', text:'对象值'}]
                },
                defaultValue: 'string'
            },{
                name: 'placeholder',
                label: '置空提示',
                props: {

                },
                type: MetaType.Text,
                defaultValue: ''
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