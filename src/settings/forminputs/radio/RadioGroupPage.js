import Utils from '../../../Utils';
import {UiTypeDef,UiTitleDef} from '../../../Defines';
module.exports = function(options) {
    return {
        "buttons": [{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+tplNode.children?tplNode.children.length:0;
                var key = 1+value+(new Date().getTime());
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.radio,
                    uititle:UiTitleDef.radio+value,
                    uikey:key,
                    children:UiTitleDef.radio+value,
                    value:key
                });
                return true;
            },
            text:'添加单选项'
        }]
    }
};
