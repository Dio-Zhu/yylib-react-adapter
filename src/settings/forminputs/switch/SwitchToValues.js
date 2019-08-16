import {UiTypeDef} from '../../../Defines';
import FormInputsUtil from '../FormInputsUtil';

module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw);
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);

    // if(tplNode.uitype == UiTypeDef.switch || isFormItem || isEditItem || isSearchItem) {
        for(var i=0;i<formMeta.length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "defaultChecked":
                case "checkedChildren":
                case "unCheckedChildren":
                    if(isSearchItem){
                        FormInputsUtil.isSearchItemToValues({meta,tplNode,value});
                    }
                    break;
            }
        }
    // }
}