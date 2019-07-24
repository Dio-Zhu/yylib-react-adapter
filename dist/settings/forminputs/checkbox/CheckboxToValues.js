'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkbox){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.checkbox||
    //     tplNode.uitype == UiTypeDef.formitemw
    // ) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', tplNode.uikey);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'value', tplNode.uikey);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'label', tplNode.uikey);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', tplNode.uikey);
                    break;
                }
        }
    }
    // }
};