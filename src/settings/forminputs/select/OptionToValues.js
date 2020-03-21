import {LogicUtils} from '../../../index-deps';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<(formMeta||[]).length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":{
                LogicUtils.isExistSet(tplNode,'key',tplNode[meta.name]);
                LogicUtils.isExistSet(tplNode,'value',tplNode[meta.name]);
                break;
            }
            case "uititle":{
                LogicUtils.isExistSet(tplNode,'text',tplNode[meta.name]);
                LogicUtils.isExistSet(tplNode,'children',tplNode[meta.name]);
                break;
            }
        }
    }
};
