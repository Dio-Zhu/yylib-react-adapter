"use strict";

module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue=tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "billTypeId":
                {
                    // if(tplNode.billName&&tplNode.billTypeId){
                    //     meta.defaultValue={};
                    //     // billtypeid和billtypeCode
                    //     meta.defaultValue.id = tplNode.billRefId;
                    //     meta.defaultValue.code = tplNode.billTypeId;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }

                    if (tplNode[meta.name]) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.billRefId;
                        newFormData[meta.name].code = tplNode.billTypeId;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "serUrl":{
            //     meta.defaultValue=tplNode.serUrl!==undefined?tplNode.serUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!==undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!==undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};