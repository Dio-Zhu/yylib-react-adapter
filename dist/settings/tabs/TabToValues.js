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
                    // tplNode.key = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    // tplNode.tab = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'tab', value);
                    break;
                }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};