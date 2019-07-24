module.exports = function (options) {
    var {formMeta, tplNode, tplTree} = options;
    //处理公共属性
    var newFormData = {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "disabled": {
            //     meta.defaultValue = tplNode.visible !== undefined ? tplNode.visible : meta.defaultValue;
            //     break;
            // }
            // case "visible": {
            //     meta.defaultValue = tplNode.visible !== undefined ? tplNode.visible : meta.defaultValue;
            //     break;
            // }
            // case "icon": {
            //     meta.defaultValue = tplNode.icon !== undefined ? tplNode.icon : meta.defaultValue;
            //     break;
            // }
            // case "type": {
            //     meta.defaultValue = tplNode.type !== undefined ? tplNode.type : meta.defaultValue;
            //     break;
            // }
            // case "ghost": {
            //     meta.defaultValue = tplNode.ghost !== undefined ? tplNode.ghost : meta.defaultValue;
            //     break;
            // }
            case "refinfokey": {
                // if (tplNode.refinfokey) {
                //     meta.defaultValue = {};
                //     meta.defaultValue.code = tplNode.refinfokey;
                //     meta.defaultValue.name = tplNode.refName;
                //     meta.defaultValue.id = tplNode.refId;
                // } else {
                //     meta.defaultValue = null;
                // }
                if (tplNode.refinfokey) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].code = tplNode.refinfokey;
                    newFormData[meta.name].name = tplNode.refName;
                    newFormData[meta.name].id = tplNode.refId;
                }
                break;
            }
            // case "multiselect": {
            //     meta.defaultValue = tplNode.multiselect != undefined ? tplNode.multiselect : meta.defaultValue;
            //     break;
            // }
            // case "searchPlaceholder": {
            //     meta.defaultValue = tplNode.searchPlaceholder != undefined ? tplNode.searchPlaceholder : meta.defaultValue;
            //     break;
            // }
            // case "checkControl": {
            //     meta.defaultValue = tplNode.checkControl != undefined ? tplNode.checkControl : meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
}

