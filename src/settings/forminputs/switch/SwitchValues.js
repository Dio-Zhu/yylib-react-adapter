import {UiTypeDef} from '../../../MyUiDefines';

module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = (tplNode.uitype == UiTypeDef.searchitem);
    // //处理特有属性
    // if(
    //     tplNode.uitype == UiTypeDef.switch||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem
    // ) {
        for(var i=0;i<(formMeta||[]).length;i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "defaultChecked":
                case "checkedChildren":
                case "unCheckedChildren":
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