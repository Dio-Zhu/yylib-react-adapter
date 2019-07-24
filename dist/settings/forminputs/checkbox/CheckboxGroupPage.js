'use strict';

var _Utils = require('../../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
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
                    label: title
                });
                return true;
            },
            text: '添加多选项'
        }]
    };
};