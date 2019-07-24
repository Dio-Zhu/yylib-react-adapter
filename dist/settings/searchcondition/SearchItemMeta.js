'use strict';

var _Defines = require('../../Defines');

var _indexDeps = require('../../index-deps');

var _FormInputsMeta = require('../forminputs/FormInputsMeta');

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operations = {
    'eq': '等于',
    'ne': '不等于',
    'lt': '小于',
    'le': '小于等于',
    'gt': '大于',
    'ge': '大于等于',
    'bw': '开始于',
    'in': '属于',
    'ni': '不属于',
    'cn': '包含',
    'bt': '介于'
};

function makeOpers(operations) {
    var options = [];
    for (var key in operations) {
        if (operations.hasOwnProperty(key)) {
            options.push({ text: operations[key], value: key });
        }
    }
    return options;
}
module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'fieldtype',
        label: '字段类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '字符串', value: 'string' }, { text: '字符串数组', value: 'arraystring' }, { text: '数字', value: 'number' }, { text: '精确数值', value: 'currency' }, { text: '日期', value: 'date' }, { text: '布尔', value: 'boolean' }]
        },
        defaultValue: 'string'
    }, {
        name: 'inputtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: _Defines.FormItemType.input, text: _Defines.UiTitleDef.input }, { value: _Defines.FormItemType.date, text: _Defines.UiTitleDef.datepicker }, { value: _Defines.FormItemType.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _Defines.FormItemType.switch, text: _Defines.UiTitleDef.switch }, { value: _Defines.FormItemType.select, text: _Defines.UiTitleDef.select }, { value: _Defines.FormItemType.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _Defines.FormItemType.number, text: _Defines.UiTitleDef.inputnumber }, { value: _Defines.FormItemType.currency, text: _Defines.UiTitleDef.currency }, { value: _Defines.FormItemType.autoselect, text: _Defines.UiTitleDef.autoselect }]
        },
        defaultValue: _Defines.FormItemType.input
    }, {
        name: 'oper',
        label: '操作集合',
        type: _indexDeps.MetaType.Select,
        props: {

            multiple: true,
            options: makeOpers(operations)
        },
        defaultValue: []
    }, {
        name: 'hidden',
        label: '隐藏条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'required',
        label: '必填条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'readonly',
        label: '必填只读',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableSearch',
        label: '支持搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrder',
        label: '支持排序',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'preFunction',
        label: '预置函数',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'defdoc-query-treegrid',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }];
    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前inputtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.inputtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;
    return formMeta;
};