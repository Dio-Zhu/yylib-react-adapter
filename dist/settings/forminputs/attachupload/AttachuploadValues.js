"use strict";

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.attachupload//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    // ){
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "action":{
            //     meta.defaultValue = tplNode.action !== undefined ? tplNode.action : meta.defaultValue;
            //     break;
            // }
            // case "showUploadList":{
            //     meta.defaultValue = tplNode.showUploadList!==undefined?tplNode.showUploadList:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue = tplNode.enableUser!==undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "buttonText":{
            //     meta.defaultValue = tplNode.buttonText!==undefined?tplNode.buttonText:meta.defaultValue;
            //     break;
            // }
            // case "multiple":{
            //     meta.defaultValue = tplNode.multiple!==undefined?tplNode.multiple:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "sourceType":{
            //     meta.defaultValue = tplNode.sourceType !== undefined ? tplNode.sourceType : meta.defaultValue;
            //     break;
            // }
            // case "btnType":{
            //     meta.defaultValue=tplNode.btnType!==undefined?tplNode.btnType:meta.defaultValue;
            //     break;
            // }
            // case "deleteTip": {
            //     meta.defaultValue=tplNode.deleteTip!==undefined?tplNode.deleteTip:meta.defaultValue;
            //     break;
            // }
            // case "accept": {
            //     meta.defaultValue=tplNode.accept!==undefined?tplNode.accept:meta.defaultValue;
            //     break;
            // }
        }
    }
    // }
    return newFormData;
};