import {LogicUtils} from '../../../index-deps';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkbox){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.checkbox||
    //     tplNode.uitype == UiTypeDef.formitemw
    // ) {
       for(var i=0;i<formMeta.length;i++) {
           var meta = formMeta[i];
           if(!(meta.name in formData))continue;
           var value = formData[meta.name];
            switch (meta.name) {
                case "uikey":{
                    LogicUtils.isExistSet(tplNode,'key',tplNode.uikey);
                    LogicUtils.isExistSet(tplNode,'value',tplNode.uikey);
                    break;
                }
                case "uititle":{
                    LogicUtils.isExistSet(tplNode,'label',tplNode.uikey);
                    LogicUtils.isExistSet(tplNode,'children',tplNode.uikey);
                    break;
                }
            }
       }
    // }
}