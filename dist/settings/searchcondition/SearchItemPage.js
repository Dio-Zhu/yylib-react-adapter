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
            var inputtype = opts.tplNode.inputtype;
            if (inputtype === _FormItemType2.default.select) {
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
            }
            return buttons.length > 0 ? buttons : null;
        }
    };
};