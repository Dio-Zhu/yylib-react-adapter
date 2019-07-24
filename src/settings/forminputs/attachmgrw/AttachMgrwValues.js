module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // newFormData = BasePropValues(options);//处理公共属性
    // }
    //处理特有属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw) {
        for(var i=0;i<formMeta.length;i++){
            var meta = formMeta[i];
            switch(meta.name){
                // case "buttonText": {
                //     meta.defaultValue=tplNode.buttonText!=undefined?tplNode.buttonText:meta.defaultValue;
                //     break;
                // }
                // case "serverUrl":{
                //     meta.defaultValue=tplNode.serverUrl!=undefined?tplNode.serverUrl:meta.defaultValue;
                //     break;
                // }
                // case "sourceId":{
                //     meta.defaultValue=tplNode.sourceId!=undefined?tplNode.sourceId:meta.defaultValue;
                //     break;
                // }
                // case "sourceType":{
                //     meta.defaultValue=tplNode.sourceType!=undefined?tplNode.sourceType:meta.defaultValue;
                //     break;
                // }
                case "billType":{
                    // if(tplNode.billType){
                    //     meta.defaultValue = {}
                    //     meta.defaultValue.code = tplNode.billType
                    //     meta.defaultValue.name = tplNode.billTypeName
                    //     meta.defaultValue.id = tplNode.billTypeId
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if(tplNode[meta.name]) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.billTypeId;
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billTypeName;
                    }
                    break;
                }
                // case "readOnly":{
                //     meta.defaultValue=tplNode.readOnly!=undefined?tplNode.readOnly:meta.defaultValue;
                //     break;
                // }
                // case "enableUser":{
                //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
                //     break;
                // }
                // case "fileTypes":{
                //     meta.defaultValue=tplNode.fileTypes!=undefined?tplNode.fileTypes:meta.defaultValue;
                //     break;
                // }
                // case "showUploadBtn":{
                //     meta.defaultValue=tplNode.showUploadBtn!=undefined?tplNode.showUploadBtn:meta.defaultValue;
                //     break;
                // }
                // case "multiple":{
                //     meta.defaultValue=tplNode.multiple!=undefined?tplNode.multiple:meta.defaultValue;
                //     break;
                // }
                // case "showDelBtn":{
                //     meta.defaultValue=tplNode.showDelBtn!=undefined?tplNode.showDelBtn:meta.defaultValue;
                //     break;
                // }
                // case "align":{
                //     meta.defaultValue=tplNode.align!=undefined?tplNode.align:meta.defaultValue;
                //     break;
                // }
                //
                // case "btnType":{
                //     meta.defaultValue=tplNode.btnType!=undefined?tplNode.btnType:meta.defaultValue;
                //     break;
                // }
                // case "btnGhost":{
                //     meta.defaultValue=tplNode.btnGhost!=undefined?tplNode.btnGhost:meta.defaultValue;
                //     break;
                // }
                // case "fileLengthVisible":{
                //     meta.defaultValue=tplNode.fileLengthVisible!=undefined?tplNode.fileLengthVisible:meta.defaultValue;
                //     break;
                // }
                // case "deleteTip": {
                //     meta.defaultValue=tplNode.deleteTip!=undefined?tplNode.deleteTip:meta.defaultValue;
                //     break;
                // }
                // case "accept": {
                //     meta.defaultValue=tplNode.accept!==undefined?tplNode.accept:meta.defaultValue;
                //     break;
                }
            }
    //     }
    // }
    return newFormData;
};
