'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _CPAuditInfoMeta = require('../../settings/compact/CPAuditInfoMeta');

var _CPAuditInfoMeta2 = _interopRequireDefault(_CPAuditInfoMeta);

var _CPAuditInfoToValues = require('../../settings/compact/CPAuditInfoToValues');

var _CPAuditInfoToValues2 = _interopRequireDefault(_CPAuditInfoToValues);

var _CPAuditInfoValues = require('../../settings/compact/CPAuditInfoValues');

var _CPAuditInfoValues2 = _interopRequireDefault(_CPAuditInfoValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPAuditInfoAdapter = function (_PropAdapter) {
    _inherits(CPAuditInfoAdapter, _PropAdapter);

    function CPAuditInfoAdapter() {
        _classCallCheck(this, CPAuditInfoAdapter);

        return _possibleConstructorReturn(this, (CPAuditInfoAdapter.__proto__ || Object.getPrototypeOf(CPAuditInfoAdapter)).apply(this, arguments));
    }

    _createClass(CPAuditInfoAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPAuditInfoAdapter.prototype.__proto__ || Object.getPrototypeOf(CPAuditInfoAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPAuditInfoMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(CPAuditInfoAdapter.prototype.__proto__ || Object.getPrototypeOf(CPAuditInfoAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _CPAuditInfoValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CPAuditInfoAdapter.prototype.__proto__ || Object.getPrototypeOf(CPAuditInfoAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPAuditInfoToValues2.default)(options);
        }
    }]);

    return CPAuditInfoAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPAuditInfoAdapter;