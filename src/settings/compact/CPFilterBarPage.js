import Utils from '../../Utils';
import {UiTypeDef, UiTitleDef} from '../../Defines';
module.exports = function(options) {
    return {
        "buttons":[{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = UiTitleDef.CPFilterRow + value;
                var key = new Date().getTime() + '_1';
                Utils.appendNode(tplNode, {
                    uitype: UiTypeDef.CPFilterRow,
                    uikey: key,
                    uititle:title,
                    title: title,
                    rowKey: key
                });
                return true;
            },
            text: '添加条件'
        }]
    }
};
