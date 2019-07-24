'use strict';

var _indexDeps = require('../../../index-deps');

var _CurrencyMeta = require('../currency/CurrencyMeta');

var _CurrencyMeta2 = _interopRequireDefault(_CurrencyMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];

    if (tplNode.type == 'currency') {
        return (0, _CurrencyMeta2.default)(options);
    } else {
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     //PropMeta = PropMeta.concat(options.baseMeta);
        // }
        // //扩展特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
        // ) {
        PropMeta = PropMeta.concat([//数字输入框扩展配置
        {
            name: 'defaultValue',
            label: '默认值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'min',
            label: '最小数值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'max',
            label: '最大数值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'addonAfter',
            label: '文本后缀',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'direction',
            label: '文本朝向',
            type: _indexDeps.MetaType.Select,
            props: {

                options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }]
            },
            defaultValue: 'right'
        }, {
            name: 'placeholder',
            label: '置空提示',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'range',
            label: '范围取值',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: false
        }]);
        // }
        return PropMeta;
    }
};