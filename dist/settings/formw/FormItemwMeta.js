'use strict';

var _indexDeps = require('../../index-deps');

var _Utils = require('../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _FormItemType = require('../forminputs/FormItemType');

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _Defines = require('../../Defines');

var _FormInputsMeta = require('../forminputs/FormInputsMeta');

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;
    //表单字段公共的属性

    var PropMeta = [{
        name: 'uisubtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ value: _FormItemType2.default.input, text: _Defines.UiTitleDef.input }, { value: _FormItemType2.default.inputhidden, text: _Defines.UiTitleDef.inputhidden }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }, { value: _FormItemType2.default.time, text: _Defines.UiTitleDef.timepicker }, { value: _FormItemType2.default.rangepicker, text: _Defines.UiTitleDef.rangepicker }, { value: _FormItemType2.default.number, text: _Defines.UiTitleDef.inputnumber }, { value: _FormItemType2.default.currency, text: _Defines.UiTitleDef.currency }, { value: _FormItemType2.default.textarea, text: _Defines.UiTitleDef.textarea }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.switch, text: _Defines.UiTitleDef.switch }, { value: _FormItemType2.default.select, text: _Defines.UiTitleDef.select }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.attachupload, text: _Defines.UiTitleDef.attachupload }, { value: _FormItemType2.default.imageupload, text: _Defines.UiTitleDef.imageupload }, { value: _FormItemType2.default.cascader, text: _Defines.UiTitleDef.cascader }, { value: _FormItemType2.default.radiogroup, text: _Defines.UiTitleDef.radiogroup }, { value: _FormItemType2.default.checkboxgroup, text: _Defines.UiTitleDef.checkboxgroup }, { value: _FormItemType2.default.inputmap, text: _Defines.UiTitleDef.inputmap }, { value: _FormItemType2.default.editor, text: _Defines.UiTitleDef.editor }, { value: _FormItemType2.default.attachmgrw, text: _Defines.UiTitleDef.attachmgrw }, { value: _FormItemType2.default.plaintext, text: _Defines.UiTitleDef.text }, { value: _FormItemType2.default.autoselect, text: _Defines.UiTitleDef.autoselect }, { value: _FormItemType2.default.inputbutton, text: _Defines.UiTitleDef.inputbutton }]
        },
        defaultValue: _FormItemType2.default.input
    }, {
        name: 'labelHelp',
        label: '帮助信息',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    //隐藏输入框-移除一些属性
    if (tplNode.uisubtype !== _FormItemType2.default.inputhidden) {
        PropMeta.push({
            name: 'extra',
            label: '提示信息',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'visible',
        label: '是否显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'disabled',
        label: '是否禁用',
        type: _indexDeps.MetaType.Bool,
        props: {
            checkedChildren: "是",
            unCheckedChildren: "否"
        },
        defaultValue: false
    }, {
        name: 'newline',
        label: '占用整行',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'rowBreak',
        label: '强制换行',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'required',
        label: '是否必填',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'mathFormula',
        label: '计算公式',
        type: _indexDeps.MetaType.MathFormula,
        props: {
            options: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                fieldsNode.forEach(function (node, index) {
                    //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                    if (tplNode.nid !== node.nid && !node.mathFormula && node.uikey) {
                        fields.push({ key: node.uikey, title: node.uititle });
                    }
                });
                return fields;
            }() //注意立即执行
        },
        defaultValue: null
    }]);
    //隐藏输入框-移除一些属性
    if (tplNode.uisubtype !== _FormItemType2.default.inputhidden) {
        PropMeta.push({
            name: 'pattern',
            label: '正则验证',
            help: '如需进行一些特殊验证，填入相关正则表达式进行验证',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
        PropMeta.push({
            name: 'patternMsg',
            label: '错误提示',
            type: _indexDeps.MetaType.Text,
            help: '正则验证不通过时给出的错误提示信息',
            props: {},
            defaultValue: ''
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'labelCol',
        label: '标签宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 6
    }, {
        name: 'wrapperCol',
        label: '内容宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 14
    }]);

    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前uisubtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.uisubtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;

    return formMeta;
};