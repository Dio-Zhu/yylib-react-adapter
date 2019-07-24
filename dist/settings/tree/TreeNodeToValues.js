'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "disableCheckbox":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "selectable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "expanded":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};