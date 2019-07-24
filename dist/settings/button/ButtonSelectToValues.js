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
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'buttonText', value);
                    break;
                }
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'clickKey', value);
                    break;
                }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};