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
            text: '添加条件项',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.searchitem,
                    uititle: _Defines.UiTitleDef.searchitem + value,
                    title: _Defines.UiTitleDef.searchitem + value,
                    uikey: key,
                    key: key,
                    fieldtype: 'string',
                    inputtype: _FormItemType2.default.input,
                    oper: []
                });
                return true;
            }
        }]
    };
};