'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../index-deps');

var _SearchSchemeMeta = require('../settings/searchcondition/SearchSchemeMeta');

var _SearchSchemeMeta2 = _interopRequireDefault(_SearchSchemeMeta);

var _SearchSchemeToValues = require('../settings/searchcondition/SearchSchemeToValues');

var _SearchSchemeToValues2 = _interopRequireDefault(_SearchSchemeToValues);

var _SearchSchemeValues = require('../settings/searchcondition/SearchSchemeValues');

var _SearchSchemeValues2 = _interopRequireDefault(_SearchSchemeValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchSchemeAdapter = function (_PropAdapter) {
    _inherits(SearchSchemeAdapter, _PropAdapter);

    function SearchSchemeAdapter() {
        _classCallCheck(this, SearchSchemeAdapter);

        return _possibleConstructorReturn(this, (SearchSchemeAdapter.__proto__ || Object.getPrototypeOf(SearchSchemeAdapter)).apply(this, arguments));
    }

    _createClass(SearchSchemeAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SearchSchemeAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchSchemeAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _SearchSchemeMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(SearchSchemeAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchSchemeAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _SearchSchemeValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(SearchSchemeAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchSchemeAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _SearchSchemeToValues2.default)(options);
        }
    }]);

    return SearchSchemeAdapter;
}(_indexDeps.PropAdapter);

exports.default = SearchSchemeAdapter;