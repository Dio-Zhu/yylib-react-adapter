import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
import FormItemType from '../forminputs/FormItemType';
module.exports = function(options) {
    return {
        "buttons": [{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var count = 1+(tplNode.children?tplNode.children.length:0);
                var title = UiTitleDef.input+count;
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.formitemw,
                    uisubtype:FormItemType.input,
                    label: title,
                    uititle:title
                });
                return true;
            },
            text:'添加字段'
        }]
    }
};
