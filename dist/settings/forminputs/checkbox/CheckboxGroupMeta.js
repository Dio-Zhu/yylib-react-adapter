'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'defaultValue',
        label: '默认选中',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var radios = [];
                (tplNode.children || []).forEach(function (item) {
                    radios.push({
                        value: item.uikey,
                        text: item.children,
                        key: item.uikey
                    });
                });
                return radios;
            }(),
            multiple: true
        },
        defaultValue: []
    }]);
    // }
    return PropMeta;
};