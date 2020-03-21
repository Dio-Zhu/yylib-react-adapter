import {LogicUtils} from '../../index-deps';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<(formMeta||[]).length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":{
                // tplNode.key = value;
                LogicUtils.isExistSet(tplNode,'key',value);
                break;
            }
            case "uititle":{
                // tplNode.tab = value;
                LogicUtils.isExistSet(tplNode,'tab',value);
                break;
            }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};
