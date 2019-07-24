"use strict";

module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     //meta.defaultValue.id =
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
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!=undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
            // case "enableUnSelect":{
            //     meta.defaultValue=tplNode.enableUnSelect!=undefined?tplNode.enableUnSelect:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};