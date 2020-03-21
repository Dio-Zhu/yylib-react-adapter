import Utils from '../../Utils';
var {UiTypeDef,UiTitleDef} = require('../../MyUiDefines');
module.exports = function(options) {
    return {
        "buttons":[{
            text: '添加子卡片',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+(tplNode.children?tplNode.children.length:0);
                var key = 1+value+(new Date().getTime());
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.accordion,
                    uititle:UiTitleDef.accordion+value,
                    uikey:key,
                    key:key,
                    enableStepTarget:true,
                    header: UiTitleDef.accordion+value
                });
                return true;
            }
        }]
    }
};
