import Utils from '../../Utils';
var {UiTypeDef,UiTitleDef} = require('../../Defines');
module.exports = function(options) {
    return {
        "buttons": [{
                    onClick: function (e,options) {
                        let {tplNode,tplTree} = options;
                        var value = 1+tplNode.children?tplNode.children.length:0;
                        var title = UiTitleDef.buttonitem+value;
                        var key = new Date().getTime();
                        Utils.appendNode(tplNode,{
                            uitype:UiTypeDef.buttonitem,
                            uititle:title,
                            uikey:key,
                            clickKey:key,
                            children:title
                        });
                        return true;
                    },
                    text: '添加'+ UiTitleDef.buttonitem
                }]
    }
}
