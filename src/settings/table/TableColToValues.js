import {LogicUtils} from '../../index-deps';
import {UiTypeDef} from '../../Defines';
import FormItemType from '../forminputs/FormItemType';
import {tableColSpan} from './TableUtils';
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    tplNode.dataprops=tplNode.dataprops||{};
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":{
                LogicUtils.isExistSet(tplNode,'key',value);
                LogicUtils.isExistSet(tplNode,'dataIndex',value);
                break;
            }
            case "uititle":{
                LogicUtils.isExistSet(tplNode,'uititle',value);
                LogicUtils.isExistSet(tplNode,'title',value);
                break;
            }
            // case "fieldtype":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['date','boolean','number','currency']);
            //     break;
            // }
            case "uisubtype":{
                // meta.defaultValue = value;
                // LogicUtils.isExistSet(tplNode,meta.name,value);
                if(tplNode.uisubtype===FormItemType.date){
                    tplNode.format = 'yyyy-MM-dd';
                }
                break;
            }
            // case "titleAlign":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            case "align":{
                if(tplNode.fieldtype=='number'||tplNode.fieldtype=='currency'){
                    value = formData[meta.name]!==undefined?formData[meta.name]:'right';
                    // meta.defaultValue = value;
                    LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','center']);//默认右对齐
                }else{
                    value = formData[meta.name]!==undefined?formData[meta.name]:'left';
                    // meta.defaultValue = value;
                    LogicUtils.isIncludeSet(tplNode,meta.name,value,['right','center']);//默认左对齐
                }
                break;
            }
            // case "isShow":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "total":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "totalDecimal":{
                // meta.defaultValue = value;
                if(tplNode.total&&value>=0){
                    tplNode.totalDecimal = value;
                }else{
                    delete tplNode.totalDecimal
                }
                break;
            }
            // case "innerFilter":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "dummyField":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "linkUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "linkType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['_blank']);
            //     break;
            // }
            // case "width":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "colSpan":{
                // 区分被合并,不合并,合并列
                // meta.defaultValue = value;
                tplNode.colSpan = value;
                if(value < 1){
                    if(value === -1){
                        delete tplNode.colSpan;
                    }
                    delete tplNode.titleGroup;
                }
                break;
            }
            case "titleGroup":{
                if(tplNode.colSpan && tplNode.colSpan > 0){
                    // meta.defaultValue = value;
                    LogicUtils.isExistSet(tplNode,meta.name,value);
                }
                break;
            }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "color":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "orderby":{
                // meta.defaultValue = value;
                delete tplNode[meta.name];
                if(value){
                    tplNode.dataprops.orderby = value;
                }else{
                    delete tplNode.dataprops.orderby;
                }
                break;
            }
            // case "fixed":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            // case "comma":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            case "decimal":{
                // meta.defaultValue = value;
                if(tplNode.fieldtype=='currency'){
                    LogicUtils.isExistSet(tplNode,meta.name,value);
                }else{
                    delete tplNode.decimal;
                }
                break;
            }
            case "showDecimal":{
                // meta.defaultValue = value;
                if(tplNode.fieldtype=='currency'){
                    LogicUtils.isExistSet(tplNode,meta.name,value);
                }else{
                    delete tplNode.showDecimal;
                }
                break;
            }
            case "zeroFilling":{
                // meta.defaultValue = value;
                if(tplNode.fieldtype=='currency'){
                    LogicUtils.isFalseSet(tplNode,meta.name,value);
                }else{
                    delete tplNode.zeroFilling;
                }
                break;
            }
            case "precisionConfig":{
                // meta.defaultValue = value;
                if(tplNode.fieldtype=='currency'){
                    LogicUtils.isExistSet(tplNode,meta.name,value);
                }else{
                    delete tplNode.precisionConfig;
                }
                break;
            }
            case "referInfo":{//参照编码
                if((typeof value == 'object')&&tplNode.uisubtype===FormItemType.inputrefer){
                    // meta.defaultValue={};
                    // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                    // meta.defaultValue.name = value.refName ? value.refName : value.name;
                    // meta.defaultValue.id = value.refId?value.refId:value.id;
                    tplNode.referInfo = {};
                    tplNode.referInfo.code=value.refCode ? value.refCode : value.code;
                    tplNode.referInfo.name=value.refName ? value.refName : value.name;
                    tplNode.referInfo.id=value.refId ? value.refId : value.id;
                }else{
                    // meta.defaultValue=null;
                    delete tplNode.referInfo;
                }
                break;
            }
            case "enumInfo": {//档案编码
                if ((typeof value == 'object')&&tplNode.uisubtype===FormItemType.enumselect) {
                    // meta.defaultValue = {};
                    // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                    // meta.defaultValue.name = value.refName?value.refName:value.name;
                    // meta.defaultValue.id = value.refId?value.refId:value.id;
                    tplNode.enumInfo = {};
                    tplNode.enumInfo.code = value.refCode?value.refCode:value.code;
                    tplNode.enumInfo.name = value.refName?value.refName:value.name;
                    tplNode.enumInfo.id = value.refId?value.refId:value.id;
                } else {
                    // meta.defaultValue=null;
                    delete tplNode.enumInfo;
                }
                break;
            }
            case "format":{//日期格式
                // meta.defaultValue = value;
                if (tplNode.uisubtype===FormItemType.date) {
                    tplNode.format = value;
                }else{
                    delete tplNode.format;
                }
                break;
            }
            // case "sorterEnable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "titleTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if(!Object.keys(tplNode.dataprops).length){
        delete tplNode.dataprops;
    }
    //级联设置后面相关字段为被合并
    if(tplNode.uitype === UiTypeDef.tablecol&&tplNode.colSpan>0){
        tableColSpan(tplTree,tplNode)
    }
};
