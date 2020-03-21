import Utils from '../../Utils';
import {UiTypeDef} from '../../MyUiDefines';

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加树节点',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = `${tplNode.title}-${1 + (tplNode.children?tplNode.children.length:0)}`
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.treenode,
                    uititle:value,
                    uikey:key,
                    key:key,
                    title:value,
                    // disabled:false,
                    // disableCheckbox:false,
                    // selectable:false,
                    // expanded:false
                });
                return true;
            }
        }]
    }
};