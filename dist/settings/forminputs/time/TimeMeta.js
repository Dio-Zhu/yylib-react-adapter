'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.timepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.timepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//日期扩展的配置
    {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'format',
        label: '时间格式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: ['HH:mm:ss', 'HH:mm', 'mm:ss'],
            showSearch: true
        },
        defaultValue: 'HH:mm:ss'
    }, {
        name: 'hideDisabledOptions',
        label: '隐藏禁止项',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }

    return PropMeta;
};