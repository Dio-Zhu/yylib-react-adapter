import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../MyUiDefines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加导航项',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+tplNode.children?tplNode.children.length:0;
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.stepsnavitem,
                    uititle:UiTitleDef.stepsnavitem+value,
                    title:UiTitleDef.stepsnavitem+value,
                    description:''
                });
                return true;
            }
        }]
    }
};