'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('../../Defines'),
    UiTypeDef = _require.UiTypeDef,
    UiTitleDef = _require.UiTitleDef;

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = UiTitleDef.buttonitem + value;
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: UiTypeDef.buttonitem,
                    uititle: title,
                    uikey: key,
                    clickKey: key,
                    children: title
                });
                return true;
            },
            text: '添加' + UiTitleDef.buttonitem
        }]
    };
};