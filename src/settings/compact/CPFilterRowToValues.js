module.exports = function (options) {
    const {formMeta, formData, tplNode, tplTree} = options;
    for (let i = 0; i < formMeta.length; i++) {
        let meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case 'title': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'rowKey': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'multiple': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            case "referObj": {
                delete tplNode[meta.name];
                if (typeof value == 'object') {
                    // meta.defaultValue = {};
                    // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                    // meta.defaultValue.name = value.refName ? value.refName : value.name;
                    // meta.defaultValue.id = value.refId ? value.refId : value.id;
                    tplNode.code = value.refCode ? value.refCode : value.code;
                    tplNode.refName = value.refName ? value.refName : value.name;
                    tplNode.refId = value.refId ? value.refId : value.id;
                } else {
                    delete tplNode.code;
                    delete tplNode.refName;
                    delete tplNode.refId;
                }
                break;
            }
            // case "serverUrl": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "enableOrg": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
        }
    }
};
