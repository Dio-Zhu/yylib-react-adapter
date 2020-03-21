import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../MyUiDefines';
import FormItemType from '../forminputs/FormItemType';
module.exports = function(options) {
    return {
        "buttons": [{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var count = 1+(tplNode.children?tplNode.children.length:0);
                var uititle = UiTitleDef.edititemw+count;
                var uikey = new Date().getTime();
                Utils.appendNode(tplNode,{uitype:UiTypeDef.edititemw,uisubtype:FormItemType.input,uititle:uititle,title:uititle,uikey:uikey,key:uikey,dataIndex:uikey});
                return true;
            },
            text:'添加字段'
        }]
    }
};
