'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
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
            case "billType":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "serverUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "align":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isEqualSet(tplNode,meta.name,value,'right');
            //     break;
            // }
        }
    }
};