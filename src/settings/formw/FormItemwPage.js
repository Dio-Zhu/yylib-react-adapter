import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../Defines';
import FormItemType from '../forminputs/FormItemType';
module.exports = function(options) {
    return {
        "buttons":function(opts){
            var buttons = [];
            var uisubtype = opts.tplNode.uisubtype;
            if(uisubtype === FormItemType.select){
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
            }else if(uisubtype === FormItemType.radiogroup){
                buttons.push({
                    onClick: function (e,options) {
                        let {tplNode,tplTree} = options;
                        var value = 1+tplNode.children?tplNode.children.length:0;
                        var key = 1+value+(new Date().getTime());
                        Utils.appendNode(tplNode,{
                            uitype:UiTypeDef.radio,
                            uititle:UiTitleDef.radio+value,
                            uikey:key,
                            children:UiTitleDef.radio+value,
                            value:key
                        });
                        return true;
                    },
                    text:'添加单选项'
                });
            }else if(uisubtype === FormItemType.checkboxgroup){
                buttons.push({
                    onClick: function (e,options) {
                        let {tplNode,tplTree} = options;
                        var count = 1+tplNode.children?tplNode.children.length:0;
                        var title = UiTitleDef.checkbox+count;
                        var key = new Date().getTime();
                        Utils.appendNode(tplNode,{
                            uitype:UiTypeDef.checkbox,
                            uititle:title,
                            uikey:key,
                            children:title,
                            value:key,
                            label:title,
                            checked:false
                        });
                        return true;
                    },
                    text:'添加多选项'
                });
            }
            return buttons.length>0?buttons:null;
        }
    }
};