'use strict';

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _indexDeps = require('../../index-deps');

var _Defines = require('../../Defines');

var _FormItemType = require('../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
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
        name: 'color',
        label: '颜色',
        type: _indexDeps.MetaType.Color,
        props: {},
        defaultValue: ''
    }, {
        name: 'fieldtype',
        label: '数据类型',
        help: '定义后端存储的值类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串' }, { value: 'date', text: '日期值' }, { value: 'boolean', text: '布尔值' }, { value: 'number', text: '整数值' }, { value: 'currency', text: '精数值' }]
        },
        defaultValue: 'string'
    }];
    PropMeta.push({
        name: 'uisubtype',
        label: '显示类型',
        help: '定义前端特殊的显示方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: '', text: '(无)' }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }]
        },
        defaultValue: ''
    });
    //参照配置
    if (tplNode.uisubtype === _FormItemType2.default.inputrefer) {
        PropMeta.push({
            name: 'referInfo',
            label: '参照编码',
            type: _indexDeps.MetaType.Refer,
            props: {

                refinfokey: '001',
                serverUrl: _indexDeps.SUPPORT_SERVER
            },
            defaultValue: null
        });
    } else //枚举配置
        if (tplNode.uisubtype === _FormItemType2.default.enumselect) {
            PropMeta.push({
                name: 'enumInfo',
                label: '档案编码',
                props: {
                    refinfokey: 'bd-009',
                    serverUrl: _indexDeps.SUPPORT_SERVER

                },
                type: _indexDeps.MetaType.Refer,
                defaultValue: null
            });
        } else //日期配置
            if (tplNode.uisubtype === _FormItemType2.default.date) {
                PropMeta.push({
                    name: 'format',
                    label: '日期格式',
                    type: _indexDeps.MetaType.Select,
                    props: {

                        options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM']
                    },
                    defaultValue: 'yyyy-MM-dd'
                });
            }
    PropMeta = PropMeta.concat([{
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
        defaultValue: tplNode.fieldtype == 'number' || tplNode.fieldtype == 'currency' ? 'right' : 'left'
    }, {
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
        name: 'total',
        label: '统计合计',
        help: '默认合计计算本列数据',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
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
    //千分位配置
    if (tplNode.fieldtype == 'number' || tplNode.fieldtype == 'currency') {
        PropMeta.push({
            name: 'comma',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    //精确类型字段提供精度参数
    if (tplNode.fieldtype === 'currency') {
        PropMeta.push({
            name: 'decimal',
            label: '保留小数',
            type: _indexDeps.MetaType.Number,
            help: '计算或存储的精度小数位（悬浮显示的精度小数位）',
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: null
        }, {
            name: 'showDecimal',
            label: '显示小数',
            help: '显示的小数位，不会影响存储的精度（即直接显示的小数位）',
            type: _indexDeps.MetaType.Select,
            props: {

                options: function () {
                    var list = [{ text: '按保留小数位显示', value: '' }];
                    for (var i = 1; i <= 10; i++) {
                        list.push({ text: '显示' + i + '位', value: i });
                    }
                    return list;
                }()
            },
            defaultValue: undefined
        }, {
            name: 'zeroFilling',
            label: '自动补零',
            help: '小数位是否自动补零',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'precisionConfig',
            label: '精度参数',
            type: _indexDeps.MetaType.EnumSelect,
            props: {

                code: 'precision_config',
                valueKey: 'code'
            },
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
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
                fieldsNode.forEach(function (node, index) {
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
        name: 'linkUrl',
        label: '链接URL',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'linkType',
        label: '链接方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'route', text: '当前页面路由' }, { value: '_blank', text: '打开新浏览器窗口' }]
        },
        defaultValue: 'route'
    }, {
        name: 'innerFilter',
        label: '内嵌筛选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'dummyField',
        label: '虚拟字段',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'orderby',
        label: '查询排序',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '无', value: '' }, { text: '升序', value: 'asc' }, { text: '降序', value: 'desc' }]
        },
        defaultValue: ''
    }]);
    return PropMeta;
};