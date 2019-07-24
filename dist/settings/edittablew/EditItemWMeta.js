'use strict';

var _indexDeps = require('../../index-deps');

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = require('../../Defines');

var _FormItemType = require('../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsMeta = require('../forminputs/FormInputsMeta');

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;
    //编辑表格字段公共的属性

    var PropMeta = [{
        name: 'uisubtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: _FormItemType2.default.input, text: _Defines.UiTitleDef.input }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }, { value: _FormItemType2.default.time, text: _Defines.UiTitleDef.timepicker }, { value: _FormItemType2.default.rangepicker, text: _Defines.UiTitleDef.rangepicker }, { value: _FormItemType2.default.number, text: _Defines.UiTitleDef.inputnumber }, { value: _FormItemType2.default.currency, text: _Defines.UiTitleDef.currency }, { value: _FormItemType2.default.textarea, text: _Defines.UiTitleDef.textarea }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.switch, text: _Defines.UiTitleDef.switch }, { value: _FormItemType2.default.select, text: _Defines.UiTitleDef.select }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.cascader, text: _Defines.UiTitleDef.cascader }, { value: _FormItemType2.default.attachupload, text: _Defines.UiTitleDef.attachupload }, { value: _FormItemType2.default.autoselect, text: _Defines.UiTitleDef.autoselect }]
        },
        defaultValue: _FormItemType2.default.input
    }, {
        name: 'titleAlign',
        label: '标题对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: 'center'
    }, {
        name: 'align',
        label: '数据对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency ? 'right' : 'left'
    }, {
        name: 'width',
        label: '宽度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'isShow',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'required',
        label: '必填',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'total',
        label: '统计合计',
        help: '默认合计计算本列数据',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    if (tplNode.total) {
        PropMeta.push({
            name: 'totalDecimal',
            label: '合计精度',
            help: '定义合计数值保留的小数位,默认不保留小数位',
            type: _indexDeps.MetaType.Number,
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: 0
        });
    }

    PropMeta = PropMeta.concat([{
        name: 'editable',
        label: '支持编辑',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'cellFill',
        label: '支持填充',
        help: '是否支持单元格整列填充、向下填充、向上填充',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'mathFormula',
        label: '计算公式',
        type: _indexDeps.MetaType.MathFormula,
        props: {
            fields: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                (fieldsNode || []).forEach(function (node, index) {
                    //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                    if (tplNode.nid !== node.nid && !node.mathFormula) {
                        fields.push({ key: node.uikey, title: node.uititle });
                    }
                });
                return fields;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'sorterEnable',
        label: '默认排序',
        help: '根据数据类型自动预制排序函数',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'colSpan',
        label: '表头合并',
        type: _indexDeps.MetaType.Select,
        props: {

            options: function () {
                var opts = [{ value: -1, text: '不合并' }, { value: 0, text: '被合并' }];
                for (var i = 2; i <= 100; i++) {
                    opts.push({ value: i, text: '合并' + i + "列" });
                }
                return opts;
            }()
        },
        defaultValue: -1
    }]);
    //只有合并N列头才显示表头配置项
    if (tplNode.colSpan > 0) {
        PropMeta.push({
            name: 'titleGroup',
            label: '表头配置',
            type: _indexDeps.MetaType.TitleGroup,
            props: {},
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'fixed',
        label: '固定冻结',
        help: '注意：启用固定冻结列时需要明确配置各列[宽度]，并配置表格[横向滚动]宽度等于所有显示列宽度之和',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左冻结' }, { value: 'right', text: '右冻结' }, { value: 'noFixed', text: '不冻结' }]
        },
        defaultValue: 'noFixed'
    }, {
        name: 'titleTip',
        label: '标题提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'helpTip',
        label: '帮助提示',
        help: '非编辑态时显示辅助悬浮提示的信息内容',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'editTip',
        label: '编辑提示',
        help: '编辑态输入时显示辅助悬浮提示的信息内容',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }]);

    //千分位配置
    if (tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency) {
        PropMeta.push({
            name: 'comma',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    //文本框、金额框、整数框验证属性
    if (tplNode.uisubtype == _FormItemType2.default.input || tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency) {
        PropMeta.push({
            name: 'pattern',
            label: '正则验证',
            help: '如需进行一些特殊验证，填入相关正则表达式进行验证',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'patternMsg',
            label: '错误提示',
            type: _indexDeps.MetaType.Text,
            help: '正则验证不通过时给出的错误提示信息',
            props: {},
            defaultValue: ''
        });
    }

    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前uisubtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.uisubtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;
    return formMeta;
};