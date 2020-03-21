import Utils from '../../../Utils';
import {UiTypeDef,UiTitleDef} from '../../../MyUiDefines';
module.exports = function(options) {
    return {
        "buttons": [{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var count = 1+tplNode.children?tplNode.children.length:0;
                var title = UiTitleDef.checkbox+count;
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.checkbox,
                    uititle:title,
                    uikey:key,
                    children:title,
                    value:key,
                    label:title,
                });
                return true;
            },
            text:'添加多选项'
        }]
    }
};
