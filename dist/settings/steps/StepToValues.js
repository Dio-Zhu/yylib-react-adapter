"use strict";

var _indexDeps = require("../../index-deps");

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
                    // meta.defaultValue = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, "title", value);
                    break;
                }
            // case "status":{
            //     // meta.defaultValue = value;
            //     tplNode.status = value;
            //     break;
            // }
            // case "description":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "icon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};