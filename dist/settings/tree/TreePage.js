'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加树节点',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.treenode,
                    uititle: _Defines.UiTitleDef.treenode + value,
                    uikey: key,
                    key: key,
                    title: _Defines.UiTitleDef.treenode + value,
                    disabled: false,
                    disableCheckbox: false,
                    selectable: true,
                    expanded: true
                });
                return true;
            }
        }]
    };
};