'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
            // case 'type':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'compare':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'text': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'value': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'disabled': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            case 'preFunction':
                {
                    delete tplNode[meta.name];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue = {};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.name;
                        // meta.defaultValue.code = value.code;
                        tplNode.funcId = value.id;
                        tplNode.funcCode = value.code;
                        tplNode.funcName = value.name;
                    } else {
                        delete tplNode.funcId;
                        delete tplNode.funcCode;
                        delete tplNode.funcName;
                    }
                    break;
                }
        }
    }
};