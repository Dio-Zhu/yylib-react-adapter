'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

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
    PropMeta = PropMeta.concat([{
        name: 'size',
        label: '尺寸',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'large', text: '大' }, { value: 'default', text: '中' }, { value: 'small', text: '小' }]
        },
        defaultValue: 'default'
    }, {
        name: 'allowClear',
        label: '允许清除',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'expandTrigger',
        label: '展开方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '点击', value: 'click' }, { text: '悬浮', value: 'hover' }]
        },
        defaultValue: 'click'
    }, {
        name: 'changeOnSelect',
        label: '即选生效',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'options',
        label: '本地数据',
        help: '配置本地演示数据',
        type: _indexDeps.MetaType.LocalData,
        props: { owner: 'cascader' },
        defaultValue: null
    }]);
    // }
    return PropMeta;
};