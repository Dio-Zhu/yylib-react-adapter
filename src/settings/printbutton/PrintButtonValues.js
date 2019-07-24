module.exports = function(options){
    var newFormData = {};//处理公共属性
    var {formMeta,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
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
            // case "serverUrl":{
            //     meta.defaultValue=tplNode.serverUrl!==undefined?tplNode.serverUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!==undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
            // case "align":{
            //     meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};
