import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.cascader){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.cascader||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
        PropMeta = PropMeta.concat([
            {
                name: 'size',
                label: '尺寸',
                type: MetaType.Select,
                props: {

                    options: [{value: 'large', text: '大'}, {value: 'default', text: '中'}, {value: 'small', text: '小'}]
                },
                defaultValue: 'default'
            }, {
            name: 'allowClear',
            label: '允许清除',
            type: MetaType.Bool,
            props: {

            },
            defaultValue: true
        }, {
            name: 'placeholder',
            label: '置空提示',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        }, {
            name: 'expandTrigger',
            label: '展开方式',
            type: MetaType.Select,
            props: {

                options: [{text: '点击', value: 'click'}, {text: '悬浮', value: 'hover'}]
            },
            defaultValue: 'click'
        }, {
            name: 'changeOnSelect',
            label: '即选生效',
            type: MetaType.Bool,
            props: {

            },
            defaultValue: false
        }, {
            name: 'options',
            label: '本地数据',
            help: '配置本地演示数据',
            type: MetaType.LocalData,
            props: { owner: 'cascader'},
            defaultValue: null,
        }
        ]);
    // }
    return PropMeta;
};
