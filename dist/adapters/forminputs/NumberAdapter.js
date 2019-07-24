'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _NumberMeta = require('../../settings/forminputs/number/NumberMeta');

var _NumberMeta2 = _interopRequireDefault(_NumberMeta);

var _NumberToValues = require('../../settings/forminputs/number/NumberToValues');

var _NumberToValues2 = _interopRequireDefault(_NumberToValues);

var _NumberValues = require('../../settings/forminputs/number/NumberValues');

var _NumberValues2 = _interopRequireDefault(_NumberValues);

var _FormInputsToNode = require('../../settings/forminputs/FormInputsToNode');

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberAdapter = function (_PropAdapter) {
    _inherits(NumberAdapter, _PropAdapter);

    function NumberAdapter() {
        _classCallCheck(this, NumberAdapter);

        return _possibleConstructorReturn(this, (NumberAdapter.__proto__ || Object.getPrototypeOf(NumberAdapter)).apply(this, arguments));
    }

    _createClass(NumberAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(NumberAdapter.prototype.__proto__ || Object.getPrototypeOf(NumberAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _NumberMeta2.default)(options);
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
            var baseFormData = _get(NumberAdapter.prototype.__proto__ || Object.getPrototypeOf(NumberAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _NumberValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(NumberAdapter.prototype.__proto__ || Object.getPrototypeOf(NumberAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _NumberToValues2.default)(options);
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

    return NumberAdapter;
}(_indexDeps.PropAdapter);

exports.default = NumberAdapter;