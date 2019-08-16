import {MetaType} from '../../../index-deps';

import CurrencyMeta from '../currency/CurrencyMeta';
module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];

    if(tplNode.type=='currency'){
        return CurrencyMeta(options)
    }else{
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     //PropMeta = PropMeta.concat(options.baseMeta);
        // }
        // //扩展特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
        // ) {
        PropMeta = PropMeta.concat([//数字输入框扩展配置
                {
                    name: 'defaultValue',
                    label: '默认值',
                    type: MetaType.Text,
                    props: {

                    },
                    defaultValue: ''
                },
                {
                    name: 'min',
                    label: '最小数值',
                    type: MetaType.Text,
                    props: {

                    },
                    defaultValue: ''
                }, {
                    name: 'max',
                    label: '最大数值',
                    type: MetaType.Text,
                    props: {

                    },
                    defaultValue: ''
                }, {
                    name: 'addonAfter',
                    label: '文本后缀',
                    type: MetaType.Text,
                    props: {

                    },
                    defaultValue: ''
                }, {
                    name: 'direction',
                    label: '文本朝向',
                    type: MetaType.Select,
                    props: {

                        options: [{value: 'left', text: '左对齐'}, {value: 'right', text: '右对齐'}]
                    },
                    defaultValue: 'right'
                },{
                    name:'placeholder',
                    label:'置空提示',
                    type: MetaType.Text,
                    props: {

                    },
                    defaultValue: ''
                },{
                    name:'range',
                    label:'范围取值',
                    type: MetaType.Bool,
                    props: {

                    },
                    defaultValue: false
                }
            ]);
        // }
        return PropMeta;
    }

}
