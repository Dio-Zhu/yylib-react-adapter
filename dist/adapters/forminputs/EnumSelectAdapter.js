'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _EnumSelectMeta = require('../../settings/forminputs/enumselect/EnumSelectMeta');

var _EnumSelectMeta2 = _interopRequireDefault(_EnumSelectMeta);

var _EnumSelectToValues = require('../../settings/forminputs/enumselect/EnumSelectToValues');

var _EnumSelectToValues2 = _interopRequireDefault(_EnumSelectToValues);

var _EnumSelectValues = require('../../settings/forminputs/enumselect/EnumSelectValues');

var _EnumSelectValues2 = _interopRequireDefault(_EnumSelectValues);

var _FormInputsToNode = require('../../settings/forminputs/FormInputsToNode');

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnumSelectAdapter = function (_PropAdapter) {
    _inherits(EnumSelectAdapter, _PropAdapter);

    function EnumSelectAdapter() {
        _classCallCheck(this, EnumSelectAdapter);

        return _possibleConstructorReturn(this, (EnumSelectAdapter.__proto__ || Object.getPrototypeOf(EnumSelectAdapter)).apply(this, arguments));
    }

    _createClass(EnumSelectAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(EnumSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(EnumSelectAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _EnumSelectMeta2.default)(options);
            return baseMetas.concat(myMetas);
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var baseFormData = _get(EnumSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(EnumSelectAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _EnumSelectValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(EnumSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(EnumSelectAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _EnumSelectToValues2.default)(options);
        }
        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            (0, _FormInputsToNode2.default)(options);
        }
    }]);

    return EnumSelectAdapter;
}(_indexDeps.PropAdapter);

exports.default = EnumSelectAdapter;