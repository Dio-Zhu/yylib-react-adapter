'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _CPDropdownButtonPage = require('../../settings/compact/CPDropdownButtonPage');

var _CPDropdownButtonPage2 = _interopRequireDefault(_CPDropdownButtonPage);

var _CPDropdownButtonToValues = require('../../settings/compact/CPDropdownButtonToValues');

var _CPDropdownButtonToValues2 = _interopRequireDefault(_CPDropdownButtonToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPDropdownButtonAdapter = function (_PropAdapter) {
    _inherits(CPDropdownButtonAdapter, _PropAdapter);

    function CPDropdownButtonAdapter() {
        _classCallCheck(this, CPDropdownButtonAdapter);

        return _possibleConstructorReturn(this, (CPDropdownButtonAdapter.__proto__ || Object.getPrototypeOf(CPDropdownButtonAdapter)).apply(this, arguments));
    }

    _createClass(CPDropdownButtonAdapter, [{
        key: 'onPageProps',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        //配置页面的属性
        value: function onPageProps(options) {
            return (0, _CPDropdownButtonPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CPDropdownButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(CPDropdownButtonAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPDropdownButtonToValues2.default)(options);
        }
    }]);

    return CPDropdownButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPDropdownButtonAdapter;