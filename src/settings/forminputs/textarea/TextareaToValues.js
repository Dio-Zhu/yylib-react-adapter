import {LogicUtils} from '../../../index-deps';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.textarea){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "autosize":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                    tplNode.autosize = value===false?false:{};
                    break;
                }
                case "minRows":
                case "maxRows":
                    delete tplNode[meta.name];
                    if(tplNode.autosize!==false){
                        tplNode.autosize = typeof tplNode.autosize == 'object'?tplNode.autosize:{};
                        LogicUtils.isExistSet(tplNode.autosize,meta.name,value);
                    }
                    break;
                // case "maxLength":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "placeholder":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "showTitle":{
                //     // meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
            }
        }
    // }
}