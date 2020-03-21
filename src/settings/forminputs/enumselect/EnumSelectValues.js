import {UiTypeDef} from '../../../MyUiDefines';

module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);

    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.enumselect//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||isSearchItem//条件项
    // ) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "referObj":{
                    // meta.defaultValue = {};
                    // if(isSearchItem){
                    //     meta.defaultValue.code = tplNode.inputprops.code;
                    //     meta.defaultValue.name = tplNode.inputprops.refName;
                    //     meta.defaultValue.id = tplNode.inputprops.refId;
                    // }else{
                    //     meta.defaultValue.code = tplNode.code;
                    //     meta.defaultValue.name = tplNode.refName;
                    //     meta.defaultValue.id = tplNode.refId;
                    // }
                    if(isSearchItem){
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.inputprops.code;
                        newFormData[meta.name].name = tplNode.inputprops.refName;
                        newFormData[meta.name].id = tplNode.inputprops.refId;
                    }else{
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.code;
                        newFormData[meta.name].name = tplNode.refName;
                        newFormData[meta.name].id = tplNode.refId;
                    }
                    break;
                }
                case "defaultValue":
                case "defaultActiveFirstOption":
                case "serverUrl":
                case "enableOrg":
                case "allowClear":
                case "valueType":
                case "valueKey":
                case "multiple":
                case "placeholder":
                    if(isSearchItem) {
                        if(tplNode.inputprops && tplNode.inputprops[meta.name]!==undefined){
                            newFormData[meta.name] = tplNode.inputprops[meta.name];
                        }
                    }
                    break;
            }
        }
    // }
    return newFormData;
}