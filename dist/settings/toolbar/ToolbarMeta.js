'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
    var PropMeta = [{
        name: 'align',
        label: '对齐方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: 'left'
    }, {
        name: 'enableAffix',
        label: '固定',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};