module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.imageupload||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
        for(var i=0;i<formMeta.length;i++){
            var meta = formMeta[i];
            switch(meta.name){
                // case "buttonText":{
                //     meta.defaultValue = tplNode.buttonText!==undefined?tplNode.buttonText:meta.defaultValue;
                //     break;
                // }
                // case "maxCount":{
                //     meta.defaultValue = tplNode.maxCount!==undefined?tplNode.maxCount:meta.defaultValue;
                //     break;
                // }
                // case "maxWidth":{
                //     meta.defaultValue = tplNode.maxWidth!==undefined?tplNode.maxWidth:meta.defaultValue;
                //     break;
                // }
                // case "maxHeight":{
                //     meta.defaultValue = tplNode.maxHeight!==undefined?tplNode.maxHeight:meta.defaultValue;
                //     break;
                // }
                // case "maxType":{
                //     meta.defaultValue = tplNode.maxType!==undefined?tplNode.maxType:meta.defaultValue;
                //     break;
                // }
                case "billType":{
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if(tplNode.billName&&tplNode.billType){
                        newFormData[meta.name]={};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
                // case "sourceType":{
                //     meta.defaultValue = tplNode.sourceType !== undefined ? tplNode.sourceType : meta.defaultValue;
                //     break;
                // }
                // case "deleteTip": {
                //     meta.defaultValue=tplNode.deleteTip!==undefined?tplNode.deleteTip:meta.defaultValue;
                //     break;
                // }
            }
        }
    // }
    return newFormData;
}
