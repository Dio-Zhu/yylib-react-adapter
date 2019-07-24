import {LogicUtils} from '../../index-deps';
import FormInputsToValues from '../forminputs/FormInputsToValues';

//当uisubtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode){
    //需要保留的属性清单
    var keepProps = ['nid','uikey','uititle','uitype','className','uisubtype'
        ,'label','labelHelp','extra','pattern','patternMsg'
        ,'newline','rowBreak','required','labelCol','disabled','wrapperCol'
        ,'visible'
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
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":{
                // tplNode.label = value;
                LogicUtils.isExistSet(tplNode,'label',value);
                break;
            }
            case "uisubtype":{
                // meta.defaultValue = value;
                if(oldUiSubType !== value){
                    clearOtherProps(tplNode);//当uisubtype发生变更时清理属性
                }
                break;
            }
            // case "labelHelp":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "extra":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "pattern":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "patternMsg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "newline":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "rowBreak":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "labelCol":
            case "wrapperCol":
                if (meta.defaultValue === value) {
                    delete tplNode[meta.name];
                } else {
                    tplNode[meta.name] = {span: value};
                }
                break;
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //处理uisubtype特有属性
    if(typeof FormInputsToValues[tplNode.uisubtype]=='function'){
        FormInputsToValues[tplNode.uisubtype](options);
    }
};
