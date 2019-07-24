'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = require('../index-deps');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItemwViewAdapter = function (_ViewAdapter) {
    _inherits(FormItemwViewAdapter, _ViewAdapter);

    function FormItemwViewAdapter() {
        _classCallCheck(this, FormItemwViewAdapter);

        return _possibleConstructorReturn(this, (FormItemwViewAdapter.__proto__ || Object.getPrototypeOf(FormItemwViewAdapter)).apply(this, arguments));
    }

    _createClass(FormItemwViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //必填
            if (tplNode.required == true) {
                nodeViews.push({
                    uititle: '*',
                    uitype: 'span',
                    uialign: 'left',
                    style: { color: 'red' }
                });
            }
            //隐藏
            if (tplNode.visible == false) {
                nodeViews.push({
                    uititle: '被隐藏',
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return FormItemwViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = FormItemwViewAdapter;