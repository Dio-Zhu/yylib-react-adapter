import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加字段',
            //点击快速添加自定义字段
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var count = 1+(tplNode.children?tplNode.children.length:0);
                var uititle = UiTitleDef.tablecol+count;
                var uikey = new Date().getTime();
                Utils.appendNode(tplNode,{uitype:UiTypeDef.tablecol,uititle:uititle,title:uititle,uikey:uikey,key:uikey,dataIndex:uikey});
                return true;
            }
        }]
    }
};