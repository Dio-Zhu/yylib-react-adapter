import {LogicUtils} from '../../../index-deps';
import {UiTypeDef} from '../../../MyUiDefines';
import FormInputsUtil from '../FormInputsUtil';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    //是否为编辑项
    var isEditItem = (tplNode.uitype == UiTypeDef.edititemw);
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.currency
    //     || isFormItem || isEditItem || isSearchItem) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "decimal":{
                    // meta.defaultValue = value;
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isExistSet(tplNode.inputprops,meta.name,value);
                    }else{
                        //联动编辑表格合计列精确小数位
                        if(tplNode.total&&isEditItem){
                            tplNode.totalDecimal = value;
                        }
                        LogicUtils.isExistSet(tplNode,meta.name,value);
                    }
                    break;
                }
                case "zeroFilling":{
                    // meta.defaultValue = value;
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isFalseSet(tplNode.inputprops,meta.name,value);
                    }else{
                        //联动编辑表格合计列千分位
                        if(tplNode.total&&isEditItem){
                            tplNode.totalZeroFilling = value;
                        }
                        LogicUtils.isFalseSet(tplNode,meta.name,value);
                    }
                    break;
                }
                case "comma":{
                    //联动编辑表格
                    if(isEditItem){
                        //联动精确数值框千分位
                        tplNode.commaVisible = value;
                        //联动编辑表格合计列千分位
                        if(tplNode.total){
                            tplNode.totalComma = value;
                        }
                    }
                    break;
                }
                case "commaVisible":{
                    // meta.defaultValue = value;
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isFalseSet(tplNode.inputprops,meta.name,value);
                    }else{
                        //联动编辑表格合计列千分位
                        if(tplNode.total&&isEditItem){
                            tplNode.totalComma = value;
                        }
                        LogicUtils.isFalseSet(tplNode,meta.name,value);
                    }
                    break;
                }
                case "range":{
                    // meta.defaultValue = value;
                    if(isSearchItem){
                        delete tplNode[meta.name];
                        LogicUtils.isTrueSet(tplNode.inputprops,meta.name,value);
                    }else{
                        LogicUtils.isTrueSet(tplNode,meta.name,value);
                        LogicUtils.isExistSet(tplNode, 'defaultValue', value ? [] : null); //为了忘记在range模式下配置defaultValue准备
                    }
                    break;
                }
                case "showDecimal":
                case "enableCalc":
                case "symbol":
                case "addonAfter":
                case "direction":
                case "min":
                case "max":
                case "placeholder":
                case "minus":
                case "precisionConfig":
                    if(isSearchItem){
                        FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                    }
                    break;
            }
        }
    // }
}
