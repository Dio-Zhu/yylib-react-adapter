'use strict';

var _indexDeps = require('../../../index-deps');

var _Utils = require('../../../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputrefer){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputrefer||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem) {
    PropMeta = PropMeta.concat([//参照扩展的配置
    {
        name: 'refinfokey',
        label: '参照编码',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: '001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'referRelation',
        label: '参照映射',
        help: '将当前参照的id、name、code值映射赋值给表单中的其它字段',
        type: _indexDeps.MetaType.ReferEditRelation,
        props: {
            fields: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                fieldsNode.forEach(function (node, index) {
                    //排除自身
                    if (tplNode.nid !== node.nid && !node.referRelation && node.uikey) {
                        fields.push({ key: node.uikey, title: node.uititle, uisubtype: node.uisubtype });
                    }
                });
                return fields;
            }(), //注意立即执行
            refCode: tplNode.refinfokey
        },
        defaultValue: null
    }, {
        name: 'multiselect',
        label: '参照多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'searchPlaceholder',
        label: '搜索提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'checkControl',
        label: '父子联动',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }]);
    // }
    return PropMeta;
};