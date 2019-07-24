import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
module.exports = function(options) {
    return {
        "buttons":[{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+tplNode.children?tplNode.children.length:0;
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.CPDropdownItem,
                    uititle:UiTitleDef.CPDropdownItem+value
                });
                return true;
            },
            text:'添加下拉按钮'
        }]
    }
};
