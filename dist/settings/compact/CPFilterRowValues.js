"use strict";

module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case 'title': {
            //     meta.defaultValue = tplNode.title !== undefined ? tplNode.title : meta.defaultValue;
            //     break;
            // }
            // case 'rowKey': {
            //     meta.defaultValue = tplNode.rowKey !== undefined ? tplNode.rowKey : meta.defaultValue;
            //     break;
            // }
            // case 'multiple': {
            //     meta.defaultValue = tplNode.multiple !== undefined ? tplNode.multiple : meta.defaultValue;
            //     break;
            // }
            case "referObj":
                {
                    // meta.defaultValue = {};
                    // meta.defaultValue.code = tplNode.code;
                    // meta.defaultValue.name = tplNode.refName;
                    // meta.defaultValue.id = tplNode.refId;
                    if (tplNode.code && tplNode.refName) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.code;
                        newFormData[meta.name].name = tplNode.refName;
                        newFormData[meta.name].id = tplNode.refId;
                    }
                    break;
                }
            // case "serverUrl": {
            //     meta.defaultValue = tplNode.serverUrl != undefined ? tplNode.serverUrl : meta.defaultValue;
            //     break;
            // }
            // case "enableOrg": {
            //     meta.defaultValue = tplNode.enableOrg != undefined ? tplNode.enableOrg : meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};