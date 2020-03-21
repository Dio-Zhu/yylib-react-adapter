import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../MyUiDefines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加标签项',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+(tplNode.children?tplNode.children.length:0);
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.tagitem,
                    uititle:UiTitleDef.tagitem+value,
                    text:UiTitleDef.tagitem+value,
                    value:key,
                });
                return true;
            }
        }]
    }
};