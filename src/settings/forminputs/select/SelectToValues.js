import {LogicUtils} from '../../../index-deps';
import {UiTypeDef} from '../../../Defines';
import FormItemType from '../../forminputs/FormItemType';
import FormInputsUtil from '../FormInputsUtil';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.select){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.select);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.select);
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem && tplNode.inputtype == FormItemType.select);
    //是否支持多选
    var isMultiple = tplNode.multiple!==undefined?tplNode.multiple:false;

    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.select || isFormItem || isEditItem || isSearchItem){
        for(var i=0;i<formMeta.length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "defaultValue":{
                    if(isMultiple) {
                        value = value == "" || value == undefined || value == null ? [] : value
                    }
                    // meta.defaultValue = value;
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isExistSet(tplNode.inputprops,meta.name,value);
                    }else{
                        LogicUtils.isExistSet(tplNode,meta.name,value);
                    }
                    break;
                }
                case "multiple":{
                    // meta.defaultValue = value;
                    //当是否支持多选发生变更时，清除之前的默认值配置
                    if((tplNode.multiple==undefined && value==true) || (tplNode.multiple==true&& value==false)){
                        delete tplNode.defaultValue;
                    }
                    if(isSearchItem) {
                        delete tplNode[meta.name];
                        LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    }else{
                        LogicUtils.isTrueSet(tplNode, meta.name, value);
                    }
                    break;
                }
                case "allowClear":
                case "valueType":
                case "placeholder":
                    if(isSearchItem){
                        FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                    }
                    break;
            }
        }
    // }
}