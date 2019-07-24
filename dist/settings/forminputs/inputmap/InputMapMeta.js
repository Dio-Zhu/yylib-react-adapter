"use strict";

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputmap){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputmap||
    //     tplNode.uitype == UiTypeDef.formitemw
    //     //||tplNode.uitype == UiTypeDef.edititemw
    //     //||tplNode.uitype == UiTypeDef.searchitem
    // ) {
    //     //PropMeta = PropMeta.concat([//扩展的配置
    //     //]);
    // }
    return PropMeta;
};