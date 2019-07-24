'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

var _FormItemType = require('../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                var title = _Defines.UiTitleDef.input + count;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.formitemw,
                    uisubtype: _FormItemType2.default.input,
                    label: title,
                    uititle: title
                });
                return true;
            },
            text: '添加字段'
        }]
    };
};