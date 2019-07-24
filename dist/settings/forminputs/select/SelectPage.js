'use strict';

var _Utils = require('../../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            if (opts.tplNode.uitype == _Defines.UiTypeDef.select) {
                return [{
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var value = 1 + tplNode.children ? tplNode.children.length : 0;
                        var title = _Defines.UiTitleDef.option + value;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            uikey: key,
                            key: key,
                            value: title,
                            children: title
                        });
                        return true;
                    },
                    text: '添加下拉项'
                }];
            } else {
                return null;
            }
        }
    };
};