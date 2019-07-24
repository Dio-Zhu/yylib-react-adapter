import {UiTypeDef} from '../../../Defines';
import FormItemType from '../../forminputs/FormItemType';
import FormInputsUtil from '../FormInputsUtil';
import CurrencyToValues from '../currency/CurrencyToValues';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    if(tplNode.type=='currency'){
        return CurrencyToValues(options)
    } else {
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // BasePropToValues(options);//处理公共属性
        // }
        // //是否为表单项
        // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.number);
        // //是否为编辑项
        // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.number);
        //是否为搜索条件项
        var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem && tplNode.inputtype == FormItemType.number);
        // if(tplNode.uitype == UiTypeDef.inputnumber
        //     || isFormItem || isEditItem || isSearchItem ) {
            for(var i=0;i<formMeta.length;i++) {
                var meta = formMeta[i];
                if(!(meta.name in formData))continue;
                var value = formData[meta.name];
                switch (meta.name) {
                    case "defaultValue":
                    case "min":
                    case "max":
                    case "addonAfter":
                    case "direction":
                    case "placeholder":
                    case "range":
                        if(isSearchItem){
                            FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                        }
                        break;
                }
            }
        }
    // }
}
