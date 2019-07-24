import FormInputsValues from '../forminputs/FormInputsValues';
module.exports = function(options){
    var {formMeta,tplNode,tplTree} = options;
    var newFormData = {};//处理公共属性
    tplNode.dataprops = tplNode.dataprops||{};
    // for(var i=0;i<formMeta.length;i++){
    //     var meta = formMeta[i];
    //     switch(meta.name){
    //         case "isShow":{
    //             meta.defaultValue=tplNode.isShow!==undefined?tplNode.isShow:meta.defaultValue;
    //             break;
    //         }case "required":{
    //             meta.defaultValue=tplNode.required!==undefined?tplNode.required:meta.defaultValue;
    //             break;
    //         }case "patternMsg":{
    //             meta.defaultValue=tplNode.patternMsg!==undefined?tplNode.patternMsg:meta.defaultValue;
    //             break;
    //         }case "pattern":{
    //             meta.defaultValue=tplNode.pattern!==undefined?tplNode.pattern:meta.defaultValue;
    //             break;
    //         }
    //         case "uisubtype":{
    //             meta.defaultValue = tplNode.uisubtype?tplNode.uisubtype:meta.defaultValue;
    //             break;
    //         }
    //         case "width":{
    //             meta.defaultValue=tplNode.width!==undefined?tplNode.width:meta.defaultValue;
    //             break;
    //         }
    //         case "titleAlign":{
    //             meta.defaultValue=tplNode.titleAlign!==undefined?tplNode.titleAlign:meta.defaultValue;
    //             break;
    //         }
    //         case "align":{
    //             meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
    //             break;
    //         }
    //         case "total":{
    //             meta.defaultValue=tplNode.total!==undefined?tplNode.total:meta.defaultValue;
    //             break;
    //         }
    //         case "totalDecimal":{
    //             meta.defaultValue=tplNode.totalDecimal!==undefined?tplNode.totalDecimal:meta.defaultValue;
    //             break;
    //         }
    //         case "comma":{
    //             meta.defaultValue = tplNode.comma !== undefined ? tplNode.comma : meta.defaultValue;
    //             break;
    //         }
    //         case "editable":{
    //             meta.defaultValue=tplNode.editable!==undefined?tplNode.editable:meta.defaultValue;
    //             break;
    //         }
    //         case "colSpan":{
    //             meta.defaultValue=tplNode.colSpan!==undefined?tplNode.colSpan:meta.defaultValue;
    //             break;
    //         }
    //         case "mathFormula":{//数学计算公式
    //             meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
    //             break;
    //         }
    //         case "titleGroup":{
    //             meta.defaultValue=tplNode.titleGroup!==undefined?tplNode.titleGroup:meta.defaultValue;
    //             break;
    //         }
    //         case "helpTip":{
    //             meta.defaultValue=tplNode.helpTip!==undefined?tplNode.helpTip:meta.defaultValue;
    //             break;
    //         }
    //         case "editTip":{
    //             meta.defaultValue=tplNode.editTip!==undefined?tplNode.editTip:meta.defaultValue;
    //             break;
    //         }
    //         case "fixed":{
    //             meta.defaultValue=tplNode.fixed!==undefined?tplNode.fixed:meta.defaultValue;
    //             break;
    //         }
    //         case "cellFill":{
    //             meta.defaultValue=tplNode.cellFill!==undefined?tplNode.cellFill:meta.defaultValue;
    //             break;
    //         }
    //         case "sorterEnable":{
    //             meta.defaultValue=tplNode.sorterEnable!==undefined?tplNode.sorterEnable:meta.defaultValue;
    //             break;
    //         }
    //         case "titleTip":{
    //             meta.defaultValue=tplNode.titleTip!==undefined?tplNode.titleTip:meta.defaultValue;
    //             break;
    //         }
    //     }
    // }

    //清理空对象dataprops
    if(!Object.keys(tplNode.dataprops).length){
        delete tplNode.dataprops;
    }

    //处理uisubtype特有属性
    if(typeof FormInputsValues[tplNode.uisubtype]=='function'){
        newFormData = Object.assign(newFormData,FormInputsValues[tplNode.uisubtype](options));
    }
    return newFormData;
};

