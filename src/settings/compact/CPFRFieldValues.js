module.exports = function (options) {
    let newFormData = {};
    const {formMeta, tplNode, tplTree} = options;
    for (let i = 0; i < formMeta.length; i++) {
        let meta = formMeta[i];
        switch (meta.name) {
            // case 'type': {
            //     meta.defaultValue = tplNode.type !== undefined ? tplNode.type : meta.defaultValue;
            //     break;
            // }
            // case 'compare': {
            //     meta.defaultValue = tplNode.compare !== undefined ? tplNode.compare : meta.defaultValue;
            //     break;
            // }
            // case 'text': {
            //     meta.defaultValue = tplNode.text !== undefined ? tplNode.text : meta.defaultValue;
            //     break;
            // }
            // case 'value': {
            //     meta.defaultValue = tplNode.value !== undefined ? tplNode.value : meta.defaultValue;
            //     break;
            // }
            // case 'disabled': {
            //     meta.defaultValue = tplNode.disabled !== undefined ? tplNode.disabled : meta.defaultValue;
            //     break;
            // }
            case 'preFunction': {
                // if (tplNode.funcId && tplNode.funcCode && tplNode.funcName) {
                //     meta.defaultValue = {};
                //     meta.defaultValue.id = tplNode.funcId;
                //     meta.defaultValue.code = tplNode.funcCode;
                //     meta.defaultValue.name = tplNode.funcName;
                // } else {
                //     meta.defaultValue = null;
                // }
                if (tplNode.funcId && tplNode.funcCode && tplNode.funcName) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode.funcId;
                    newFormData[meta.name].code = tplNode.funcCode;
                    newFormData[meta.name].name = tplNode.funcName;
                }
                break;
            }
        }
    }
    return newFormData;
};
