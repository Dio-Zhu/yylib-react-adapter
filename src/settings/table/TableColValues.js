
module.exports = function(options){
    var newFormData = {};//处理公共属性
    var {formMeta,tplNode,tplTree} = options;
    tplNode.dataprops=tplNode.dataprops||{};
    for(var i=0;i<formMeta.length;i++){
        var meta = formMeta[i];
        switch(meta.name){
            // case "title":{
            //     meta.defaultValue=tplNode.uititle!==undefined?tplNode.uititle:meta.defaultValue;
            //     break;
            // }
            // case "isShow":{
            //     meta.defaultValue=tplNode.isShow!==undefined?tplNode.isShow:meta.defaultValue;
            //     break;
            // }
            // case "fieldtype":{
            //     meta.defaultValue=tplNode.fieldtype!==undefined?tplNode.fieldtype:meta.defaultValue;
            //     break;
            // }
            // case "uisubtype":{
            //     meta.defaultValue = tplNode.uisubtype!==undefined?tplNode.uisubtype:meta.defaultValue;
            //     break;
            // }
            // case "titleAlign":{
            //     meta.defaultValue=tplNode.titleAlign!==undefined?tplNode.titleAlign:meta.defaultValue;
            //     break;
            // }
            // case "align":{
            //     meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
            //     break;
            // }
            // case "total":{
            //     meta.defaultValue=tplNode.total!==undefined?tplNode.total:meta.defaultValue;
            //     break;
            // }
            // case "totalDecimal":{
            //     meta.defaultValue=tplNode.totalDecimal!==undefined?tplNode.totalDecimal:meta.defaultValue;
            //     break;
            // }
            // case "dummyField":{
            //     meta.defaultValue=tplNode.dummyField!==undefined?tplNode.dummyField:meta.defaultValue;
            //     break;
            // }
            // case "width":{
            //     meta.defaultValue=tplNode.width!==undefined?tplNode.width:meta.defaultValue;
            //     break;
            // }
            // case "linkUrl":{
            //     meta.defaultValue=tplNode.linkUrl!==undefined?tplNode.linkUrl:meta.defaultValue;
            //     break;
            // }
            // case "linkType":{
            //     meta.defaultValue=tplNode.linkType!==undefined?tplNode.linkType:meta.defaultValue;
            //     break;
            // }
            // case "innerFilter":{
            //     meta.defaultValue=tplNode.innerFilter!==undefined?tplNode.innerFilter:meta.defaultValue;
            //     break;
            // }
            // case "colSpan":{
            //     meta.defaultValue=tplNode.colSpan!==undefined?tplNode.colSpan:meta.defaultValue;
            //     break;
            // }
            // case "titleGroup":{
            //     meta.defaultValue=tplNode.titleGroup!==undefined?tplNode.titleGroup:meta.defaultValue;
            //     break;
            // }
            // case "mathFormula":{//数学计算公式
            //     meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
            //     break;
            // }
            // case "color":{
            //     meta.defaultValue=tplNode.color!==undefined?tplNode.color:meta.defaultValue;
            //     break;
            // }
            // case "fixed":{
            //     meta.defaultValue=tplNode.fixed!==undefined?tplNode.fixed:meta.defaultValue;
            //     break;
            // }
            // case "orderby":{
            //    if(tplNode.dataprops&&tplNode.dataprops.orderby){
            //        meta.defaultValue=tplNode.dataprops.orderby;
            //    }else{
            //        meta.defaultValue='';
            //    }
            //    break;
            //}
            // case "comma":{
            //     meta.defaultValue = tplNode.comma !== undefined ? tplNode.comma : meta.defaultValue;
            //     break;
            // }
            // case "decimal":{
            //     meta.defaultValue = tplNode.decimal !== undefined ? tplNode.decimal : meta.defaultValue;
            //     break;
            // }
            // case "showDecimal":{
            //     meta.defaultValue = tplNode.showDecimal!==undefined?tplNode.showDecimal:meta.defaultValue;
            //     break;
            // }
            // case "zeroFilling":{
            //     meta.defaultValue = tplNode.zeroFilling !== undefined ? tplNode.zeroFilling : meta.defaultValue;
            //     break;
            // }
            // case "precisionConfig":{
            //     meta.defaultValue = tplNode.precisionConfig !== undefined ? tplNode.precisionConfig : meta.defaultValue;
            //     break;
            // }
            case "referInfo":{//参照信息
                // if (tplNode.referInfo){
                //     meta.defaultValue = {};
                //     meta.defaultValue.code = tplNode.referInfo.code;
                //     meta.defaultValue.name = tplNode.referInfo.name;
                //     meta.defaultValue.id = tplNode.referInfo.id;
                // }else{
                //     meta.defaultValue=null;
                // }
                if(tplNode[meta.name]!==undefined) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode[meta.name].id;
                    newFormData[meta.name].code = tplNode[meta.name].code;
                    newFormData[meta.name].name = tplNode[meta.name].name;
                }
                break;
            }
            case "enumInfo":{//档案信息
                // if (tplNode.enumInfo){
                //     meta.defaultValue = {};
                //     meta.defaultValue.code = tplNode.enumInfo.code;
                //     meta.defaultValue.name = tplNode.enumInfo.name;
                //     meta.defaultValue.id = tplNode.enumInfo.id;
                // }else{
                //     meta.defaultValue=null;
                // }
                if(tplNode[meta.name]!==undefined) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode[meta.name].id;
                    newFormData[meta.name].code = tplNode[meta.name].code;
                    newFormData[meta.name].name = tplNode[meta.name].name;
                }
                break;
            }
            // case "format":{//日期格式
            //     meta.defaultValue = tplNode.format!==undefined?tplNode.format:meta.defaultValue;
            //     break;
            // }
            // case "sorterEnable":{
            //     meta.defaultValue=tplNode.sorterEnable!==undefined?tplNode.sorterEnable:meta.defaultValue;
            //     break;
            // }
            // case "titleTip":{
            //     meta.defaultValue=tplNode.titleTip!==undefined?tplNode.titleTip:meta.defaultValue;
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if(!Object.keys(tplNode.dataprops).length){
        delete tplNode.dataprops;
    }
    return newFormData;
};
