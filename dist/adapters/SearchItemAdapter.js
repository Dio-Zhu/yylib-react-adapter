'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../index-deps');

var _SearchItemMeta = require('../settings/searchcondition/SearchItemMeta');

var _SearchItemMeta2 = _interopRequireDefault(_SearchItemMeta);

var _SearchItemToValues = require('../settings/searchcondition/SearchItemToValues');

var _SearchItemToValues2 = _interopRequireDefault(_SearchItemToValues);

var _SearchItemValues = require('../settings/searchcondition/SearchItemValues');

var _SearchItemValues2 = _interopRequireDefault(_SearchItemValues);

var _SearchItemPage = require('../settings/searchcondition/SearchItemPage');

var _SearchItemPage2 = _interopRequireDefault(_SearchItemPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchItemAdapter = function (_PropAdapter) {
    _inherits(SearchItemAdapter, _PropAdapter);

    function SearchItemAdapter() {
        _classCallCheck(this, SearchItemAdapter);

        return _possibleConstructorReturn(this, (SearchItemAdapter.__proto__ || Object.getPrototypeOf(SearchItemAdapter)).apply(this, arguments));
    }

    _createClass(SearchItemAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SearchItemAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchItemAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _SearchItemMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _SearchItemPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(SearchItemAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchItemAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _SearchItemValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(SearchItemAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchItemAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _SearchItemToValues2.default)(options);
        }
    }]);

    return SearchItemAdapter;
}(_indexDeps.PropAdapter);

exports.default = SearchItemAdapter;