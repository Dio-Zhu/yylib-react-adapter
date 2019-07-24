import Utils from '../../Utils';
import { UiTypeDef, UiTitleDef } from '../../Defines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加树节点',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                Utils.appendNode(tplNode, {
                    uitype: UiTypeDef.treenode,
                    uititle: UiTitleDef.treenode + value,
                    uikey: key,
                    key: key,
                    title: UiTitleDef.treenode + value,
                    disabled: false,
                    disableCheckbox: false,
                    selectable: true,
                    expanded: true
                });
                return true;
            }
        }]
    }
};