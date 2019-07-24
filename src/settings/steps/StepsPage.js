import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加步骤',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+(tplNode.children?tplNode.children.length:0);
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.step,
                    uititle:UiTitleDef.step+value,
                    uikey:key,
                    key:key,
                    title:UiTitleDef.step+value,
                    status: value===1?'process':undefined,
                    description:'',
                    icon:''
                });
                return true;
            }
        }]
    }
};