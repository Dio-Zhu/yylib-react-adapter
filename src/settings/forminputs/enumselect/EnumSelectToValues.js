import {LogicUtils} from '../../../index-deps';
import {UiTypeDef} from '../../../MyUiDefines';
import FormItemType from '../FormItemType';
import FormInputsUtil from '../FormInputsUtil';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.enumselect);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.enumselect);
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem && tplNode.inputtype == FormItemType.enumselect);

    // //是否支持多选
    // var isMultiple = tplNode.multiple!==undefined?tplNode.multiple:false;

    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.enumselect
    //     || isFormItem || isEditItem || isSearchItem) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "referObj": {
                    delete tplNode[meta.name];
                    if (typeof value == 'object') {
                        // meta.defaultValue = {};
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        if(isSearchItem){
                            tplNode.inputprops.code = value.refCode?value.refCode:value.code;
                            tplNode.inputprops.refName = value.refName?value.refName:value.name;
                            tplNode.inputprops.refId = value.refId?value.refId:value.id;
                        }else{
                            tplNode.code = value.refCode?value.refCode:value.code;
                            tplNode.refName = value.refName?value.refName:value.name;
                            tplNode.refId = value.refId?value.refId:value.id;
                        }
                    } else {
                        delete tplNode.code;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
                case "multiple":{
                    //当是否支持多选发生变更时，清除之前的默认值配置
                    if((tplNode.multiple==undefined && value==true) || (tplNode.multiple==true&& value==false)){
                        delete tplNode.defaultValue;
                    }
                    if(isSearchItem) {
                        delete tplNode[meta.name];
                        LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    }
                    break;
                }
                case "defaultActiveFirstOption":
                case "serverUrl":
                case "enableOrg":
                case "allowClear":
                case "valueType":
                case "valueKey":
                case "placeholder":
                    if(isSearchItem){
                        FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                    }
                    break;
            }
        }
    // }
}