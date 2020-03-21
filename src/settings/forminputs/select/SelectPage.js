import Utils from '../../../Utils';
import {UiTypeDef,UiTitleDef} from '../../../MyUiDefines';
module.exports = function(options) {
    return {
        "buttons": function(opts){
            if (opts.tplNode.uitype == UiTypeDef.select) {
                return [{
                    onClick: function (e,options) {
                        let {tplNode,tplTree} = options;
                        var value = 1+tplNode.children?tplNode.children.length:0;
                        var title = UiTitleDef.option+value;
                        var key = new Date().getTime();
                        Utils.appendNode(tplNode,{
                            uitype:UiTypeDef.option,
                            uititle:title,
                            uikey:key,
                            key:key,
                            value:title,
                            children:title
                        });
                        return true;
                    },
                    text: '添加下拉项'
                }]
            }else{
                return null;
            }
        }
    }
};
