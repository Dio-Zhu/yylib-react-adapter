import {LogicUtils} from '../../index-deps';
import FormItemType from '../forminputs/FormItemType';
import FormInputsToValues from '../forminputs/FormInputsToValues';
import {tableColSpan} from '../table/TableUtils';
//当uisubtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode){
    //需要保留的属性清单
    var keepProps = ['nid','uikey','uititle','uitype','className','uisubtype'
        ,'key','dataIndex','title','isShow','width','titleAlign','align','colSpan'
        ,'titleGroup','editable','helpTip','editTip','fixed','total','totalDecimal','comma'
        ,'sorterEnable','titleTip'
    ];
    //需要清理的属性清单
    var removeProps = [];
    for(var key in tplNode){
        if(!Array.includes(keepProps,key))removeProps.push(key);
    }
    //console.log('需要清理的属性：',removeProps);
    //执行清理
    for(var idx in removeProps){
        delete tplNode[removeProps[idx]];
    }
}
module.exports = function(options){
    var {formMeta,formData,tplNode,tplTree} = options;
    var oldUiSubType = tplNode.uisubtype;
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        //保证formMeta数据值和表单数据值一致
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
                break;
            }
            // case "isShow":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "patternMsg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "pattern":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "uisubtype":{
                // meta.defaultValue = value;
                if(oldUiSubType !== value){
                    clearOtherProps(tplNode);//当uisubtype发生变更时清理属性
                }
                break;
            }
            // case "titleAlign":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            case "align":{
                if(tplNode.uisubtype==FormItemType.number||tplNode.uisubtype==FormItemType.currency){
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
            // case "comma":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
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
            // case "helpTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "editTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "editable": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "fixed":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            // case "cellFill": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
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
    //级联设置后面相关字段为被合并
    if(tplNode.colSpan>0){
        tableColSpan(tplTree,tplNode)
    }
    //处理uisubtype特有属性
    if(typeof FormInputsToValues[tplNode.uisubtype]=='function'){
        FormInputsToValues[tplNode.uisubtype](options);
    }
};
