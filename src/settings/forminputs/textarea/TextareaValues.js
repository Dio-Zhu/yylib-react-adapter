
module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.textarea ){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(
    //     tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
        for(var i=0;i<formMeta.length;i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "autosize":{
                    // if (typeof tplNode.autosize == 'object') {
                    //     formMeta[_.findIndex(formMeta, {name: 'minRows'})].defaultValue = tplNode.autosize.minRows || '';
                    //     formMeta[_.findIndex(formMeta, {name: 'maxRows'})].defaultValue = tplNode.autosize.maxRows || '';
                    // }
                    // meta.defaultValue = tplNode.autosize != undefined ? tplNode.autosize : meta.defaultValue;
                    newFormData[meta.name] = !!tplNode.autosize;
                    break;
                }
                case "minRows":{
                    newFormData[meta.name] = tplNode.autosize?tplNode.autosize.minRows || '':'';
                    break;
                }
                case "maxRows":{
                    newFormData[meta.name] = tplNode.autosize?tplNode.autosize.maxRows || '':'';
                    break;
                }
                // case "maxLength":{
                //     meta.defaultValue = tplNode.maxLength != undefined ? tplNode.maxLength : meta.defaultValue;
                //     break;
                // }
                // case "placeholder":{
                //     meta.defaultValue = tplNode.placeholder != undefined ? tplNode.placeholder : meta.defaultValue;
                //     break;
                // }
                // case "showTitle":{
                //     meta.defaultValue = tplNode.showTitle != undefined ? tplNode.showTitle : meta.defaultValue;
                //     break;
                // }
            }
        }
    // }
    return newFormData;
}