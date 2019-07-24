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
            text: '添加子卡片',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = 1 + value + new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: UiTypeDef.accordion,
                    uititle: UiTitleDef.accordion + value,
                    uikey: key,
                    key: key,
                    enableStepTarget: true,
                    header: UiTitleDef.accordion + value
                });
                return true;
            }
        }]
    };
};