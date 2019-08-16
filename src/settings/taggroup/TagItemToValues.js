import {LogicUtils} from '../../index-deps';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "text":{
                // meta.defaultValue = value;
                // tplNode.text = value;
                // tplNode.uititle = value;
                LogicUtils.isExistSet(tplNode,'uititle',value);
                break;
            }
            // case "value":{
            //     // meta.defaultValue = value;
            //     tplNode.value = value;
            //     break;
            // }
        }
    }
};
