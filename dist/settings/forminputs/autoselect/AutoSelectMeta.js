'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.autoselect){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.autoselect||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//参照扩展的配置
    {
        name: 'refinfokey',
        label: '参照编码',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: '001',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: { refType: "autoSelect" }
        },
        defaultValue: null
    }, {
        name: 'valueType',
        label: '取值类型',
        help: "定义onChange回调提供的值类型",
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串值' }, { value: 'object', text: '对象值' }]
        },
        defaultValue: 'string'
    }, {
        name: 'maxSize',
        label: '最大条数',
        help: '匹配下拉选项最大显示条数，默认20条',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'propKey',
        label: '其它属性',
        help: "其它需要显示的属性，和返回bo中属性名一致，用“,”隔开",
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'maxLength',
        label: '限制长度',
        help: '输入框输入的长度限制',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};