import {LogicUtils} from '../../../index-deps';

module.exports = function (options) {
    var {formMeta, formData, tplNode, tplTree} = options;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle": {
                LogicUtils.isExistSet(tplNode, 'buttonText', value);
                break;
            }
            case "specialTag": {
                //行操作按钮默认隐藏
                if (value && value.code == 'lineBtn') {
                    tplNode.visible = false;
                    formData['visible'] = false;
                } else {
                    delete tplNode.visible;
                }
                break;
            }
            // case "icon": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "type": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode, meta.name, value, ['primary', 'success', 'error', 'warning']);
            //     break;
            // }
            // case "visible": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "disabled": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "ghost": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            case "refinfokey": {
                if (value) {
                    // meta.defaultValue = {};
                    // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                    // meta.defaultValue.name = value.refName ? value.refName : value.name;
                    // meta.defaultValue.id = value.refId ? value.refId : value.id;
                    tplNode.refinfokey = value.refCode ? value.refCode : value.code;
                    tplNode.refName = value.refName ? value.refName : value.name;
                    tplNode.refId = value.refId ? value.refId : value.id;
                } else {
                    // meta.defaultValue = null;
                    delete tplNode.refinfokey;
                    delete tplNode.refName;
                    delete tplNode.refId;
                }
                break;
            }
            // case "multiselect": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "searchPlaceholder": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "checkControl": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name, value);
            //     break;
            // }
        }
    }
};
