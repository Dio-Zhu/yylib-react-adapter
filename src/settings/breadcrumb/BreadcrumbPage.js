import Utils from '../../Utils';
import {UiTypeDef} from '../../Defines';
module.exports = function(options) {
    return {
        "buttons":[{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+(tplNode.children?tplNode.children.length:0);
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.breadcrumbitem,
                    uititle:UiTitleDef.breadcrumbitem+value,
                    key:key,
                    uikey:key,
                    children:UiTitleDef.breadcrumbitem+value
                });
                return true;
            },
            text:'添加子面包屑'
        }]
    }
};
