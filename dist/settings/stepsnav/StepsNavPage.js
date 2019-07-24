'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加导航项',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.stepsnavitem,
                    uititle: _Defines.UiTitleDef.stepsnavitem + value,
                    title: _Defines.UiTitleDef.stepsnavitem + value,
                    description: ''
                });
                return true;
            }
        }]
    };
};