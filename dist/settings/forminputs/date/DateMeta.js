'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.datepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.datepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//日期扩展的配置
    {
        name: 'format',
        label: '日期格式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy年MM月', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM-dd HH', 'yyyy-MM', 'yyyy/MM', 'yyyy'],
            showSearch: true
        },
        defaultValue: 'yyyy-MM-dd'
    }, {
        name: 'showTime',
        label: '时间选择',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
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