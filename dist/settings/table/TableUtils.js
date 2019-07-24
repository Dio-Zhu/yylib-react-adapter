'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableUtils = {
    /**
     * 处理表格列合并的联动问题,当前节点为YYTableCol时触发
     */
    tableColSpan: function tableColSpan(treeNode, currNode) {
        var parentNode = _Utils2.default.findParentNode(treeNode, currNode.nid);
        var children = parentNode && parentNode.children ? parentNode.children : [];
        var index = Array.findIndex(children, function (node) {
            return node.nid === currNode.nid;
        });
        var colSpan = currNode.colSpan;
        if (index > -1 && colSpan >= 0) {
            children.forEach(function (child, i) {
                if (i > index && i < index + colSpan) {
                    child.colSpan = 0;
                }
            });
        }
    }
};
module.exports = TableUtils;