import Utils from '../../Utils';
import {UiTypeDef,UiTitleDef} from '../../MyUiDefines';
import FormItemType from '../forminputs/FormItemType';
module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加条件项',
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                var value = 1+tplNode.children?tplNode.children.length:0;
                var key = new Date().getTime();
                Utils.appendNode(tplNode,{
                    uitype:UiTypeDef.searchitem,
                    uititle:UiTitleDef.searchitem+value,
                    title:UiTitleDef.searchitem+value,
                    uikey:key,
                    key:key,
                    fieldtype: 'string',
                    inputtype:FormItemType.input,
                    oper:[],
                });
                return true;
            }
        }]
    }
};