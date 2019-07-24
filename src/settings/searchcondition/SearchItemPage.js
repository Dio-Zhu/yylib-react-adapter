import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
import FormItemType from '../forminputs/FormItemType';
module.exports = function (options) {
    return {
        "buttons": function(opts){
            var buttons = [];
            var inputtype = opts.tplNode.inputtype;
            if(inputtype === FormItemType.select){
                buttons.push({
                    onClick: function (e,options) {
                        let {tplNode,tplTree} = options;
                        var count = 1+(tplNode.children?tplNode.children.length:0);
                        var title = UiTitleDef.option+count;
                        var key = new Date().getTime();
                        Utils.appendNode(tplNode,{
                            uitype:UiTypeDef.option,
                            uititle:title,
                            children:title,
                            uikey:key,
                            value:key,
                            key:key
                        });
                        return true;
                    },
                    text:'添加下拉选项'
                });
            }
            return buttons.length>0?buttons:null;
        }
    }
}
