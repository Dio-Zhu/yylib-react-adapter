import {LogicUtils} from '../../../index-deps';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.text){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.text ||
    //     tplNode.uitype == UiTypeDef.formitemw
    // ) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                // case "value":{
                //     meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "addonAfter":{
                //     meta.defaultValue = value;
                //     LogicUtils.isExistSet(tplNode,meta.name,value);
                //     break;
                // }
                // case "fieldtype":{
                //     meta.defaultValue = value;
                //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['date','boolean','number','currency']);
                //     break;
                // }
                // case "comma":{
                //     meta.defaultValue = value;
                //     LogicUtils.isFalseSet(tplNode,meta.name,value);
                //     break;
                // }
                case "decimal":{
                    // meta.defaultValue = value;
                    if(tplNode.fieldtype=='currency'){
                        LogicUtils.isExistSet(tplNode,meta.name,value);
                    }else{
                        delete tplNode.decimal;
                    }
                    break;
                }
                case "showDecimal":{
                    // meta.defaultValue = value;
                    if(tplNode.fieldtype=='currency'){
                        LogicUtils.isExistSet(tplNode,meta.name,value);
                    }else{
                        delete tplNode.showDecimal;
                    }
                    break;
                }
                case "zeroFilling":{
                    // meta.defaultValue = value;
                    if(tplNode.fieldtype=='currency'){
                        LogicUtils.isFalseSet(tplNode,meta.name,value);
                    }else{
                        delete tplNode.decimal;
                    }
                    break;
                }
                case "format":{//日期格式
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype=='date') {
                        tplNode.format = value;
                    }else{
                        delete tplNode.format;
                    }
                    break;
                }
            }
        }
    // }
}