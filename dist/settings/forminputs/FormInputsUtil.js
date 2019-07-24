'use strict';

var _indexDeps = require('../../index-deps');

module.exports = {
    //搜索项的toValues处理逻辑
    isSearchItemToValues: function isSearchItemToValues(options) {
        var meta = options.meta,
            tplNode = options.tplNode,
            value = options.value;

        delete tplNode[meta.name];
        if (meta.defaultValue === value) {
            delete tplNode.inputprops[meta.name];
        } else {
            _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
        }
    }
};