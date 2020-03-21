import {UiTypeDef} from '../../../MyUiDefines';
import CurrencyValues from '../currency/CurrencyValues';

module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    if(tplNode.type=='currency'){
        return CurrencyValues(options)
    } else {
        // //处理公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // newFormData = BasePropValues(options);
        // }
        //是否为搜索条件项
        var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);
        // //处理特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||isSearchItem//条件项
        // ) {
            for(var i=0;i<(formMeta||[]).length;i++) {
                var meta = formMeta[i];
                switch (meta.name) {
                    case "defaultValue":
                    case "min":
                    case "max":
                    case "addonAfter":
                    case "direction":
                    case "placeholder":
                    case "range":
                        if(isSearchItem) {
                            if(tplNode.inputprops && tplNode.inputprops[meta.name]!==undefined){
                                newFormData[meta.name] = tplNode.inputprops[meta.name];
                            }
                        }
                        break;
                }
            }
        }
    // }
    return newFormData;
}
