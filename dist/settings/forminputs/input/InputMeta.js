'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.input){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.input||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//文本框扩展的配置
    {
        name: 'maxLength',
        label: '限制长度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'autoSelect',
        label: '内容全选',
        help: '当启用时，每次获取焦点时自动全选文本内容，默认启用',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'autoTrim',
        label: '去除空格',
        type: _indexDeps.MetaType.Bool,
        help: '当启用时，不允许输入内容左右带多余空格，默认启用',
        props: {},
        defaultValue: true
    }, {
        name: 'value',
        label: '默认值',
        type: _indexDeps.MetaType.Text,
        props: {

            enableSelect: false
        },
        defaultValue: null
    }, {
        name: 'addonAfter',
        label: '文本后缀',
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