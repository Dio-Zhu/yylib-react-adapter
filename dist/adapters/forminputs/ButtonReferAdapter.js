'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _ButtonReferMeta = require('../../settings/forminputs/buttonrefer/ButtonReferMeta');

var _ButtonReferMeta2 = _interopRequireDefault(_ButtonReferMeta);

var _ButtonReferToValues = require('../../settings/forminputs/buttonrefer/ButtonReferToValues');

var _ButtonReferToValues2 = _interopRequireDefault(_ButtonReferToValues);

var _ButtonReferValues = require('../../settings/forminputs/buttonrefer/ButtonReferValues');

var _ButtonReferValues2 = _interopRequireDefault(_ButtonReferValues);

var _FormInputsToNode = require('../../settings/forminputs/FormInputsToNode');

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonReferAdapter = function (_PropAdapter) {
    _inherits(ButtonReferAdapter, _PropAdapter);

    function ButtonReferAdapter() {
        _classCallCheck(this, ButtonReferAdapter);

        return _possibleConstructorReturn(this, (ButtonReferAdapter.__proto__ || Object.getPrototypeOf(ButtonReferAdapter)).apply(this, arguments));
    }

    _createClass(ButtonReferAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ButtonReferAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonReferAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _ButtonReferMeta2.default)(options);
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
            var baseFormData = _get(ButtonReferAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonReferAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _ButtonReferValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(ButtonReferAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonReferAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _ButtonReferToValues2.default)(options);
        }
        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            tplNode.buttonText = tplNode.uititle;
        }
    }]);

    return ButtonReferAdapter;
}(_indexDeps.PropAdapter);

exports.default = ButtonReferAdapter;