'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = require('../index-deps');

var _RowPage = require('../settings/row/RowPage');

var _RowPage2 = _interopRequireDefault(_RowPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowAdapter = function (_PropAdapter) {
    _inherits(RowAdapter, _PropAdapter);

    function RowAdapter() {
        _classCallCheck(this, RowAdapter);

        return _possibleConstructorReturn(this, (RowAdapter.__proto__ || Object.getPrototypeOf(RowAdapter)).apply(this, arguments));
    }

    _createClass(RowAdapter, [{
        key: 'onPageProps',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        //配置页面的属性
        value: function onPageProps(options) {
            return (0, _RowPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return RowAdapter;
}(_indexDeps.PropAdapter);

exports.default = RowAdapter;