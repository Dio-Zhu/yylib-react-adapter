'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../index-deps');

var _FormItemwMeta = require('../settings/formw/FormItemwMeta');

var _FormItemwMeta2 = _interopRequireDefault(_FormItemwMeta);

var _FormItemwToValues = require('../settings/formw/FormItemwToValues');

var _FormItemwToValues2 = _interopRequireDefault(_FormItemwToValues);

var _FormItemwValues = require('../settings/formw/FormItemwValues');

var _FormItemwValues2 = _interopRequireDefault(_FormItemwValues);

var _FormItemwPage = require('../settings/formw/FormItemwPage');

var _FormItemwPage2 = _interopRequireDefault(_FormItemwPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItemwAdapter = function (_PropAdapter) {
    _inherits(FormItemwAdapter, _PropAdapter);

    function FormItemwAdapter() {
        _classCallCheck(this, FormItemwAdapter);

        return _possibleConstructorReturn(this, (FormItemwAdapter.__proto__ || Object.getPrototypeOf(FormItemwAdapter)).apply(this, arguments));
    }

    _createClass(FormItemwAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(FormItemwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormItemwAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _FormItemwMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _FormItemwPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(FormItemwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormItemwAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _FormItemwValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(FormItemwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormItemwAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _FormItemwToValues2.default)(options);
        }
        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            tplNode.label = tplNode.uititle;
        }
    }]);

    return FormItemwAdapter;
}(_indexDeps.PropAdapter);

exports.default = FormItemwAdapter;