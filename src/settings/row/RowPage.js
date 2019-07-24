import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加格子',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+tplNode.children?tplNode.children.length:0;
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.col,
                    uititle:UiTitleDef.col+value
                });
                return true;
            }
        }]
    }
};