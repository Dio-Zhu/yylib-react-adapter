'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = require('../../index-deps');

var _ImageUploadMeta = require('../../settings/forminputs/imageupload/ImageUploadMeta');

var _ImageUploadMeta2 = _interopRequireDefault(_ImageUploadMeta);

var _ImageUploadToValues = require('../../settings/forminputs/imageupload/ImageUploadToValues');

var _ImageUploadToValues2 = _interopRequireDefault(_ImageUploadToValues);

var _ImageUploadValues = require('../../settings/forminputs/imageupload/ImageUploadValues');

var _ImageUploadValues2 = _interopRequireDefault(_ImageUploadValues);

var _FormInputsToNode = require('../../settings/forminputs/FormInputsToNode');

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUploadAdapter = function (_PropAdapter) {
    _inherits(ImageUploadAdapter, _PropAdapter);

    function ImageUploadAdapter() {
        _classCallCheck(this, ImageUploadAdapter);

        return _possibleConstructorReturn(this, (ImageUploadAdapter.__proto__ || Object.getPrototypeOf(ImageUploadAdapter)).apply(this, arguments));
    }

    _createClass(ImageUploadAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ImageUploadAdapter.prototype.__proto__ || Object.getPrototypeOf(ImageUploadAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _ImageUploadMeta2.default)(options);
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
            var baseFormData = _get(ImageUploadAdapter.prototype.__proto__ || Object.getPrototypeOf(ImageUploadAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _ImageUploadValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(ImageUploadAdapter.prototype.__proto__ || Object.getPrototypeOf(ImageUploadAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _ImageUploadToValues2.default)(options);
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

    return ImageUploadAdapter;
}(_indexDeps.PropAdapter);

exports.default = ImageUploadAdapter;