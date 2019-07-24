'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = require('../index-deps');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColViewAdapter = function (_ViewAdapter) {
    _inherits(TableColViewAdapter, _ViewAdapter);

    function TableColViewAdapter() {
        _classCallCheck(this, TableColViewAdapter);

        return _possibleConstructorReturn(this, (TableColViewAdapter.__proto__ || Object.getPrototypeOf(TableColViewAdapter)).apply(this, arguments));
    }

    _createClass(TableColViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //存在链接
            if (tplNode.linkUrl) {
                nodeViews.push({
                    uititle: '带链接',
                    uitype: 'icon',
                    type: 'link'
                });
            }
            //存在合计
            if (tplNode.total) {
                nodeViews.push({
                    uititle: '统计合计',
                    uitype: 'icon',
                    type: 'calculator'
                });
            }
            //存在合并表头配置
            if (tplNode.colSpan > 0) {
                nodeViews.push({
                    uititle: "表头合并" + tplNode.colSpan + "列",
                    uitype: 'icon',
                    type: 'tags'
                });
            } else if (tplNode.colSpan == 0) {
                //被合并
                nodeViews.push({
                    uititle: "表头被合并",
                    uitype: 'icon',
                    type: 'tag-o'
                });
            }
            //固定列
            if (tplNode.fixed == 'left') {
                nodeViews.push({
                    uititle: "左侧固定",
                    uitype: 'icon',
                    type: 'pushpin'
                });
            } else if (tplNode.fixed == 'right') {
                nodeViews.push({
                    uititle: "右侧固定",
                    uitype: 'icon',
                    type: 'pushpin-o'
                });
            }
            //隐藏列
            if (tplNode.isShow == false) {
                nodeViews.push({
                    uititle: "被隐藏",
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return TableColViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = TableColViewAdapter;