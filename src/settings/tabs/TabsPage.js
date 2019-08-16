import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加页签',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+(tplNode.children?tplNode.children.length:0);
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.tab,
                    uititle:UiTitleDef.tab+value,
                    uikey:key,
                    key:key,
                    tab:UiTitleDef.tab+value,
                });
                return true;
            }
        }]
    }
};