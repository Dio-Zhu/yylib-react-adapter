import {LogicUtils} from '../../index-deps';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++) {
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
                // tplNode.title = value;
                LogicUtils.isExistSet(tplNode,'title',value);
                break;
            }
            // case "target":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};
