'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

var _FormItemType = require('../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            var buttons = [];
            var uisubtype = opts.tplNode.uisubtype;
            if (uisubtype === _FormItemType2.default.select) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                        var title = _Defines.UiTitleDef.option + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            children: title,
                            uikey: key,
                            value: key,
                            key: key
                        });
                        return true;
                    },
                    text: '添加下拉选项'
                });
            } else if (uisubtype === _FormItemType2.default.radiogroup) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var value = 1 + tplNode.children ? tplNode.children.length : 0;
                        var key = 1 + value + new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.radio,
                            uititle: _Defines.UiTitleDef.radio + value,
                            uikey: key,
                            children: _Defines.UiTitleDef.radio + value,
                            value: key
                        });
                        return true;
                    },
                    text: '添加单选项'
                });
            } else if (uisubtype === _FormItemType2.default.checkboxgroup) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + tplNode.children ? tplNode.children.length : 0;
                        var title = _Defines.UiTitleDef.checkbox + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.checkbox,
                            uititle: title,
                            uikey: key,
                            children: title,
                            value: key,
                            label: title,
                            checked: false
                        });
                        return true;
                    },
                    text: '添加多选项'
                });
            }
            return buttons.length > 0 ? buttons : null;
        }
    };
};