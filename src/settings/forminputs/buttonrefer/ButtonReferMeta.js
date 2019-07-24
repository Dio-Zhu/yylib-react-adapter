import {MetaType,SUPPORT_SERVER} from '../../../index-deps';

module.exports = function (options) {
    var {tplNode, tplTree} = options;
    var PropMeta = [];
    //基础公共属性
    //PropMeta = PropMeta.concat(options.baseMeta);
    //扩展特有属性
    // if (tplNode.uitype == UiTypeDef.buttonrefer) {
        PropMeta = PropMeta.concat([//参照扩展的配置
            {
                name: 'type',
                label: '颜色',
                type: MetaType.Select,
                help: '按钮的填充颜色',
                props: {

                    options: [{text: '灰色', value: 'default'}, {text: '蓝色', value: 'primary'}, {
                        text: '绿色',
                        value: 'success'
                    }, {text: '红色', value: 'error'}, {text: '黄色', value: 'warning'}]
                },
                defaultValue: 'default'
            }, {
                name: 'icon',
                label: '图标',
                type: MetaType.Icon,
                props: {},
                defaultValue: ''
            }, {
                name: 'ghost',
                label: '透明',
                help: '按钮的内部是否填充颜色',
                type: MetaType.Bool,
                props: {},
                defaultValue: false
            }, {
                name: 'visible',
                label: '显示',
                type: MetaType.Bool,
                props: {},
                defaultValue: true
            }, {
                name: 'disabled',
                label: '禁用',
                type: MetaType.Bool,
                props: {},
                defaultValue: false
            },
            {
                name: 'refinfokey',
                label: '参照编码',
                type: MetaType.Refer,
                props: {

                    refinfokey: '001',
                    serverUrl: SUPPORT_SERVER
                },
                defaultValue: null
            }, {
                name: 'multiselect',
                label: '参照多选',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }, {
                name: 'searchPlaceholder',
                label: '搜索提示',
                type: MetaType.Text,
                props: {

                },
                defaultValue: null
            }, {
                name: 'checkControl',
                label: '父子联动',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: true
            }
        ]);
    // }
    return PropMeta;
}
