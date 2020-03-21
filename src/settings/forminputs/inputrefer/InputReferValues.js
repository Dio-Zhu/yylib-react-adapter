import {UiTypeDef} from '../../../MyUiDefines';
module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.inputrefer ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.inputrefer||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
        //参照扩展的配置项
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "refinfokey": {
                    if (isSearchItem) {
                        // if(tplNode.inputprops&&tplNode.inputprops.refinfokey) {
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.inputprops.refinfokey;
                        //     meta.defaultValue.name = tplNode.inputprops.refName;
                        //     meta.defaultValue.id = tplNode.inputprops.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].id = tplNode.inputprops.refId;
                            newFormData[meta.name].code = tplNode.inputprops.refinfokey;
                            newFormData[meta.name].name = tplNode.inputprops.refName;
                        }
                    } else {
                        // if (tplNode.refinfokey){
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.refinfokey;
                        //     meta.defaultValue.name = tplNode.refName;
                        //     meta.defaultValue.id = tplNode.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode[meta.name] !== undefined) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].id = tplNode.refId;
                            newFormData[meta.name].code = tplNode.refinfokey;
                            newFormData[meta.name].name = tplNode.refName;
                        }
                    }
                    break;
                }
                case "multiselect":
                case "searchPlaceholder":
                case "checkControl":
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