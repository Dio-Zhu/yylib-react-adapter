import {LogicUtils} from '../../../index-deps';
import {UiTypeDef} from '../../../MyUiDefines';
import FormInputsUtil from '../FormInputsUtil';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.autoselect){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.autoselect);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.autoselect);
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);
    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.autoselect || isFormItem || isEditItem || isSearchItem) {
        delete tplNode.serverUrl;//清理掉之前记录在数据库的旧IP
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "refinfokey":{
                    if(value){
                        // meta.defaultValue={};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        if(isSearchItem){
                            delete tplNode[meta.name];
                            tplNode.inputprops.refinfokey=value.refCode ? value.refCode : value.code;
                            tplNode.inputprops.refName=value.refName ? value.refName : value.name;
                            tplNode.inputprops.refId=value.refId ? value.refId : value.id;
                        }else{
                            tplNode.refinfokey=value.refCode ? value.refCode : value.code;
                            tplNode.refName=value.refName ? value.refName : value.name;
                            tplNode.refId=value.refId ? value.refId : value.id;
                        }
                        
                    }else{
                        // meta.defaultValue=null;
                        delete tplNode.refinfokey;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
                case "propKey":{
                    // meta.defaultValue = value;
                    var arrValue = value?value.split(","):[]
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isExistSet(tplNode.inputprops,meta.name,arrValue);
                    }else{
                        LogicUtils.isExistSet(tplNode,meta.name,arrValue);
                    }
                    break;
                }
                case "valueType":
                case "maxSize":
                case "placeholder":
                case "maxLength":
                    if(isSearchItem){
                        FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                    }
                    break;
            }
        }
    // }
}