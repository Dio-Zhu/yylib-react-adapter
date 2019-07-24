'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _CPFilterRowMeta = require('../../settings/compact/CPFilterRowMeta');

var _CPFilterRowMeta2 = _interopRequireDefault(_CPFilterRowMeta);

var _CPFilterRowToValues = require('../../settings/compact/CPFilterRowToValues');

var _CPFilterRowToValues2 = _interopRequireDefault(_CPFilterRowToValues);

var _CPFilterRowValues = require('../../settings/compact/CPFilterRowValues');

var _CPFilterRowValues2 = _interopRequireDefault(_CPFilterRowValues);

var _CPFilterRowPage = require('../../settings/compact/CPFilterRowPage');

var _CPFilterRowPage2 = _interopRequireDefault(_CPFilterRowPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPFilterRowAdapter = function (_PropAdapter) {
    _inherits(CPFilterRowAdapter, _PropAdapter);

    function CPFilterRowAdapter() {
        _classCallCheck(this, CPFilterRowAdapter);

        return _possibleConstructorReturn(this, (CPFilterRowAdapter.__proto__ || Object.getPrototypeOf(CPFilterRowAdapter)).apply(this, arguments));
    }

    _createClass(CPFilterRowAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPFilterRowAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFilterRowAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPFilterRowMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _CPFilterRowPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(CPFilterRowAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFilterRowAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _CPFilterRowValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CPFilterRowAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFilterRowAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPFilterRowToValues2.default)(options);
        }
    }]);

    return CPFilterRowAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPFilterRowAdapter;