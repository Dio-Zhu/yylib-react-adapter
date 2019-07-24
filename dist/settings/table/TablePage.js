'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加字段',
            //点击快速添加自定义字段
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                var uititle = _Defines.UiTitleDef.tablecol + count;
                var uikey = new Date().getTime();
                _Utils2.default.appendNode(tplNode, { uitype: _Defines.UiTypeDef.tablecol, uititle: uititle, title: uititle, uikey: uikey, key: uikey, dataIndex: uikey });
                return true;
            }
        }]
    };
};