module.exports = function (options) {
    const {formMeta, formData, tplNode, tplTree} = options;
    for (let i = 0; i < formMeta.length; i++) {
        let meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case 'type':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'compare':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'text': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'value': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'disabled': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            case 'preFunction': {
                delete tplNode[meta.name];
                if (typeof value == 'object') {
                    // meta.defaultValue = {};
                    // meta.defaultValue.id = value.id;
                    // meta.defaultValue.name = value.name;
                    // meta.defaultValue.code = value.code;
                    tplNode.funcId = value.id;
                    tplNode.funcCode = value.code;
                    tplNode.funcName = value.name;
                } else {
                    delete tplNode.funcId;
                    delete tplNode.funcCode;
                    delete tplNode.funcName;
                }
                break;
            }
        }
    }
};
