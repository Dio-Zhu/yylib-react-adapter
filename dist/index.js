registerLibrary(/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _zzjGenadapter = __webpack_require__(73);

window.EnvConfig = window.EnvConfig || {}; /**
                                            * 统一对外部的依赖入口（所有第三方依赖）
                                            */

var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;

module.exports = {
    UiLibrary: _zzjGenadapter.UiLibrary,
    ViewAdapter: _zzjGenadapter.ViewAdapter,
    PropAdapter: _zzjGenadapter.PropAdapter,
    EventAdapter: _zzjGenadapter.EventAdapter,
    MetaType: _zzjGenadapter.MetaType,
    LogicUtils: _zzjGenadapter.LogicUtils,
    SUPPORT_SERVER: SUPPORT_SERVER
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * UI枚举定义
 */
//常用
var UiTypeDef = {}; //定义uitype值,uitype标识元素类型
var UiTitleDef = {}; //定义uititle值,uititle标识元素名称
var UiDefaultDef = {}; //定义uidefault值,uidefault预置元素默认属性值
var UiIconDef = {}; //定义uiicon值,uiicon为元素图标名称

UiTypeDef.page = 'YYPage';
UiTitleDef.page = '页面';

UiTypeDef.area = 'YYArea';
UiTitleDef.area = '空白区域';

UiTypeDef.caption = 'YYCaption';
UiTitleDef.caption = '标题文本';

UiTypeDef.toolbar = 'YYToolbar';
UiTitleDef.toolbar = '工具栏';
UiIconDef.toolbar = 'icon-gongjulan';

UiTypeDef.button = 'YYButton';
UiTitleDef.button = '按钮';
UiIconDef.button = 'icon-anniu';

UiTypeDef.buttonselect = 'YYButtonSelect';
UiTitleDef.buttonselect = '下拉按钮';
UiTypeDef.buttonitem = 'YYButtonItem';
UiTitleDef.buttonitem = '下拉按钮项';

UiTypeDef.table = 'YYTable';
UiTitleDef.table = '基础表格';
UiIconDef.table = 'icon-biaoge';
UiTypeDef.tablecol = 'YYTableCol';
UiTitleDef.tablecol = '表格列';

UiTypeDef.tablew = 'TableWidget';
UiTitleDef.tablew = '数据表格';
UiIconDef.tablew = 'icon-biaoge';

UiTypeDef.edittablew = 'EditTableWidget';
UiTitleDef.edittablew = '编辑表格';
UiIconDef.edittablew = 'icon-biaoge';
UiTypeDef.edititemw = 'EditItemWidget';
UiTitleDef.edititemw = '编辑表格列';

UiTypeDef.breadcrumb = 'YYBreadcrumb';
UiTitleDef.breadcrumb = '面包屑';
UiIconDef.breadcrumb = 'icon-mianbaoxie';

UiTypeDef.breadcrumbitem = 'YYBreadcrumbItem';
UiTitleDef.breadcrumbitem = '面包屑元素';

UiTypeDef.iframe = 'YYIframe';
UiTitleDef.iframe = '内嵌页面';
//布局
UiTypeDef.accordions = 'YYAccordions';
UiTitleDef.accordions = '折叠卡片';
UiIconDef.accordions = 'icon-shoufengqin';
UiTypeDef.accordion = 'YYAccordion';
UiTitleDef.accordion = '子卡片';

UiTypeDef.tabs = 'YYTabs';
UiTitleDef.tabs = '多页签';
UiIconDef.tabs = 'icon-biaoqianye';
UiTypeDef.tab = 'YYTab';
UiTitleDef.tab = '子标签';
UiTypeDef.row = 'YYRow';
UiTitleDef.row = '24格布局';
UiIconDef.row = 'icon-zhagebuju';
UiTypeDef.col = 'YYCol';
UiTitleDef.col = '格子';
UiTypeDef.panel = 'YYPanel';
UiTitleDef.panel = '面板';
UiIconDef.panel = 'icon-danmianban';
UiTypeDef.scrollbar = 'YYScrollbar';
UiTitleDef.scrollbar = '滚动区域';
UiIconDef.scrollbar = 'icon-rongqizujian';
UiDefaultDef.scrollbar = { width: 300, height: 300 };
UiTypeDef.tree = 'YYTree';
UiTitleDef.tree = '层次树';
UiIconDef.tree = 'icon-shujiegou';
UiTypeDef.treenode = 'YYTreeNode';
UiTitleDef.treenode = '树节点';
UiTypeDef.divide = 'YYDivide';
UiTitleDef.divide = '分割线';
UiTypeDef.modal = 'YYModal';
UiTitleDef.modal = '弹窗层';
/**-------表单相关-----begin**/
UiTypeDef.formw = 'FormWidget';
UiTitleDef.formw = '表单';
UiIconDef.formw = 'icon-biaodan';
UiDefaultDef.formw = { colnumber: 2 };

UiTypeDef.formitemw = 'FormItemWidget';
UiTitleDef.formitemw = '表单项';

UiTypeDef.input = 'YYInput';
UiTitleDef.input = '文本框';
UiIconDef.input = 'icon-shurukuang';

UiTypeDef.inputhidden = UiTypeDef.formitemw;
UiTitleDef.inputhidden = '隐藏框';

UiTypeDef.textarea = 'YYTextarea';
UiTitleDef.textarea = '多行文本域';
UiIconDef.textarea = 'icon-wenbenyu';

UiTypeDef.text = 'YYText';
UiTitleDef.text = '纯文本';
UiIconDef.text = 'icon-chunwenben';

UiTypeDef.datepicker = 'YYDatePicker';
UiTitleDef.datepicker = '日期框';
UiIconDef.datepicker = 'icon-riqixuanzekuang';

UiTypeDef.timepicker = 'YYTimePicker';
UiTitleDef.timepicker = '时间框';
UiIconDef.timepicker = 'icon-shijianxuanzekuang';

UiTypeDef.rangepicker = 'YYRangePicker';
UiTitleDef.rangepicker = '日期范围框';
UiIconDef.rangepicker = 'icon-riqixuanzekuang';

UiTypeDef.inputnumber = 'YYInputNumber';
UiTitleDef.inputnumber = '整数框';
UiIconDef.inputnumber = 'icon-shuzishurukuang';

UiTypeDef.currency = 'YYInputNumber';
UiTitleDef.currency = '精确数值框';
UiIconDef.currency = 'icon-shuzishurukuang';
UiDefaultDef.currency = { type: 'currency' };

UiTypeDef.inputrefer = 'YYReferInput';
UiTitleDef.inputrefer = '参照框';
UiIconDef.inputrefer = 'icon-canzhao';

UiTypeDef.buttonrefer = 'YYReferButton';
UiTitleDef.buttonrefer = '按钮参照';
UiIconDef.buttonrefer = 'icon-canzhao';

UiTypeDef.switch = 'YYSwitch';
UiTitleDef.switch = '开关';
UiIconDef.switch = 'icon-kaiguan';
UiTypeDef.select = 'YYSelect';
UiTitleDef.select = '下拉选择';
UiIconDef.select = 'icon-xialaxuanze';
UiTypeDef.option = 'YYOption';
UiTitleDef.option = '下拉选项';
UiTypeDef.autoselect = 'YYAutoSelect';
UiTitleDef.autoselect = '自动匹配';

UiTypeDef.taggroup = 'YYTagGroup';
UiTitleDef.taggroup = '标签组';
UiTypeDef.tagitem = 'YYTagItem';
UiTitleDef.tagitem = '标签项';

UiTypeDef.cascader = 'YYCascader';
UiTitleDef.cascader = '下拉级联';

UiTypeDef.enumselect = 'YYEnumSelect';
UiTitleDef.enumselect = '档案枚举';

UiTypeDef.attachupload = 'AttachUploadWidget';
UiTitleDef.attachupload = '附件上传';

UiTypeDef.imageupload = 'YYImageWall';
UiTitleDef.imageupload = '图片上传';

UiTypeDef.inputbutton = 'YYInputButton';
UiTitleDef.inputbutton = '文本按钮框';

UiTypeDef.radio = 'YYRadio';
UiTitleDef.radio = '单选项';
UiTypeDef.radiogroup = 'YYRadioGroup';
UiTitleDef.radiogroup = '单选框';

UiTypeDef.checkbox = 'YYCheckbox';
UiTitleDef.checkbox = '多选项';
UiTypeDef.checkboxgroup = 'YYCheckboxGroup';
UiTitleDef.checkboxgroup = '多选框';

UiTypeDef.inputmap = 'YYMapInput';
UiTitleDef.inputmap = '地图选址';

UiTypeDef.splitpane = 'YYSplitPane';
UiTitleDef.splitpane = '2格布局';
/**-------表单相关-----end**/

//特殊
UiTypeDef.searchcondition = 'YYSearchCondition';
UiTitleDef.searchcondition = '搜索框';
UiIconDef.searchcondition = '';
UiTypeDef.searchitem = 'YYSearchItem';
UiTitleDef.searchitem = '搜索项';
UiIconDef.searchitem = '';
UiTypeDef.searchscheme = 'YYSchemeGroup';
UiTitleDef.searchscheme = '方案栏';
UiIconDef.searchscheme = '';

UiTypeDef.stepsnav = 'YYStepsNav';
UiTitleDef.stepsnav = '步骤条导航';
UiTypeDef.stepsnavitem = 'YYStepsNavItem';
UiTitleDef.stepsnavitem = '导航项';

UiTypeDef.attachmgrw = 'AttachMgrWidget';
UiTitleDef.attachmgrw = '附件管理';

UiTypeDef.editor = 'YYEditor';
UiTitleDef.editor = '富文本编辑';

UiTypeDef.plugin = 'UnKnowWidget';
UiTitleDef.plugin = '自定义组件';
UiDefaultDef.plugin = { uiplugin: true };

UiTypeDef.steps = 'YYSteps';
UiTitleDef.steps = '步骤条';
UiTypeDef.step = 'YYStep';
UiTitleDef.step = '步骤项';

UiTypeDef.filterarea = 'YYFilterArea';
UiTitleDef.filterarea = '筛选栏';

//  审批
UiTypeDef.bpmsubmitw = 'BpmSubmitWidget';
UiTitleDef.bpmsubmitw = '提交审批';
UiTypeDef.bpmapprovew = 'BpmApproveWidget';
UiTitleDef.bpmapprovew = '执行审批';

UiTypeDef.printbutton = 'YYPrintButton';
UiTitleDef.printbutton = '打印';

// 图表
UiTypeDef.chartw = 'ChartWidget';
UiTitleDef.chartw = 'ECharts图表';

/**----模板-建造私有云----begin**/
UiTypeDef.CPListPage = 'CPListPage';
UiTitleDef.CPListPage = '单据列表';
UiIconDef.CPListPage = 'icon-wenbenyu';

UiTypeDef.CPListHeader = 'CPListHeader';
UiTitleDef.CPListHeader = '列表头部栏';

UiTypeDef.CPListToolbar = 'CPListToolbar';
UiTitleDef.CPListToolbar = '列表工具栏';

UiTypeDef.CPListTable = 'CPListTable';
UiTitleDef.CPListTable = '列表数据表格';

UiTypeDef.CPCardPage = 'CPCardPage';
UiTitleDef.CPCardPage = '单据表单';
UiIconDef.CPCardPage = 'icon-wenbenyu';

UiTypeDef.CPCardHeader = 'CPCardHeader';
UiTitleDef.CPCardHeader = '卡片头部栏';
UiTypeDef.CPCardTitle = 'CPCardTitle';
UiTitleDef.CPCardTitle = '卡片表单标题';
UiTypeDef.CPCardBody = 'CPCardBody';
UiTitleDef.CPCardBody = '卡片分组容器';

UiTypeDef.CPIconButton = 'CPIconButton';
UiTitleDef.CPIconButton = '文字按钮';
UiTypeDef.CPDropdownButton = 'CPDropdownButton';
UiTitleDef.CPDropdownButton = '多操作按钮';
UiTypeDef.CPDropdownItem = 'CPDropdownItem';
UiTitleDef.CPDropdownItem = '按钮操作项';
UiTypeDef.CPGoBack = 'CPGoBack';
UiTitleDef.CPGoBack = '返回';
UiTypeDef.CPSearchBar = 'CPSearchBar';
UiTitleDef.CPSearchBar = '搜索栏';
UiTypeDef.CPBpmSubmit = 'CPBpmSubmit';
UiTitleDef.CPBpmSubmit = '提交审批';
UiTypeDef.CPBpmApprove = 'CPBpmApprove';
UiTitleDef.CPBpmApprove = '审批';
UiTypeDef.CPAttachMgr = 'CPAttachMgr';
UiTitleDef.CPAttachMgr = '附件管理';
UiTypeDef.CPAuditInfo = 'CPAuditInfo';
UiTitleDef.CPAuditInfo = '单据审计';
UiTypeDef.CPPrintButton = 'CPPrintButton';
UiTitleDef.CPPrintButton = '打印';
UiTypeDef.CPPluginMgr = 'CPPluginMgr';
UiTitleDef.CPPluginMgr = '插件管理';
UiTypeDef.CPFilterBar = 'CPFilterBar';
UiTitleDef.CPFilterBar = '筛选条件栏';
UiIconDef.CPFilterBar = '';
UiTypeDef.CPFilterRow = 'CPFilterRow ';
UiTitleDef.CPFilterRow = '筛选条件';
UiIconDef.CPFilterRow = '';
UiTypeDef.CPFRField = 'CPFRField';
UiTitleDef.CPFRField = '条件元素';
UiIconDef.CPFRField = '';
/**----模板-建造私有云---end**/

/**----模板-建造公有云----begin**/
UiTypeDef.IjzHeader = 'IjzHeader';
UiTitleDef.IjzHeader = '顶部搜索栏';
UiTypeDef.IjzFilter = 'IjzFilter';
UiTitleDef.IjzFilter = '筛选条件栏';
UiTypeDef.IjzListView = 'IjzListView';
UiTitleDef.IjzListView = '列表卡片视图';
/**----模板-建造公有云----end**/

module.exports = {
    UiTypeDef: UiTypeDef,
    UiTitleDef: UiTitleDef,
    UiDefaultDef: UiDefaultDef,
    UiIconDef: UiIconDef
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//标识唯一ID
var _uuid = 0;
var Utils = {
    //生成一个唯一ID序列数
    uuid: function uuid() {
        return Date.now() + '_' + _uuid++;
    }
    //给指定节点追加一个子节点，nid未指定则自动生成一个唯一nid
    , appendNode: function appendNode(pnode, node) {
        if (!pnode || !node) return;
        pnode.children = Array.isArray(pnode.children) ? pnode.children : [];
        if (!node.nid) node.nid = 'nid_' + Utils.uuid(); //注意：生成"nid"属性
        pnode.children.push(node);
    }
    //递归遍历树数据，其中参数tree为数组
    , loopTreeData: function loopTreeData(tree, callback) {
        var _this = this;
        (tree || []).forEach(function (item, index, arr) {
            if (item && Array.isArray(item.children)) {
                _this.loopTreeData(item.children, callback);
            }
            callback(item, index, arr);
        });
    }
    //依据nid查找当前节点的父节点
    , findParentNode: function findParentNode(tree, nodeId) {
        if (!tree || !nodeId) return;
        var pNode = null;
        this.loopTreeData(Array.isArray(tree) ? tree : [tree], function (item) {
            //找到第一个父级节点就不再匹配
            if (pNode == null && item && Array.isArray(item.children)) {
                var isParent = (item.children || []).some(function (child) {
                    return child.nid === nodeId; //注意：匹配"nid"属性
                });
                if (isParent) pNode = item;
            }
        });
        return pNode;
    }
    //查找树节点下指定uikey的节点
    , findByUiKey: function findByUiKey(nodes, uikey) {
        var results = this.findWithPropName(nodes, 'uikey', uikey, true, true);
        return results.length > 0 ? results[0] : null;
    }
    /**
     * 查找树节点下指定节点属性值匹配的节点
     * @param nodes {array} 子节点集合
     * @param propName {string} 属性名
     * @param propValue {*} 属性值
     * @param loop{boolean} 默认：true，是否递归遍历子集合
     * @param only{boolean} 默认：true，是否匹配到第一个就终止
     * @param childPropName{boolean} 默认：children，子节点集合的属性名
     */
    , findWithPropName: function findWithPropName(nodes, propName, propValue, loop, only, childPropName) {
        var _results = [];
        var _nodes = Array.isArray(nodes) ? nodes : [];
        var _childPropName = childPropName ? childPropName : 'children';
        for (var i = 0; i < _nodes.length; i++) {
            var node = _nodes[i];
            if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') continue;
            if (node[propName] && node[propName] == propValue) {
                _results.push(node);
                if (only == undefined || only == true) break;
            }
            if (loop != false && node[_childPropName] && node[_childPropName].length > 0) {
                var currResults = this.findWithPropName(node[_childPropName], propName, propValue, loop, only, _childPropName);
                if (currResults != null) {
                    _results = _results.concat(currResults);
                }
            }
        }
        return _results;
    }
};
module.exports = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    input: 'input', //文本框
    textarea: 'textarea', //多行文本域
    date: 'date', //日期框
    time: 'time', //时间框
    rangepicker: 'rangepicker', //日期范围选择器
    number: 'number', //数字框
    inputhidden: 'inputhidden', //隐藏项
    inputrefer: 'inputrefer', //参照框
    switch: 'switch', //开关
    select: 'select', //下拉选择
    option: 'option', //下拉项
    enumselect: 'enumselect', //自定义档案枚举下拉
    currency: 'currency', //金额框
    attachupload: 'attachupload', //附件上传
    imageupload: 'imageupload', //图片上传
    cascader: 'cascader', //级联下拉
    radiogroup: 'radiogroup', //单选框
    checkboxgroup: 'checkboxgroup', //多选框
    inputmap: 'inputmap', //地图选址
    editor: 'editor', //富文本编辑
    attachmgrw: 'attachmgrw',
    plaintext: 'plaintext', //纯文本
    autoselect: 'autoselect', //自动匹配
    inputbutton: 'inputbutton' //文本按钮框
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * toNode回调方法，传递参数对象 options:{
 *  treeData - 当前树结构
 *  currNode - 当前结点对象
 *  tplNode - 即将添加的新子节点对象
 *  parser - 新子节点对象对应的组件解析器
 * }
 */
module.exports = function (options) {
    var tplTree = options.tplTree,
        tplNode = options.tplNode,
        tplParentNode = options.tplParentNode;

    if (tplParentNode.uitype == _Defines.UiTypeDef.formw) {
        //父节点为表单项
        tplNode.label = tplNode.uititle;
        //配置uisubtype为FormItemType值
        if (tplNode.uitype == _Defines.UiTypeDef.input) {
            tplNode.uisubtype = _FormItemType2.default.input;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputnumber) {
            tplNode.uisubtype = _FormItemType2.default.number;
        } else if (tplNode.uitype == _Defines.UiTypeDef.textarea) {
            tplNode.uisubtype = _FormItemType2.default.textarea;
        } else if (tplNode.uitype == _Defines.UiTypeDef.datepicker) {
            tplNode.uisubtype = _FormItemType2.default.date;
        } else if (tplNode.uitype == _Defines.UiTypeDef.timepicker) {
            tplNode.uisubtype = _FormItemType2.default.time;
        } else if (tplNode.uitype == _Defines.UiTypeDef.rangepicker) {
            tplNode.uisubtype = _FormItemType2.default.rangepicker;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputrefer) {
            tplNode.uisubtype = _FormItemType2.default.inputrefer;
        } else if (tplNode.uitype == _Defines.UiTypeDef.switch) {
            tplNode.uisubtype = _FormItemType2.default.switch;
        } else if (tplNode.uitype == _Defines.UiTypeDef.select) {
            tplNode.uisubtype = _FormItemType2.default.select;
        } else if (tplNode.uitype == _Defines.UiTypeDef.enumselect) {
            tplNode.uisubtype = _FormItemType2.default.enumselect;
        } else if (tplNode.uitype == _Defines.UiTypeDef.attachupload) {
            tplNode.uisubtype = _FormItemType2.default.attachupload;
        } else if (tplNode.uitype == _Defines.UiTypeDef.cascader) {
            tplNode.uisubtype = _FormItemType2.default.cascader;
        } else if (tplNode.uitype == _Defines.UiTypeDef.imageupload) {
            tplNode.uisubtype = _FormItemType2.default.imageupload;
        } else if (tplNode.uitype == _Defines.UiTypeDef.radiogroup) {
            tplNode.uisubtype = _FormItemType2.default.radiogroup;
        } else if (tplNode.uitype == _Defines.UiTypeDef.checkboxgroup) {
            tplNode.uisubtype = _FormItemType2.default.checkboxgroup;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputmap) {
            tplNode.uisubtype = _FormItemType2.default.inputmap;
        } else if (tplNode.uitype == _Defines.UiTypeDef.editor) {
            tplNode.uisubtype = _FormItemType2.default.editor;
        } else if (tplNode.uitype == _Defines.UiTypeDef.attachmgrw) {
            tplNode.uisubtype = _FormItemType2.default.attachmgrw;
        } else if (tplNode.uitype == _Defines.UiTypeDef.timepicker) {
            tplNode.uisubtype = _FormItemType2.default.time;
        } else if (tplNode.uitype == _Defines.UiTypeDef.text) {
            tplNode.uisubtype = _FormItemType2.default.plaintext;
        } else if (tplNode.uitype == _Defines.UiTypeDef.autoselect) {
            tplNode.uisubtype = _FormItemType2.default.autoselect;
        } else if (tplNode.uitype == _Defines.UiTypeDef.inputbutton) {
            tplNode.uisubtype = _FormItemType2.default.inputbutton;
        }
        //将uitype统一转换为FormItemWidget
        tplNode.uitype = _Defines.UiTypeDef.formitemw;
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = {
    //搜索项的toValues处理逻辑
    isSearchItemToValues: function isSearchItemToValues(options) {
        var meta = options.meta,
            tplNode = options.tplNode,
            value = options.value;

        delete tplNode[meta.name];
        if (meta.defaultValue === value) {
            delete tplNode.inputprops[meta.name];
        } else {
            _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//数据类型对应的表单输入类型关系
var FieldTypeInputType = {};
FieldTypeInputType.string = 'input'; //FormItemType.input;
FieldTypeInputType.date = 'date'; //FormItemType.date;
FieldTypeInputType.boolean = 'switch'; //FormItemType.switch;
FieldTypeInputType.number = 'number'; //FormItemType.number;
FieldTypeInputType.currency = 'currency'; //FormItemType.currency;

//数据类型对应java数据类型的关系
var FieldTypeJavaType = {};
FieldTypeJavaType.string = ['java.lang.String'];
FieldTypeJavaType.date = ['java.util.Date', 'java.sql.Timestamp', 'java.sql.Time', 'java.sql.Date'];
FieldTypeJavaType.boolean = ['boolean', 'java.lang.Boolean'];
FieldTypeJavaType.number = ['int', 'long', 'java.lang.Integer', 'java.lang.Long', 'java.math.BigInteger'];
FieldTypeJavaType.currency = ['float', 'double', 'java.math.BigDecimal', 'java.lang.Float', 'java.lang.Double'];
//将java数据类型转换为字段数据类型
var JavaTypeToFieldType = function JavaTypeToFieldType(javaType) {
    var fieldType = "string";
    //依据元数据字段类型自动匹配对应的数据类型
    for (var key in FieldTypeJavaType) {
        var types = FieldTypeJavaType[key] || [];
        if (types.indexOf(javaType) > -1) {
            fieldType = key;
            break;
        }
    };
    return fieldType;
};
module.exports = {
    FieldTypeInputType: FieldTypeInputType,
    FieldTypeJavaType: FieldTypeJavaType,
    JavaTypeToFieldType: JavaTypeToFieldType
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttachUploadMeta = __webpack_require__(13);
var CascaderMeta = __webpack_require__(14);
var CurrencyMeta = __webpack_require__(15);
var DateMeta = __webpack_require__(16);
var EnumSelectMeta = __webpack_require__(17);
var ImageUploadMeta = __webpack_require__(18);
var InputMeta = __webpack_require__(19);
var InputButtonMeta = __webpack_require__(20);
var InputReferMeta = __webpack_require__(21);
var NumberMeta = __webpack_require__(22);
var CheckboxGroupMeta = __webpack_require__(23);
var RadioGroupMeta = __webpack_require__(24);
var SelectMeta = __webpack_require__(25);
var SwitchMeta = __webpack_require__(26);
var TextareaMeta = __webpack_require__(27);
var InputMapMeta = __webpack_require__(93);
var EditorMeta = __webpack_require__(28);
var AttachMgrwMeta = __webpack_require__(10);
var TimeMeta = __webpack_require__(29);
var RangePickerMeta = __webpack_require__(30);
var TextMeta = __webpack_require__(31);
var AutoSelectMeta = __webpack_require__(32);

module.exports = function (options) {
    //var {tplNode,tplTree} = options;
    var PropMeta = {};
    PropMeta[_FormItemType2.default.inputrefer] = InputReferMeta(options);
    PropMeta[_FormItemType2.default.input] = InputMeta(options);
    PropMeta[_FormItemType2.default.select] = SelectMeta(options);
    PropMeta[_FormItemType2.default.date] = DateMeta(options);
    PropMeta[_FormItemType2.default.number] = NumberMeta(options);
    PropMeta[_FormItemType2.default.currency] = CurrencyMeta(options);
    PropMeta[_FormItemType2.default.switch] = SwitchMeta(options);
    PropMeta[_FormItemType2.default.enumselect] = EnumSelectMeta(options);
    PropMeta[_FormItemType2.default.cascader] = CascaderMeta(options);
    PropMeta[_FormItemType2.default.radiogroup] = RadioGroupMeta(options);
    PropMeta[_FormItemType2.default.checkboxgroup] = CheckboxGroupMeta(options);
    PropMeta[_FormItemType2.default.textarea] = TextareaMeta(options);
    PropMeta[_FormItemType2.default.imageupload] = ImageUploadMeta(options);
    PropMeta[_FormItemType2.default.attachupload] = AttachUploadMeta(options);
    PropMeta[_FormItemType2.default.inputmap] = InputMapMeta(options);
    PropMeta[_FormItemType2.default.editor] = EditorMeta(options);
    PropMeta[_FormItemType2.default.attachmgrw] = AttachMgrwMeta(options);
    PropMeta[_FormItemType2.default.time] = TimeMeta(options);
    PropMeta[_FormItemType2.default.rangepicker] = RangePickerMeta(options);
    PropMeta[_FormItemType2.default.plaintext] = TextMeta(options);
    PropMeta[_FormItemType2.default.autoselect] = AutoSelectMeta(options);
    PropMeta[_FormItemType2.default.inputbutton] = InputButtonMeta(options);
    return PropMeta;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputsToValues = {};
FormInputsToValues[_FormItemType2.default.input] = __webpack_require__(33); //输入框的配置项
FormInputsToValues[_FormItemType2.default.inputrefer] = __webpack_require__(34); //参照的配置项
FormInputsToValues[_FormItemType2.default.date] = __webpack_require__(35); //日期框的配置项
FormInputsToValues[_FormItemType2.default.rangepicker] = __webpack_require__(36); //日期范围选择器的配置项
FormInputsToValues[_FormItemType2.default.number] = __webpack_require__(37); //数字框的配置项
FormInputsToValues[_FormItemType2.default.switch] = __webpack_require__(39); //开关的配置项
FormInputsToValues[_FormItemType2.default.select] = __webpack_require__(40); //下拉框的配置项
FormInputsToValues[_FormItemType2.default.enumselect] = __webpack_require__(41); //自定义档案枚举扩展配置项
FormInputsToValues[_FormItemType2.default.currency] = __webpack_require__(38); //金额框的配置项
FormInputsToValues[_FormItemType2.default.cascader] = __webpack_require__(42); //级联框的配置项
FormInputsToValues[_FormItemType2.default.radiogroup] = __webpack_require__(43); //单选框的配置项
FormInputsToValues[_FormItemType2.default.checkboxgroup] = __webpack_require__(44); //多选框的配置项
FormInputsToValues[_FormItemType2.default.imageupload] = __webpack_require__(45); //图片上传的配置项
FormInputsToValues[_FormItemType2.default.attachupload] = __webpack_require__(46); //附件上传的配置项
FormInputsToValues[_FormItemType2.default.textarea] = __webpack_require__(47); //文本域的配置项
FormInputsToValues[_FormItemType2.default.inputmap] = __webpack_require__(95); //地图选址
FormInputsToValues[_FormItemType2.default.editor] = __webpack_require__(48); //富文本编辑
FormInputsToValues[_FormItemType2.default.attachmgrw] = __webpack_require__(11); //附件管理
FormInputsToValues[_FormItemType2.default.time] = __webpack_require__(49); //时间框
FormInputsToValues[_FormItemType2.default.plaintext] = __webpack_require__(50); //纯文本
FormInputsToValues[_FormItemType2.default.autoselect] = __webpack_require__(51); //自动匹配

module.exports = FormInputsToValues;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputsValues = {};
FormInputsValues[_FormItemType2.default.attachupload] = __webpack_require__(52); //附件上传的配置项
FormInputsValues[_FormItemType2.default.cascader] = __webpack_require__(53); //级联框的配置项
FormInputsValues[_FormItemType2.default.currency] = __webpack_require__(54); //金额框的配置项
FormInputsValues[_FormItemType2.default.date] = __webpack_require__(55); //日期框的配置项
FormInputsValues[_FormItemType2.default.rangepicker] = __webpack_require__(56); //日期范围选择器的配置项
FormInputsValues[_FormItemType2.default.enumselect] = __webpack_require__(57); //自定义档案枚举扩展配置项
FormInputsValues[_FormItemType2.default.imageupload] = __webpack_require__(58); //图片上传的配置项
FormInputsValues[_FormItemType2.default.input] = __webpack_require__(59); //输入框的配置项
FormInputsValues[_FormItemType2.default.inputrefer] = __webpack_require__(60); //参照的配置项
FormInputsValues[_FormItemType2.default.number] = __webpack_require__(61); //数字框的配置项
FormInputsValues[_FormItemType2.default.checkboxgroup] = __webpack_require__(62); //多选框的配置项
FormInputsValues[_FormItemType2.default.radiogroup] = __webpack_require__(63); //单选框的配置项
FormInputsValues[_FormItemType2.default.select] = __webpack_require__(64); //下拉框的配置项
FormInputsValues[_FormItemType2.default.switch] = __webpack_require__(65); //开关的配置项
FormInputsValues[_FormItemType2.default.textarea] = __webpack_require__(66); //文本域的配置项
FormInputsValues[_FormItemType2.default.editor] = __webpack_require__(67); //富文本编辑的配置项
FormInputsValues[_FormItemType2.default.attachmgrw] = __webpack_require__(12); //附件管理
FormInputsValues[_FormItemType2.default.time] = __webpack_require__(68); //时间框
FormInputsValues[_FormItemType2.default.plaintext] = __webpack_require__(69); //纯文本
FormInputsValues[_FormItemType2.default.autoselect] = __webpack_require__(70); //自动匹配
FormInputsValues[_FormItemType2.default.inputmap] = null; //地图选址的配置项
FormInputsValues[_FormItemType2.default.inputbutton] = null; //输入框按钮
module.exports = FormInputsValues;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // PropMeta = PropMeta.concat([]);
    //     //当附件管理独立使用在列表页面的工具栏时需要配置指定的sourceId（卡片表单页面sourceId不允许配置）
    //     PropMeta.push({
    //         name: 'sourceId',
    //         label: '单据标识',
    //         type: MetaType.Text,
    //         props: {},
    //         defaultValue: ''
    //     });
    // }
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw){

    PropMeta = PropMeta.concat([{
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'sourceType',
        label: '业务类型',
        help: '单据下的细分业务类型标识',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER

        },
        defaultValue: ''
    }, {
        name: 'serverUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'align',
        label: '排列方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '从左侧排列',
                value: 'left'
            }, {
                text: '从右侧排列',
                value: 'right'
            }]
        },
        defaultValue: 'left'
    }, {
        name: 'readOnly',
        label: '只读下载',
        help: '启用后将不允许上传和删除附件，只能进行下载',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'btnType',
        label: '按钮风格',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, {
                text: '绿色',
                value: 'success'
            }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'btnGhost',
        label: '按钮透明',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'fileLengthVisible',
        label: '显示角标',
        type: _indexDeps.MetaType.Bool,
        props: {},
        help: '在右上角显示附件数量角标',
        defaultValue: false
    }, {
        name: 'multiple',
        label: '批量上传',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'showUploadBtn',
        label: '上传按钮',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'showDelBtn',
        label: '删除按钮',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'deleteTip',
        label: '删除提示',
        help: '默认提示内容“删除的附件不可恢复！确定要删除？”',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'accept',
        label: '文件类型',
        help: '限制只允许上传指定类型的文件,例如：.jpg,.png,.doc,.docx,.xls,.xlsx等',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);

    // }
    return PropMeta;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // BasePropToValues(options);//处理公共属性
    // }

    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "serverUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "sourceId":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "sourceType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if (value) {
                        // meta.defaultValue = {}
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billTypeId = value.id;
                        tplNode.billTypeName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billTypeId;
                        delete tplNode.billTypeName;
                        delete tplNode.billType;
                    }
                    break;
                }
            // case "readOnly":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showUploadBtn":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "multiple":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showDelBtn":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "align":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isEqualSet(tplNode,meta.name,value,'right');
            //     break;
            // }
            // case "btnType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "btnGhost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "fileLengthVisible": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "deleteTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "accept":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    // }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr){
    //     // newFormData = BasePropValues(options);//处理公共属性
    // }
    //处理特有属性
    // if(tplNode.uitype == UiTypeDef.attachmgrw
    //     ||tplNode.uitype == UiTypeDef.CPAttachMgr
    //     ||tplNode.uitype == UiTypeDef.formitemw) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "buttonText": {
            //     meta.defaultValue=tplNode.buttonText!=undefined?tplNode.buttonText:meta.defaultValue;
            //     break;
            // }
            // case "serverUrl":{
            //     meta.defaultValue=tplNode.serverUrl!=undefined?tplNode.serverUrl:meta.defaultValue;
            //     break;
            // }
            // case "sourceId":{
            //     meta.defaultValue=tplNode.sourceId!=undefined?tplNode.sourceId:meta.defaultValue;
            //     break;
            // }
            // case "sourceType":{
            //     meta.defaultValue=tplNode.sourceType!=undefined?tplNode.sourceType:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billType){
                    //     meta.defaultValue = {}
                    //     meta.defaultValue.code = tplNode.billType
                    //     meta.defaultValue.name = tplNode.billTypeName
                    //     meta.defaultValue.id = tplNode.billTypeId
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode[meta.name]) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.billTypeId;
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billTypeName;
                    }
                    break;
                }
            // case "readOnly":{
            //     meta.defaultValue=tplNode.readOnly!=undefined?tplNode.readOnly:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "fileTypes":{
            //     meta.defaultValue=tplNode.fileTypes!=undefined?tplNode.fileTypes:meta.defaultValue;
            //     break;
            // }
            // case "showUploadBtn":{
            //     meta.defaultValue=tplNode.showUploadBtn!=undefined?tplNode.showUploadBtn:meta.defaultValue;
            //     break;
            // }
            // case "multiple":{
            //     meta.defaultValue=tplNode.multiple!=undefined?tplNode.multiple:meta.defaultValue;
            //     break;
            // }
            // case "showDelBtn":{
            //     meta.defaultValue=tplNode.showDelBtn!=undefined?tplNode.showDelBtn:meta.defaultValue;
            //     break;
            // }
            // case "align":{
            //     meta.defaultValue=tplNode.align!=undefined?tplNode.align:meta.defaultValue;
            //     break;
            // }
            //
            // case "btnType":{
            //     meta.defaultValue=tplNode.btnType!=undefined?tplNode.btnType:meta.defaultValue;
            //     break;
            // }
            // case "btnGhost":{
            //     meta.defaultValue=tplNode.btnGhost!=undefined?tplNode.btnGhost:meta.defaultValue;
            //     break;
            // }
            // case "fileLengthVisible":{
            //     meta.defaultValue=tplNode.fileLengthVisible!=undefined?tplNode.fileLengthVisible:meta.defaultValue;
            //     break;
            // }
            // case "deleteTip": {
            //     meta.defaultValue=tplNode.deleteTip!=undefined?tplNode.deleteTip:meta.defaultValue;
            //     break;
            // }
            // case "accept": {
            //     meta.defaultValue=tplNode.accept!==undefined?tplNode.accept:meta.defaultValue;
            //     break;
        }
    }
    //     }
    // }
    return newFormData;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.attachupload//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    // ){
    PropMeta = PropMeta.concat([//图片上传扩展配置
    {
        name: 'btnType',
        label: '按钮风格',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'action',
        label: '上传地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'sourceType',
        label: '业务类型',
        help: '单据下的细分业务类型标识',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'showUploadList',
        label: '显示列表',
        help: '是否显示已上传的文件列表',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'multiple',
        label: '批量上传',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'deleteTip',
        label: '删除提示',
        help: '默认提示内容“删除的附件不可恢复！确定要删除？”',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'accept',
        label: '文件类型',
        help: '限制只允许上传指定类型的文件,例如：.jpg,.png,.doc,.docx,.xls,.xlsx等',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.cascader){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.cascader||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'size',
        label: '尺寸',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'large', text: '大' }, { value: 'default', text: '中' }, { value: 'small', text: '小' }]
        },
        defaultValue: 'default'
    }, {
        name: 'allowClear',
        label: '允许清除',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'expandTrigger',
        label: '展开方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '点击', value: 'click' }, { text: '悬浮', value: 'hover' }]
        },
        defaultValue: 'click'
    }, {
        name: 'changeOnSelect',
        label: '即选生效',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'options',
        label: '本地数据',
        help: '配置本地演示数据',
        type: _indexDeps.MetaType.LocalData,
        props: { owner: 'cascader' },
        defaultValue: null
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.currency//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'decimal',
        label: '保留小数',
        type: _indexDeps.MetaType.Number,
        help: '计算或存储的精度小数位（即输入时显示的精度小数位）',
        props: {

            enableSelect: false,
            min: 0,
            max: 10
        },
        defaultValue: 3
    }, {
        name: 'showDecimal',
        label: '显示小数',
        help: '显示的小数位，不会影响存储的精度（即非输入时显示的小数位）',
        type: _indexDeps.MetaType.Select,
        props: {

            options: function () {
                var list = [{ text: '按保留小数位显示', value: '' }];
                for (var i = 1; i <= 10; i++) {
                    list.push({ text: '显示' + i + '位', value: i });
                }
                return list;
            }()
        },
        defaultValue: undefined
    }, {
        name: 'zeroFilling',
        label: '自动补零',
        help: '当小数位不足指定个数位时，是否自动补零',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableCalc',
        label: '计算器',
        help: '当启用时提供便捷计算器功能',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'symbol',
        label: '货币符号',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '￥', value: '￥' }, { text: '$', value: '$' }, { text: '无', value: ' ' }] // 目前仅提供人名币和美元符号
        },
        defaultValue: ' '
    }, {
        name: 'addonAfter',
        label: '文本后缀',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'direction',
        label: '文本朝向',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }]
        },
        defaultValue: 'right'
    }, {
        name: 'min',
        label: '最小值',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'max',
        label: '最大值',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    //编辑表格中不显示精确数值框本身的千分位配置
    if (tplNode.uitype !== _Defines.UiTypeDef.edititemw) {
        PropMeta.push({
            name: 'commaVisible',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'minus',
        label: '允许负数',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'precisionConfig',
        label: '精度参数',
        type: _indexDeps.MetaType.EnumSelect,
        props: {

            code: 'precision_config',
            valueKey: 'code'
        },
        defaultValue: null
    }, {
        name: 'range',
        label: '范围取值',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.datepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.datepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//日期扩展的配置
    {
        name: 'format',
        label: '日期格式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy年MM月', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM-dd HH', 'yyyy-MM', 'yyyy/MM', 'yyyy'],
            showSearch: true
        },
        defaultValue: 'yyyy-MM-dd'
    }, {
        name: 'showTime',
        label: '时间选择',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.enumselect//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
    PropMeta = PropMeta.concat([//自定义档案枚举选择扩展配置
    {
        name: 'referObj',
        label: '档案编码',
        props: {
            refinfokey: 'bd-009',
            serverUrl: _indexDeps.SUPPORT_SERVER

        },
        type: _indexDeps.MetaType.Refer,
        defaultValue: ''
    }, {
        name: 'placeholder',
        label: '置空提示',
        props: {},
        type: _indexDeps.MetaType.Text,
        defaultValue: ''
    }, {
        name: 'defaultActiveFirstOption',
        label: '默认首项',
        help: '默认选中第一项值',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    },
    //{
    //    name: 'defaultValue',
    //    label: '默认选中',
    //    help:'对应值下拉项的键值',
    //    type: MetaType.Text,
    //    props: {
    //
    //    },
    //    defaultValue: ''
    //},
    {
        name: 'serverUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'allowClear',
        label: '启用清除',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'valueType',
        label: '取值类型',
        help: "定义onChange回调提供的值类型",
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串值' }, { value: 'object', text: '对象值' }]
        },
        defaultValue: 'string'
    }, {
        name: 'valueKey',
        label: '取值属性',
        help: "定义当取值类型为字符串值（string）时，值来自于id还是code",
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'code', text: '属性code值' }, { value: 'id', text: '属性id值' }, { value: 'name', text: '属性name值' }]
        },
        defaultValue: 'code'
    }, {
        name: 'multiple',
        label: '支持多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.imageupload||tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '点击上传'
    }, {
        name: 'maxCount',
        label: '图片数量',
        help: '限制上传的最大图片数量，必须大于等于1才生效，0即无限制数量',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSlider: false,
            enableSelect: false
        },
        defaultValue: ''
    }, {
        name: 'maxWidth',
        label: '限制宽度',
        help: '上传图片的尺寸宽度超过限制值时不允许上传',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSlider: false,
            enableSelect: false,
            max: 9999
        },
        defaultValue: null
    }, {
        name: 'maxHeight',
        label: '限制高度',
        help: '上传图片的尺寸高度超过限制值时不允许上传',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSlider: false,
            enableSelect: false,
            max: 9999
        },
        defaultValue: null
    }, {
        name: 'maxType',
        label: '限制类型',
        help: '上传图片的尺寸限制类型，当限制宽度、限制高度被设置时才生效',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '固定尺寸', value: 0 }, { text: '尺寸范围内', value: 1 }]
        },
        defaultValue: 0
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'sourceType',
        label: '业务类型',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'deleteTip',
        label: '删除提示',
        help: '默认提示内容“删除的附件不可恢复！确定要删除？”',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.input){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.input||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//文本框扩展的配置
    {
        name: 'maxLength',
        label: '限制长度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'autoSelect',
        label: '内容全选',
        help: '当启用时，每次获取焦点时自动全选文本内容，默认启用',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'autoTrim',
        label: '去除空格',
        type: _indexDeps.MetaType.Bool,
        help: '当启用时，不允许输入内容左右带多余空格，默认启用',
        props: {},
        defaultValue: true
    }, {
        name: 'value',
        label: '默认值',
        type: _indexDeps.MetaType.Text,
        props: {

            enableSelect: false
        },
        defaultValue: null
    }, {
        name: 'addonAfter',
        label: '文本后缀',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputbutton){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputbutton||
    //     tplNode.uitype == UiTypeDef.formitemw) {
    PropMeta = PropMeta.concat([{
        name: 'type',
        label: '颜色',
        type: _indexDeps.MetaType.Select,
        help: '按钮的填充颜色',
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'disabled',
        label: '是否禁用',
        type: _indexDeps.MetaType.Bool,
        props: {

            checkedChildren: "是",
            unCheckedChildren: "否"
        },
        defaultValue: false
        // },{
        //     name: 'size',
        //     label: '尺寸',
        //     type: MetaType.Select,
        //     props: {
        //
        //         options:['large','default','small']
        //     },
        //     defaultValue:'default'
    }, {
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '搜索'
    }, {
        name: 'buttonIcon',
        label: '按钮图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: null
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputrefer){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputrefer||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem) {
    PropMeta = PropMeta.concat([//参照扩展的配置
    {
        name: 'refinfokey',
        label: '参照编码',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: '001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'referRelation',
        label: '参照映射',
        help: '将当前参照的id、name、code值映射赋值给表单中的其它字段',
        type: _indexDeps.MetaType.ReferEditRelation,
        props: {
            fields: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                fieldsNode.forEach(function (node, index) {
                    //排除自身
                    if (tplNode.nid !== node.nid && !node.referRelation && node.uikey) {
                        fields.push({ key: node.uikey, title: node.uititle, uisubtype: node.uisubtype });
                    }
                });
                return fields;
            }(), //注意立即执行
            refCode: tplNode.refinfokey
        },
        defaultValue: null
    }, {
        name: 'multiselect',
        label: '参照多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'searchPlaceholder',
        label: '搜索提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'checkControl',
        label: '父子联动',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _CurrencyMeta = __webpack_require__(15);

var _CurrencyMeta2 = _interopRequireDefault(_CurrencyMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];

    if (tplNode.type == 'currency') {
        return (0, _CurrencyMeta2.default)(options);
    } else {
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     //PropMeta = PropMeta.concat(options.baseMeta);
        // }
        // //扩展特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
        // ) {
        PropMeta = PropMeta.concat([//数字输入框扩展配置
        {
            name: 'defaultValue',
            label: '默认值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'min',
            label: '最小数值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'max',
            label: '最大数值',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'addonAfter',
            label: '文本后缀',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'direction',
            label: '文本朝向',
            type: _indexDeps.MetaType.Select,
            props: {

                options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }]
            },
            defaultValue: 'right'
        }, {
            name: 'placeholder',
            label: '置空提示',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'range',
            label: '范围取值',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: false
        }]);
        // }
        return PropMeta;
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'defaultValue',
        label: '默认选中',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var radios = [];
                (tplNode.children || []).forEach(function (item) {
                    radios.push({
                        value: item.uikey,
                        text: item.children,
                        key: item.uikey
                    });
                });
                return radios;
            }(),
            multiple: true
        },
        defaultValue: []
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.radiogroup){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.radiogroup||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'defaultValue',
        label: '默认选中',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var items = [];
                (tplNode.children || []).forEach(function (item, index) {
                    items.push({
                        value: item.uikey,
                        text: item.children,
                        key: item.uikey
                    });
                });
                return items;
            }(), //注意立即执行
            allowClear: true
        },
        defaultValue: undefined
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.select){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.select//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
    //var isMultiple = tplNode.multiple!==undefined?tplNode.multiple:false;
    PropMeta = PropMeta.concat([//下拉选择扩展的配置
    {
        name: 'defaultValue',
        label: '默认选中',
        type: _indexDeps.MetaType.Select,
        props: {
            allowClear: true,
            options: function () {
                var optionNodes = tplNode.children || [];
                var formMetaOptions = [];
                optionNodes.forEach(function (option) {
                    formMetaOptions.push({
                        value: option.uikey,
                        key: option.uikey,
                        text: option.uititle
                    });
                });
                return formMetaOptions;
            }() //注意立即执行
        },
        defaultValue: ''
    }, {
        name: 'allowClear',
        label: '启用清除',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'valueType',
        label: '取值类型',
        help: "定义onChange回调提供的值类型",
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串值' }, { value: 'object', text: '对象值' }]
        },
        defaultValue: 'string'
    }, {
        name: 'placeholder',
        label: '置空提示',
        props: {},
        type: _indexDeps.MetaType.Text,
        defaultValue: ''
    }, {
        name: 'multiple',
        label: '支持多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.switch||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([{
        name: 'defaultChecked',
        label: '是否选中',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false

    }, {
        name: 'checkedChildren',
        label: '选中显示',
        type: _indexDeps.MetaType.Text,
        help: '注意只能为一个汉字，例如：“是”“开”',
        props: {},
        defaultValue: ''
    }, {
        name: 'unCheckedChildren',
        label: '非选中显示',
        type: _indexDeps.MetaType.Text,
        help: '注意只能为一个汉字，例如：“否”“关”',
        props: {},
        defaultValue: ''
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.textarea){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    PropMeta = PropMeta.concat([//文本域扩展配置
    {
        name: 'autosize',
        label: '自动高度',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    if (tplNode.autosize) {
        PropMeta = PropMeta.concat([{
            name: 'minRows',
            label: '最小行高',
            help: '保留至少几行文字的高度',
            type: _indexDeps.MetaType.Number,
            props: {

                enableSlider: false,
                enableSelect: false
            },
            defaultValue: ''
        }, {
            name: 'maxRows',
            label: '最大行高',
            help: '当文字行数超过最大行高时，文本框高度不再增加，而将出现水平滚动条',
            type: _indexDeps.MetaType.Number,
            props: {

                enableSlider: false,
                enableSelect: false
            },
            defaultValue: ''
        }]);
    }
    PropMeta = PropMeta.concat([{
        name: 'maxLength',
        label: '限制长度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'showTitle',
        label: '提示文本',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.editor
    //   ||tplNode.uitype == UiTypeDef.formitemw
    // ) {
    PropMeta = PropMeta.concat([//扩展的配置
    {
        name: 'icons',
        label: '工具配置',
        type: _indexDeps.MetaType.EditorIcons,
        props: {},
        defaultValue: null
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.timepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.timepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//日期扩展的配置
    {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'format',
        label: '时间格式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: ['HH:mm:ss', 'HH:mm', 'mm:ss'],
            showSearch: true
        },
        defaultValue: 'HH:mm:ss'
    }, {
        name: 'hideDisabledOptions',
        label: '隐藏禁止项',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.rangepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.rangepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//日期范围选择器扩展的配置
    {
        name: 'format',
        label: '日期格式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy年MM月', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM', 'yyyy'],
            showSearch: true
        },
        defaultValue: 'yyyy-MM-dd'
    }, {
        name: 'showTime',
        label: '时间选择',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    // }

    return PropMeta;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.text){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.text||
    //     tplNode.uitype == UiTypeDef.formitemw) {
    PropMeta = PropMeta.concat([//文本框扩展的配置
    {
        name: 'fieldtype',
        label: '数据类型',
        help: '定义后端存储的值类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串' }, { value: 'date', text: '日期值' }, { value: 'number', text: '整数值' }, { value: 'currency', text: '精数值' }]
        },
        defaultValue: 'string'
    }]);
    if (tplNode.fieldtype === 'currency') {
        PropMeta.push({
            name: 'comma',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'decimal',
            label: '保留小数',
            type: _indexDeps.MetaType.Number,
            help: '计算或存储的精度小数位（即输入时显示的精度小数位）',
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: 3
        }, {
            name: 'showDecimal',
            label: '显示小数',
            help: '显示的小数位，不会影响存储的精度（即非输入时显示的小数位）',
            type: _indexDeps.MetaType.Select,
            props: {

                options: function () {
                    var list = [{ text: '按保留小数位显示', value: '' }];
                    for (var i = 1; i <= 10; i++) {
                        list.push({ text: '显示' + i + '位', value: i });
                    }
                    return list;
                }()
            },
            defaultValue: undefined
        }, {
            name: 'zeroFilling',
            label: '自动补零',
            help: '当小数位不足指定个数位时，是否自动补零',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    if (tplNode.fieldtype === 'date') {
        PropMeta.push({
            name: 'format',
            label: '日期格式',
            type: _indexDeps.MetaType.Select,
            props: {

                options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM']
            },
            defaultValue: 'yyyy-MM-dd'
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'value',
        label: '默认值',
        type: _indexDeps.MetaType.Text,
        props: {

            enableSelect: false
        },
        defaultValue: null
    }, {
        name: 'addonAfter',
        label: '文本后缀',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.autoselect){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.autoselect||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
    PropMeta = PropMeta.concat([//参照扩展的配置
    {
        name: 'refinfokey',
        label: '参照编码',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: '001',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: { refType: "autoSelect" }
        },
        defaultValue: null
    }, {
        name: 'valueType',
        label: '取值类型',
        help: "定义onChange回调提供的值类型",
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串值' }, { value: 'object', text: '对象值' }]
        },
        defaultValue: 'string'
    }, {
        name: 'maxSize',
        label: '最大条数',
        help: '匹配下拉选项最大显示条数，默认20条',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'propKey',
        label: '其它属性',
        help: "其它需要显示的属性，和返回bo中属性名一致，用“,”隔开",
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'maxLength',
        label: '限制长度',
        help: '输入框输入的长度限制',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'placeholder',
        label: '置空提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.input){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.input);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.input);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.input;

    // if(tplNode.uitype == UiTypeDef.input || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "maxLength":
            case "autoSelect":
            case "autoTrim":
            case "value":
            case "addonAfter":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputrefer){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.inputrefer);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.inputrefer);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.inputrefer;
    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.inputrefer || isFormItem || isEditItem || isSearchItem ) {
    delete tplNode.serverUrl; //清理掉之前记录在数据库的旧IP
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "refinfokey":
                {
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        if (isSearchItem) {
                            delete tplNode[meta.name];
                            tplNode.inputprops.refinfokey = value.refCode ? value.refCode : value.code;
                            tplNode.inputprops.refName = value.refName ? value.refName : value.name;
                            tplNode.inputprops.refId = value.refId ? value.refId : value.id;
                        } else {
                            tplNode.refinfokey = value.refCode ? value.refCode : value.code;
                            tplNode.refName = value.refName ? value.refName : value.name;
                            tplNode.refId = value.refId ? value.refId : value.id;
                        }
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.refinfokey;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
            case "multiselect":
            case "searchPlaceholder":
            case "checkControl":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.datepicker){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // if(tplNode.uitype == UiTypeDef.datepicker || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "format":
            case "showTime":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.rangepicker){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.rangepicker);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.rangepicker);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.rangepicker;

    // if(tplNode.uitype == UiTypeDef.rangepicker || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "format":
            case "showTime":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

var _CurrencyToValues = __webpack_require__(38);

var _CurrencyToValues2 = _interopRequireDefault(_CurrencyToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    if (tplNode.type == 'currency') {
        return (0, _CurrencyToValues2.default)(options);
    } else {
        // //基础公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // BasePropToValues(options);//处理公共属性
        // }
        // //是否为表单项
        // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.number);
        // //是否为编辑项
        // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.number);
        //是否为搜索条件项
        var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.number;
        // if(tplNode.uitype == UiTypeDef.inputnumber
        //     || isFormItem || isEditItem || isSearchItem ) {
        for (var i = 0; i < formMeta.length; i++) {
            var meta = formMeta[i];
            if (!(meta.name in formData)) continue;
            var value = formData[meta.name];
            switch (meta.name) {
                case "defaultValue":
                case "min":
                case "max":
                case "addonAfter":
                case "direction":
                case "placeholder":
                case "range":
                    if (isSearchItem) {
                        _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                    }
                    break;
            }
        }
    }
    // }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    //是否为编辑项

    var isEditItem = tplNode.uitype == _Defines.UiTypeDef.edititemw;
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.currency
    //     || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "decimal":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列精确小数位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalDecimal = value;
                        }
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "zeroFilling":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isFalseSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列千分位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalZeroFilling = value;
                        }
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "comma":
                {
                    //联动编辑表格
                    if (isEditItem) {
                        //联动精确数值框千分位
                        tplNode.commaVisible = value;
                        //联动编辑表格合计列千分位
                        if (tplNode.total) {
                            tplNode.totalComma = value;
                        }
                    }
                    break;
                }
            case "commaVisible":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isFalseSet(tplNode.inputprops, meta.name, value);
                    } else {
                        //联动编辑表格合计列千分位
                        if (tplNode.total && isEditItem) {
                            tplNode.totalComma = value;
                        }
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "range":
                {
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isTrueSet(tplNode, meta.name, value);
                        _indexDeps.LogicUtils.isExistSet(tplNode, 'defaultValue', value ? [] : null); //为了忘记在range模式下配置defaultValue准备
                    }
                    break;
                }
            case "showDecimal":
            case "enableCalc":
            case "symbol":
            case "addonAfter":
            case "direction":
            case "min":
            case "max":
            case "placeholder":
            case "minus":
            case "precisionConfig":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;

    // if(tplNode.uitype == UiTypeDef.switch || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "defaultChecked":
            case "checkedChildren":
            case "unCheckedChildren":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.select){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.select);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.select);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.select;
    //是否支持多选
    var isMultiple = tplNode.multiple !== undefined ? tplNode.multiple : false;

    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.select || isFormItem || isEditItem || isSearchItem){
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "defaultValue":
                {
                    if (isMultiple) {
                        value = value == "" || value == undefined || value == null ? [] : value;
                    }
                    // meta.defaultValue = value;
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "multiple":
                {
                    // meta.defaultValue = value;
                    //当是否支持多选发生变更时，清除之前的默认值配置
                    if (tplNode.multiple == undefined && value == true || tplNode.multiple == true && value == false) {
                        delete tplNode.defaultValue;
                    }
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    } else {
                        _indexDeps.LogicUtils.isTrueSet(tplNode, meta.name, value);
                    }
                    break;
                }
            case "allowClear":
            case "valueType":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.enumselect);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.enumselect);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem && tplNode.inputtype == _FormItemType2.default.enumselect;

    // //是否支持多选
    // var isMultiple = tplNode.multiple!==undefined?tplNode.multiple:false;

    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.enumselect
    //     || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "referObj":
                {
                    delete tplNode[meta.name];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue = {};
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        if (isSearchItem) {
                            tplNode.inputprops.code = value.refCode ? value.refCode : value.code;
                            tplNode.inputprops.refName = value.refName ? value.refName : value.name;
                            tplNode.inputprops.refId = value.refId ? value.refId : value.id;
                        } else {
                            tplNode.code = value.refCode ? value.refCode : value.code;
                            tplNode.refName = value.refName ? value.refName : value.name;
                            tplNode.refId = value.refId ? value.refId : value.id;
                        }
                    } else {
                        delete tplNode.code;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
            case "multiple":
                {
                    //当是否支持多选发生变更时，清除之前的默认值配置
                    if (tplNode.multiple == undefined && value == true || tplNode.multiple == true && value == false) {
                        delete tplNode.defaultValue;
                    }
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isTrueSet(tplNode.inputprops, meta.name, value);
                    }
                    break;
                }
            case "defaultActiveFirstOption":
            case "serverUrl":
            case "enableOrg":
            case "allowClear":
            case "valueType":
            case "valueKey":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.cascader){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.cascader||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.cascader)) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "size":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "allowClear":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isTrueSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "placeholder":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "expandTrigger":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "changeOnSelect":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isTrueSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //             case "options":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode, meta.name,value);
    //                 break;
    //             }
    //         }
    //     }
    // }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.radiogroup){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.radiogroup||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.radiogroup)) {
    //         for(var i=0;i<formMeta.length;i++) {
    //             var meta = formMeta[i];
    //             if(!(meta.name in formData))continue;
    //             var value = formData[meta.name];
    //             switch (meta.name) {
    //                 case "defaultValue":{
    //                     // meta.defaultValue = value;
    //                     //当为"无"时，值为空字符串，所以只要不等于undefined就设置值
    //                     LogicUtils.isNotEqualSet(tplNode,meta.name,value,undefined);
    //                     break;
    //                 }
    //             }
    //         }
    //     }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkboxgroup){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.checkboxgroup||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.checkboxgroup)) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "defaultValue":{
    //                 // meta.defaultValue = value;
    //                 //当为"无"时，值为空字符串，所以只要不等于undefined就设置值
    //                 LogicUtils.isNotEqualSet(tplNode,meta.name,value,undefined);
    //                 break;
    //             }
    //         }
    //     }
    // }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // // 自定义档案枚举选择配置
    // if(tplNode.uitype == UiTypeDef.imageupload||
    //     ((tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw)&& tplNode.uisubtype==FormItemType.imageupload)) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxCount":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxWidth":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxHeight":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "maxType":{
            //     meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "sourceType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "deleteTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    // }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.attachupload);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.attachupload);
    // if(tplNode.uitype == UiTypeDef.attachupload
    //     || isFormItem || isEditItem ){

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "action":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showUploadList":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "multiple":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "btnType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "sourceType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "deleteTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "accept":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    // }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.textarea){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "autosize":
                {
                    //     // meta.defaultValue = value;
                    //     LogicUtils.isExistSet(tplNode,meta.name,value);
                    tplNode.autosize = value === false ? false : {};
                    break;
                }
            case "minRows":
            case "maxRows":
                delete tplNode[meta.name];
                if (tplNode.autosize !== false) {
                    tplNode.autosize = _typeof(tplNode.autosize) == 'object' ? tplNode.autosize : {};
                    _indexDeps.LogicUtils.isExistSet(tplNode.autosize, meta.name, value);
                }
                break;
            // case "maxLength":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "placeholder":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showTitle":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    // }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.editor);
    // // 富文本编辑配置
    // if(tplNode.uitype == UiTypeDef.editor
    //     || isFormItem
    // ) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         if(!(meta.name in formData))continue;
    //         var value = formData[meta.name];
    //         switch (meta.name) {
    //             case "icons":{
    //                 // meta.defaultValue = value;
    //                 LogicUtils.isExistSet(tplNode,meta.name,value);
    //                 break;
    //             }
    //         }
    //     }
    // }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.timepicker){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // if(tplNode.uitype == UiTypeDef.timepicker || isFormItem || isEditItem || isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "format":
            case "hideDisabledOptions":
            case "placeholder":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.text){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.text ||
    //     tplNode.uitype == UiTypeDef.formitemw
    // ) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "value":{
            //     meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "addonAfter":{
            //     meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "fieldtype":{
            //     meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['date','boolean','number','currency']);
            //     break;
            // }
            // case "comma":{
            //     meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            case "decimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.decimal;
                    }
                    break;
                }
            case "showDecimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.showDecimal;
                    }
                    break;
                }
            case "zeroFilling":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.decimal;
                    }
                    break;
                }
            case "format":
                {
                    //日期格式
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'date') {
                        tplNode.format = value;
                    } else {
                        delete tplNode.format;
                    }
                    break;
                }
        }
    }
    // }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormInputsUtil = __webpack_require__(5);

var _FormInputsUtil2 = _interopRequireDefault(_FormInputsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.autoselect){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // //是否为表单项
    // var isFormItem = (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.autoselect);
    // //是否为编辑项
    // var isEditItem = (tplNode.uitype == UiTypeDef.edititemw && tplNode.uisubtype==FormItemType.autoselect);
    //是否为搜索条件项

    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    //下拉列表配置项
    // if(tplNode.uitype == UiTypeDef.autoselect || isFormItem || isEditItem || isSearchItem) {
    delete tplNode.serverUrl; //清理掉之前记录在数据库的旧IP
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "refinfokey":
                {
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        if (isSearchItem) {
                            delete tplNode[meta.name];
                            tplNode.inputprops.refinfokey = value.refCode ? value.refCode : value.code;
                            tplNode.inputprops.refName = value.refName ? value.refName : value.name;
                            tplNode.inputprops.refId = value.refId ? value.refId : value.id;
                        } else {
                            tplNode.refinfokey = value.refCode ? value.refCode : value.code;
                            tplNode.refName = value.refName ? value.refName : value.name;
                            tplNode.refId = value.refId ? value.refId : value.id;
                        }
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.refinfokey;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
            case "propKey":
                {
                    // meta.defaultValue = value;
                    var arrValue = value ? value.split(",") : [];
                    if (isSearchItem) {
                        delete tplNode[meta.name];
                        _indexDeps.LogicUtils.isExistSet(tplNode.inputprops, meta.name, arrValue);
                    } else {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, arrValue);
                    }
                    break;
                }
            case "valueType":
            case "maxSize":
            case "placeholder":
            case "maxLength":
                if (isSearchItem) {
                    _FormInputsUtil2.default.isSearchItemToValues({ meta: meta, tplNode: tplNode, value: value });
                }
                break;
        }
    }
    // }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.attachupload//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    // ){
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "action":{
            //     meta.defaultValue = tplNode.action !== undefined ? tplNode.action : meta.defaultValue;
            //     break;
            // }
            // case "showUploadList":{
            //     meta.defaultValue = tplNode.showUploadList!==undefined?tplNode.showUploadList:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue = tplNode.enableUser!==undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "buttonText":{
            //     meta.defaultValue = tplNode.buttonText!==undefined?tplNode.buttonText:meta.defaultValue;
            //     break;
            // }
            // case "multiple":{
            //     meta.defaultValue = tplNode.multiple!==undefined?tplNode.multiple:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "sourceType":{
            //     meta.defaultValue = tplNode.sourceType !== undefined ? tplNode.sourceType : meta.defaultValue;
            //     break;
            // }
            // case "btnType":{
            //     meta.defaultValue=tplNode.btnType!==undefined?tplNode.btnType:meta.defaultValue;
            //     break;
            // }
            // case "deleteTip": {
            //     meta.defaultValue=tplNode.deleteTip!==undefined?tplNode.deleteTip:meta.defaultValue;
            //     break;
            // }
            // case "accept": {
            //     meta.defaultValue=tplNode.accept!==undefined?tplNode.accept:meta.defaultValue;
            //     break;
            // }
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.cascader ){
    //     // newFormData = BasePropValues(options);
    // }
    // if(tplNode.uitype == UiTypeDef.cascader
    //     ||tplNode.uitype == UiTypeDef.formitemw
    //     ||tplNode.uitype == UiTypeDef.edititemw
    // ) {
    //     for (var i = 0; i < formMeta.length; i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "size":{
    //                 meta.defaultValue = tplNode.size != undefined ? tplNode.size : meta.defaultValue;
    //                 break;
    //             }
    //             case "allowClear":{
    //                 meta.defaultValue = tplNode.allowClear != undefined ? tplNode.allowClear : meta.defaultValue;
    //                 break;
    //             }
    //             case "placeholder":{
    //                 meta.defaultValue = tplNode.placeholder != undefined ? tplNode.placeholder : meta.defaultValue;
    //                 break;
    //             }
    //             case "changeOnSelect":{
    //                 meta.defaultValue = tplNode.changeOnSelect != undefined ? tplNode.changeOnSelect : meta.defaultValue;
    //                 break;
    //             }
    //             case "expandTrigger":{
    //                 meta.defaultValue = tplNode.expandTrigger != undefined ? tplNode.expandTrigger : meta.defaultValue;
    //                 break;
    //             }
    //             case "options":{
    //                 meta.defaultValue=tplNode.options!==undefined?tplNode.options:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;

    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.currency//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||isSearchItem//条件项
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "decimal":
            case "showDecimal":
            case "zeroFilling":
            case "enableCalc":
            case "symbol":
            case "addonAfter":
            case "direction":
            case "min":
            case "max":
            case "commaVisible":
            case "placeholder":
            case "minus":
            case "precisionConfig":
            case "range":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.datepicker ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.datepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "format":
            case "showTime":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.rangepicker ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.rangepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "format":
            case "showTime":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.enumselect ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;

    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.enumselect//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||isSearchItem//条件项
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "referObj":
                {
                    // meta.defaultValue = {};
                    // if(isSearchItem){
                    //     meta.defaultValue.code = tplNode.inputprops.code;
                    //     meta.defaultValue.name = tplNode.inputprops.refName;
                    //     meta.defaultValue.id = tplNode.inputprops.refId;
                    // }else{
                    //     meta.defaultValue.code = tplNode.code;
                    //     meta.defaultValue.name = tplNode.refName;
                    //     meta.defaultValue.id = tplNode.refId;
                    // }
                    if (isSearchItem) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.inputprops.code;
                        newFormData[meta.name].name = tplNode.inputprops.refName;
                        newFormData[meta.name].id = tplNode.inputprops.refId;
                    } else {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.code;
                        newFormData[meta.name].name = tplNode.refName;
                        newFormData[meta.name].id = tplNode.refId;
                    }
                    break;
                }
            case "defaultValue":
            case "defaultActiveFirstOption":
            case "serverUrl":
            case "enableOrg":
            case "allowClear":
            case "valueType":
            case "valueKey":
            case "multiple":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.imageupload||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "buttonText":{
            //     meta.defaultValue = tplNode.buttonText!==undefined?tplNode.buttonText:meta.defaultValue;
            //     break;
            // }
            // case "maxCount":{
            //     meta.defaultValue = tplNode.maxCount!==undefined?tplNode.maxCount:meta.defaultValue;
            //     break;
            // }
            // case "maxWidth":{
            //     meta.defaultValue = tplNode.maxWidth!==undefined?tplNode.maxWidth:meta.defaultValue;
            //     break;
            // }
            // case "maxHeight":{
            //     meta.defaultValue = tplNode.maxHeight!==undefined?tplNode.maxHeight:meta.defaultValue;
            //     break;
            // }
            // case "maxType":{
            //     meta.defaultValue = tplNode.maxType!==undefined?tplNode.maxType:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "sourceType":{
            //     meta.defaultValue = tplNode.sourceType !== undefined ? tplNode.sourceType : meta.defaultValue;
            //     break;
            // }
            // case "deleteTip": {
            //     meta.defaultValue=tplNode.deleteTip!==undefined?tplNode.deleteTip:meta.defaultValue;
            //     break;
            // }
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.input ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.input||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "maxLength":
            case "autoSelect":
            case "autoTrim":
            case "value":
            case "addonAfter":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.inputrefer ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.inputrefer||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
    //参照扩展的配置项
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "refinfokey":
                {
                    if (isSearchItem) {
                        // if(tplNode.inputprops&&tplNode.inputprops.refinfokey) {
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.inputprops.refinfokey;
                        //     meta.defaultValue.name = tplNode.inputprops.refName;
                        //     meta.defaultValue.id = tplNode.inputprops.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].id = tplNode.inputprops.refId;
                            newFormData[meta.name].code = tplNode.inputprops.refinfokey;
                            newFormData[meta.name].name = tplNode.inputprops.refName;
                        }
                    } else {
                        // if (tplNode.refinfokey){
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.refinfokey;
                        //     meta.defaultValue.name = tplNode.refName;
                        //     meta.defaultValue.id = tplNode.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode[meta.name] !== undefined) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].id = tplNode.refId;
                            newFormData[meta.name].code = tplNode.refinfokey;
                            newFormData[meta.name].name = tplNode.refName;
                        }
                    }
                    break;
                }
            case "multiselect":
            case "searchPlaceholder":
            case "checkControl":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _CurrencyValues = __webpack_require__(54);

var _CurrencyValues2 = _interopRequireDefault(_CurrencyValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    if (tplNode.type == 'currency') {
        return (0, _CurrencyValues2.default)(options);
    } else {
        // //处理公共属性
        // if(tplNode.uitype == UiTypeDef.inputnumber){
        //     // newFormData = BasePropValues(options);
        // }
        //是否为搜索条件项
        var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
        // //处理特有属性
        // if(tplNode.uitype == UiTypeDef.inputnumber//单独使用
        //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
        //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
        //     ||isSearchItem//条件项
        // ) {
        for (var i = 0; i < formMeta.length; i++) {
            var meta = formMeta[i];
            switch (meta.name) {
                case "defaultValue":
                case "min":
                case "max":
                case "addonAfter":
                case "direction":
                case "placeholder":
                case "range":
                    if (isSearchItem) {
                        if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                            newFormData[meta.name] = tplNode.inputprops[meta.name];
                        }
                    }
                    break;
            }
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
     var formMeta = options.formMeta,
         tplNode = options.tplNode,
         tplTree = options.tplTree;

     var newFormData = {};
     // //处理公共属性
     // if(tplNode.uitype == UiTypeDef.checkboxgroup){
     //     // newFormData = BasePropValues(options);
     // }
     // //处理特有属性
     // if(tplNode.uitype == UiTypeDef.checkboxgroup
     //     ||tplNode.uitype == UiTypeDef.formitemw
     //     ||tplNode.uitype == UiTypeDef.edititemw
     // ) {
     //     for(var i=0;i<formMeta.length;i++){
     //         var meta = formMeta[i];
     //         switch(meta.name){
     //             case "defaultValue":{
     //                 meta.defaultValue = tplNode.defaultValue !== undefined ? tplNode.defaultValue : meta.defaultValue;
     //                 break;
     //             }
     //         }
     //     }
     // }
     return newFormData;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.radiogroup ){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.radiogroup
    //     ||tplNode.uitype == UiTypeDef.formitemw
    //     ||tplNode.uitype == UiTypeDef.edititemw
    // ) {
    //     for(var i=0;i<formMeta.length;i++){
    //         var meta = formMeta[i];
    //         switch(meta.name){
    //             case "defaultValue":{
    //                 meta.defaultValue = tplNode.defaultValue !== undefined ? tplNode.defaultValue : meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.select ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.select//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||isSearchItem//条件项
    // ){
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "defaultValue":
            case "allowClear":
            case "valueType":
            case "multiple":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(
    //     tplNode.uitype == UiTypeDef.switch||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "defaultChecked":
            case "checkedChildren":
            case "unCheckedChildren":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.textarea ){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(
    //     tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "autosize":
                {
                    // if (typeof tplNode.autosize == 'object') {
                    //     formMeta[_.findIndex(formMeta, {name: 'minRows'})].defaultValue = tplNode.autosize.minRows || '';
                    //     formMeta[_.findIndex(formMeta, {name: 'maxRows'})].defaultValue = tplNode.autosize.maxRows || '';
                    // }
                    // meta.defaultValue = tplNode.autosize != undefined ? tplNode.autosize : meta.defaultValue;
                    newFormData[meta.name] = !!tplNode.autosize;
                    break;
                }
            case "minRows":
                {
                    newFormData[meta.name] = tplNode.autosize ? tplNode.autosize.minRows || '' : '';
                    break;
                }
            case "maxRows":
                {
                    newFormData[meta.name] = tplNode.autosize ? tplNode.autosize.maxRows || '' : '';
                    break;
                }
            // case "maxLength":{
            //     meta.defaultValue = tplNode.maxLength != undefined ? tplNode.maxLength : meta.defaultValue;
            //     break;
            // }
            // case "placeholder":{
            //     meta.defaultValue = tplNode.placeholder != undefined ? tplNode.placeholder : meta.defaultValue;
            //     break;
            // }
            // case "showTitle":{
            //     meta.defaultValue = tplNode.showTitle != undefined ? tplNode.showTitle : meta.defaultValue;
            //     break;
            // }
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.editor
    //     ||tplNode.uitype == UiTypeDef.formitemw
    // ) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "icons":{
    //                 meta.defaultValue=tplNode.icons!=undefined?tplNode.icons:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.timepicker ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.timepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem
    // ) {
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "format":
            case "hideDisabledOptions":
            case "placeholder":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.text ){
    //     // newFormData = BasePropValues(options);
    // }
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.input||
    //     tplNode.uitype == UiTypeDef.formitemw) {
    //     for(var i=0;i<formMeta.length;i++) {
    //         var meta = formMeta[i];
    //         switch (meta.name) {
    //             case "value":{
    //                 meta.defaultValue = tplNode.value!=undefined?tplNode.value:meta.defaultValue;
    //                 break;
    //             }
    //             case "addonAfter":{
    //                 meta.defaultValue = tplNode.addonAfter!=undefined?tplNode.addonAfter:meta.defaultValue;
    //             break;
    //             }
    //             case "fieldtype":{
    //                 meta.defaultValue = tplNode.fieldtype!=undefined?tplNode.fieldtype:meta.defaultValue;
    //                 break;
    //             }
    //             case "comma":{
    //                 meta.defaultValue = tplNode.comma!=undefined?tplNode.comma:meta.defaultValue;
    //                 break;
    //             }
    //             case "decimal":{
    //                 meta.defaultValue = tplNode.decimal!=undefined?tplNode.decimal:meta.defaultValue;
    //                 break;
    //             }
    //             case "showDecimal":{
    //                 meta.defaultValue = tplNode.showDecimal!=undefined?tplNode.showDecimal:meta.defaultValue;
    //                 break;
    //             }
    //             case "zeroFilling":{
    //                 meta.defaultValue = tplNode.zeroFilling != undefined ? tplNode.zeroFilling : meta.defaultValue;
    //                 break;
    //             }
    //             case "format":{//日期格式
    //                 meta.defaultValue = tplNode.format!=undefined?tplNode.format:meta.defaultValue;
    //                 break;
    //             }
    //         }
    //     }
    // }
    return newFormData;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    // //处理公共属性
    // if(tplNode.uitype == UiTypeDef.autoselect ){
    //     // newFormData = BasePropValues(options);
    // }
    //是否为搜索条件项
    var isSearchItem = tplNode.uitype == _Defines.UiTypeDef.searchitem;
    // //处理特有属性
    // if(tplNode.uitype == UiTypeDef.autoselect||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     isSearchItem) {
    //参照扩展的配置项
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "refinfokey":
                {
                    if (isSearchItem) {
                        // if(tplNode.inputprops&&tplNode.inputprops.refinfokey) {
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.inputprops.refinfokey;
                        //     meta.defaultValue.name = tplNode.inputprops.refName;
                        //     meta.defaultValue.id = tplNode.inputprops.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode.inputprops && tplNode.inputprops.refinfokey) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].code = tplNode.inputprops.refinfokey;
                            newFormData[meta.name].name = tplNode.inputprops.refName;
                            newFormData[meta.name].id = tplNode.inputprops.refId;
                        }
                    } else {
                        // if (tplNode.refinfokey){
                        //     meta.defaultValue = {};
                        //     meta.defaultValue.code = tplNode.refinfokey;
                        //     meta.defaultValue.name = tplNode.refName;
                        //     meta.defaultValue.id = tplNode.refId;
                        // }else{
                        //     meta.defaultValue=null;
                        // }
                        if (tplNode.refinfokey) {
                            newFormData[meta.name] = {};
                            newFormData[meta.name].code = tplNode.refinfokey;
                            newFormData[meta.name].name = tplNode.refName;
                            newFormData[meta.name].id = tplNode.refId;
                        }
                    }
                    break;
                }
            case "valueType":
            case "maxSize":
            case "propKey":
            case "placeholder":
            case "maxLength":
                if (isSearchItem) {
                    if (tplNode.inputprops && tplNode.inputprops[meta.name] !== undefined) {
                        newFormData[meta.name] = tplNode.inputprops[meta.name];
                    }
                }
                break;
        }
    }
    // }
    return newFormData;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableUtils = {
    /**
     * 处理表格列合并的联动问题,当前节点为YYTableCol时触发
     */
    tableColSpan: function tableColSpan(treeNode, currNode) {
        var parentNode = _Utils2.default.findParentNode(treeNode, currNode.nid);
        var children = parentNode && parentNode.children ? parentNode.children : [];
        var index = Array.findIndex(children, function (node) {
            return node.nid === currNode.nid;
        });
        var colSpan = currNode.colSpan;
        if (index > -1 && colSpan >= 0) {
            children.forEach(function (child, i) {
                if (i > index && i < index + colSpan) {
                    child.colSpan = 0;
                }
            });
        }
    }
};
module.exports = TableUtils;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _Defines2 = _interopRequireDefault(_Defines);

var _AccordionsAdapter = __webpack_require__(75);

var _AccordionsAdapter2 = _interopRequireDefault(_AccordionsAdapter);

var _AccordionAdapter = __webpack_require__(77);

var _AccordionAdapter2 = _interopRequireDefault(_AccordionAdapter);

var _AttachMgrwAdapter = __webpack_require__(80);

var _AttachMgrwAdapter2 = _interopRequireDefault(_AttachMgrwAdapter);

var _FormwAdapter = __webpack_require__(81);

var _FormwAdapter2 = _interopRequireDefault(_FormwAdapter);

var _SearchConditionAdapter = __webpack_require__(86);

var _SearchConditionAdapter2 = _interopRequireDefault(_SearchConditionAdapter);

var _SearchItemAdapter = __webpack_require__(91);

var _SearchItemAdapter2 = _interopRequireDefault(_SearchItemAdapter);

var _SearchSchemeAdapter = __webpack_require__(98);

var _SearchSchemeAdapter2 = _interopRequireDefault(_SearchSchemeAdapter);

var _AutoSelectAdapter = __webpack_require__(102);

var _AutoSelectAdapter2 = _interopRequireDefault(_AutoSelectAdapter);

var _EnumSelectAdapter = __webpack_require__(103);

var _EnumSelectAdapter2 = _interopRequireDefault(_EnumSelectAdapter);

var _ScrollbarAdapter = __webpack_require__(104);

var _ScrollbarAdapter2 = _interopRequireDefault(_ScrollbarAdapter);

var _TreeAdapter = __webpack_require__(106);

var _TreeAdapter2 = _interopRequireDefault(_TreeAdapter);

var _TreeNodeAdapter = __webpack_require__(110);

var _TreeNodeAdapter2 = _interopRequireDefault(_TreeNodeAdapter);

var _DivideAdapter = __webpack_require__(114);

var _DivideAdapter2 = _interopRequireDefault(_DivideAdapter);

var _ModalAdapter = __webpack_require__(116);

var _ModalAdapter2 = _interopRequireDefault(_ModalAdapter);

var _StepsNavAdapter = __webpack_require__(118);

var _StepsNavAdapter2 = _interopRequireDefault(_StepsNavAdapter);

var _StepsNavItemAdapter = __webpack_require__(122);

var _StepsNavItemAdapter2 = _interopRequireDefault(_StepsNavItemAdapter);

var _EditorAdapter = __webpack_require__(125);

var _EditorAdapter2 = _interopRequireDefault(_EditorAdapter);

var _TagItemAdapter = __webpack_require__(126);

var _TagItemAdapter2 = _interopRequireDefault(_TagItemAdapter);

var _TagGroupAdapter = __webpack_require__(128);

var _TagGroupAdapter2 = _interopRequireDefault(_TagGroupAdapter);

var _ToolbarAdapter = __webpack_require__(131);

var _ToolbarAdapter2 = _interopRequireDefault(_ToolbarAdapter);

var _InputButtonAdapter = __webpack_require__(133);

var _InputButtonAdapter2 = _interopRequireDefault(_InputButtonAdapter);

var _CascaderAdapter = __webpack_require__(134);

var _CascaderAdapter2 = _interopRequireDefault(_CascaderAdapter);

var _AttachuploadAdapter = __webpack_require__(135);

var _AttachuploadAdapter2 = _interopRequireDefault(_AttachuploadAdapter);

var _PrintButtonAdapter = __webpack_require__(136);

var _PrintButtonAdapter2 = _interopRequireDefault(_PrintButtonAdapter);

var _RadioAdapter = __webpack_require__(140);

var _RadioAdapter2 = _interopRequireDefault(_RadioAdapter);

var _RadioGroupAdapter = __webpack_require__(142);

var _RadioGroupAdapter2 = _interopRequireDefault(_RadioGroupAdapter);

var _CheckboxAdapter = __webpack_require__(144);

var _CheckboxAdapter2 = _interopRequireDefault(_CheckboxAdapter);

var _CheckboxGroupAdapter = __webpack_require__(146);

var _CheckboxGroupAdapter2 = _interopRequireDefault(_CheckboxGroupAdapter);

var _NumberAdapter = __webpack_require__(148);

var _NumberAdapter2 = _interopRequireDefault(_NumberAdapter);

var _DateAdapter = __webpack_require__(149);

var _DateAdapter2 = _interopRequireDefault(_DateAdapter);

var _TimeAdapter = __webpack_require__(150);

var _TimeAdapter2 = _interopRequireDefault(_TimeAdapter);

var _RangePickerAdapter = __webpack_require__(151);

var _RangePickerAdapter2 = _interopRequireDefault(_RangePickerAdapter);

var _ImageUploadAdapter = __webpack_require__(152);

var _ImageUploadAdapter2 = _interopRequireDefault(_ImageUploadAdapter);

var _InputAdapter = __webpack_require__(153);

var _InputAdapter2 = _interopRequireDefault(_InputAdapter);

var _InputMapAdapter = __webpack_require__(154);

var _InputMapAdapter2 = _interopRequireDefault(_InputMapAdapter);

var _ButtonReferAdapter = __webpack_require__(155);

var _ButtonReferAdapter2 = _interopRequireDefault(_ButtonReferAdapter);

var _InputReferAdapter = __webpack_require__(159);

var _InputReferAdapter2 = _interopRequireDefault(_InputReferAdapter);

var _TextareaAdapter = __webpack_require__(160);

var _TextareaAdapter2 = _interopRequireDefault(_TextareaAdapter);

var _TextAdapter = __webpack_require__(161);

var _TextAdapter2 = _interopRequireDefault(_TextAdapter);

var _IframeAdapter = __webpack_require__(162);

var _IframeAdapter2 = _interopRequireDefault(_IframeAdapter);

var _SplitPaneAdapter = __webpack_require__(164);

var _SplitPaneAdapter2 = _interopRequireDefault(_SplitPaneAdapter);

var _FilterAreaAdapter = __webpack_require__(166);

var _FilterAreaAdapter2 = _interopRequireDefault(_FilterAreaAdapter);

var _EChartsAdapter = __webpack_require__(168);

var _EChartsAdapter2 = _interopRequireDefault(_EChartsAdapter);

var _CPCardTitleAdapter = __webpack_require__(172);

var _CPCardTitleAdapter2 = _interopRequireDefault(_CPCardTitleAdapter);

var _BpmApprovewAdapter = __webpack_require__(174);

var _BpmApprovewAdapter2 = _interopRequireDefault(_BpmApprovewAdapter);

var _BpmSubmitwAdapter = __webpack_require__(178);

var _BpmSubmitwAdapter2 = _interopRequireDefault(_BpmSubmitwAdapter);

var _CPIconButtonAdapter = __webpack_require__(182);

var _CPIconButtonAdapter2 = _interopRequireDefault(_CPIconButtonAdapter);

var _CPDropdownButtonAdapter = __webpack_require__(185);

var _CPDropdownButtonAdapter2 = _interopRequireDefault(_CPDropdownButtonAdapter);

var _CPGoBackAdapter = __webpack_require__(188);

var _CPGoBackAdapter2 = _interopRequireDefault(_CPGoBackAdapter);

var _CPAuditInfoAdapter = __webpack_require__(190);

var _CPAuditInfoAdapter2 = _interopRequireDefault(_CPAuditInfoAdapter);

var _CPPluginMgrAdapter = __webpack_require__(194);

var _CPPluginMgrAdapter2 = _interopRequireDefault(_CPPluginMgrAdapter);

var _CPFilterBarAdapter = __webpack_require__(196);

var _CPFilterBarAdapter2 = _interopRequireDefault(_CPFilterBarAdapter);

var _CPFilterRowAdapter = __webpack_require__(199);

var _CPFilterRowAdapter2 = _interopRequireDefault(_CPFilterRowAdapter);

var _CPFRFieldAdapter = __webpack_require__(204);

var _CPFRFieldAdapter2 = _interopRequireDefault(_CPFRFieldAdapter);

var _BreadcrumbAdapter = __webpack_require__(208);

var _BreadcrumbAdapter2 = _interopRequireDefault(_BreadcrumbAdapter);

var _BreadcrumbItemAdapter = __webpack_require__(211);

var _BreadcrumbItemAdapter2 = _interopRequireDefault(_BreadcrumbItemAdapter);

var _ButtonAdapter = __webpack_require__(214);

var _ButtonAdapter2 = _interopRequireDefault(_ButtonAdapter);

var _PageAdapter = __webpack_require__(217);

var _PageAdapter2 = _interopRequireDefault(_PageAdapter);

var _CaptionAdapter = __webpack_require__(221);

var _CaptionAdapter2 = _interopRequireDefault(_CaptionAdapter);

var _FormItemwAdapter = __webpack_require__(223);

var _FormItemwAdapter2 = _interopRequireDefault(_FormItemwAdapter);

var _OptionAdapter = __webpack_require__(228);

var _OptionAdapter2 = _interopRequireDefault(_OptionAdapter);

var _ButtonSelectAdapter = __webpack_require__(230);

var _ButtonSelectAdapter2 = _interopRequireDefault(_ButtonSelectAdapter);

var _ButtonItemAdapter = __webpack_require__(234);

var _ButtonItemAdapter2 = _interopRequireDefault(_ButtonItemAdapter);

var _EditTablewAdapter = __webpack_require__(236);

var _EditTablewAdapter2 = _interopRequireDefault(_EditTablewAdapter);

var _EditItemWAdapter = __webpack_require__(241);

var _EditItemWAdapter2 = _interopRequireDefault(_EditItemWAdapter);

var _StepsAdapter = __webpack_require__(246);

var _StepsAdapter2 = _interopRequireDefault(_StepsAdapter);

var _StepAdapter = __webpack_require__(249);

var _StepAdapter2 = _interopRequireDefault(_StepAdapter);

var _TableAdapter = __webpack_require__(252);

var _TableAdapter2 = _interopRequireDefault(_TableAdapter);

var _TableColAdapter = __webpack_require__(257);

var _TableColAdapter2 = _interopRequireDefault(_TableColAdapter);

var _TabsAdapter = __webpack_require__(261);

var _TabsAdapter2 = _interopRequireDefault(_TabsAdapter);

var _TabAdapter = __webpack_require__(264);

var _TabAdapter2 = _interopRequireDefault(_TabAdapter);

var _RowAdapter = __webpack_require__(267);

var _RowAdapter2 = _interopRequireDefault(_RowAdapter);

var _ColAdapter = __webpack_require__(269);

var _ColAdapter2 = _interopRequireDefault(_ColAdapter);

var _PanelAdapter = __webpack_require__(271);

var _PanelAdapter2 = _interopRequireDefault(_PanelAdapter);

var _SelectAdapter = __webpack_require__(274);

var _SelectAdapter2 = _interopRequireDefault(_SelectAdapter);

var _SwitchAdapter = __webpack_require__(276);

var _SwitchAdapter2 = _interopRequireDefault(_SwitchAdapter);

var _ButtonViewAdapter = __webpack_require__(277);

var _ButtonViewAdapter2 = _interopRequireDefault(_ButtonViewAdapter);

var _FormItemwViewAdapter = __webpack_require__(278);

var _FormItemwViewAdapter2 = _interopRequireDefault(_FormItemwViewAdapter);

var _TableColViewAdapter = __webpack_require__(279);

var _TableColViewAdapter2 = _interopRequireDefault(_TableColViewAdapter);

var _SplitPaneViewAdapter = __webpack_require__(280);

var _SplitPaneViewAdapter2 = _interopRequireDefault(_SplitPaneViewAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiTypeDef = _Defines2.default.UiTypeDef,
    UiTitleDef = _Defines2.default.UiTitleDef,
    UiIconDef = _Defines2.default.UiIconDef,
    UiDefaultDef = _Defines2.default.UiDefaultDef;

var uiObjects = {};
for (var key in UiTypeDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uitype = UiTypeDef[key];
}
for (var _key in UiTitleDef) {
    uiObjects[_key] = uiObjects[_key] || {};
    uiObjects[_key].uititile = UiTitleDef[_key];
}
for (var _key2 in UiIconDef) {
    uiObjects[_key2] = uiObjects[_key2] || {};
    uiObjects[_key2].uiicon = UiIconDef[_key2];
}
for (var _key3 in UiDefaultDef) {
    uiObjects[_key3] = uiObjects[_key3] || {};
    uiObjects[_key3].uidefault = UiDefaultDef[_key3];
}
var myLibrary = new _indexDeps.UiLibrary('yylib-react-adapter');
//----------------组件定义------------------
for (var _key4 in uiObjects) {
    var obj = uiObjects[_key4];
    myLibrary.addDefine(_key4, obj.uitype, obj.uititile, obj.uiicon, obj.uidefault);
}
//----------------属性适配--------------------
myLibrary.addPropAdapter(UiTypeDef.accordion, _AccordionAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.accordions, _AccordionsAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.bpmsubmitw, _BpmSubmitwAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.bpmapprovew, _BpmApprovewAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.breadcrumb, _BreadcrumbAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.breadcrumbitem, _BreadcrumbItemAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.button, _ButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.attachmgrw, _AttachMgrwAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.page, _PageAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.caption, _CaptionAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.formw, _FormwAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.formitemw, _FormItemwAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.option, _OptionAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.buttonselect, _ButtonSelectAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.buttonitem, _ButtonItemAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.edittablew, _EditTablewAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.edititemw, _EditItemWAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.steps, _StepsAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.step, _StepAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.table, _TableAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tablew, _TableAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tablecol, _TableColAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tabs, _TabsAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tab, _TabAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.row, _RowAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.col, _ColAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.panel, _PanelAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.searchcondition, _SearchConditionAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.searchitem, _SearchItemAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.searchscheme, _SearchSchemeAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.select, _SelectAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.autoselect, _AutoSelectAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.enumselect, _EnumSelectAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.scrollbar, _ScrollbarAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tree, _TreeAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.treenode, _TreeNodeAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.divide, _DivideAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.modal, _ModalAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.stepsnav, _StepsNavAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.stepsnavitem, _StepsNavItemAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.editor, _EditorAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.tagitem, _TagItemAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.taggroup, _TagGroupAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.toolbar, _ToolbarAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.inputbutton, _InputButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.cascader, _CascaderAdapter2.default);

myLibrary.addPropAdapter(UiTypeDef.attachupload, _AttachuploadAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.printbutton, _PrintButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.radio, _RadioAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.radiogroup, _RadioGroupAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.checkbox, _CheckboxAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.checkboxgroup, _CheckboxGroupAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.inputnumber, _NumberAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.datepicker, _DateAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.timepicker, _TimeAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.rangepicker, _RangePickerAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.imageupload, _ImageUploadAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.input, _InputAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.inputmap, _InputMapAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.buttonrefer, _ButtonReferAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.inputrefer, _InputReferAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.switch, _SwitchAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.textarea, _TextareaAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.text, _TextAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.iframe, _IframeAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.splitpane, _SplitPaneAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.filterarea, _FilterAreaAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.chartw, _EChartsAdapter2.default);

//---------------内置模板-------------------begin
myLibrary.addPropAdapter(UiTypeDef.CPListPage, _PageAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPListTable, _TableAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPCardPage, _PageAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPCardTitle, _CPCardTitleAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPIconButton, _CPIconButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPDropdownButton, _CPDropdownButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPGoBack, _CPGoBackAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPSearchBar, _SearchConditionAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPAuditInfo, _CPAuditInfoAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPBpmSubmit, _BpmSubmitwAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPBpmApprove, _BpmApprovewAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPAttachMgr, _AttachMgrwAdapter2.default);

myLibrary.addPropAdapter(UiTypeDef.CPPrintButton, _PrintButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPPluginMgr, _CPPluginMgrAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPFilterBar, _CPFilterBarAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPFilterRow, _CPFilterRowAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.CPFRField, _CPFRFieldAdapter2.default);
//---------------内置模板----------------------end
//------------事件适配---------------
myLibrary.addEventAdapter(UiTypeDef.button, _indexDeps.EventAdapter);
//------------视图适配----------------
myLibrary.addViewAdapter(UiTypeDef.button, _ButtonViewAdapter2.default);
myLibrary.addViewAdapter(UiTypeDef.formitemw, _FormItemwViewAdapter2.default);
myLibrary.addViewAdapter(UiTypeDef.tablecol, _TableColViewAdapter2.default);
myLibrary.addViewAdapter(UiTypeDef.edititemw, _TableColViewAdapter2.default);
myLibrary.addViewAdapter(UiTypeDef.splitpane, _SplitPaneViewAdapter2.default);
exports.default = myLibrary;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["GenAdapter"] = factory();else root["GenAdapter"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 11);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 基础数据转换适配器
             */
            var BaseDataAdapter = function () {
                /**
                 * @desc 构建对象
                 * @param primaryKey 主键/组件标识
                 */
                function BaseDataAdapter(primaryKey) {
                    _classCallCheck(this, BaseDataAdapter);

                    this.primaryKey = primaryKey;
                }

                /**
                 * @desc 获取主键/组件标识
                 * @return {string}
                 */

                _createClass(BaseDataAdapter, [{
                    key: "getPrimaryKey",
                    value: function getPrimaryKey() {
                        return this.primaryKey;
                    }

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 构建适配页面(元数据)
                     * @param options {
                     *     tplNode,     //当前数据节点值
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
                     */

                }, {
                    key: "onPageMetas",
                    value: function onPageMetas(options) {}

                    /**
                     * @desc 构建适配页面(属性)
                     * @param options {无}
                     * @return {object} 适配页面的属性 @link 请参考PageProp说明
                     */

                }, {
                    key: "onPageProps",
                    value: function onPageProps(options) {}

                    /**
                     *  @desc 新建数据节点时触发
                     *  @param options:{
                     *      tplTree,        //当前数据树
                     *      tplNode,        //当前添加的数据节点对象
                     *      tplParentNode   //当前对应的父节点对象
                     *   }
                     *   @return {无}
                     */

                }, {
                    key: "onCreateData",
                    value: function onCreateData(options) {}

                    /**
                     * @desc 将数据转换为配置值
                     * @param options {
                     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {object} 适配页面的表单值
                     */

                }, {
                    key: "onDataToValue",
                    value: function onDataToValue(options) {}

                    /**
                     * @desc 将配置值转换为数据
                     * @param options {
                     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
                     *     formData,    //变更后的配置值
                     *     tplPreNode,  //上一次的数据值
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {无}
                     */

                }, {
                    key: "onValueToData",
                    value: function onValueToData(options) {}
                }]);

                return BaseDataAdapter;
            }();

            exports.default = BaseDataAdapter;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 适配页面元数据的输入类型定义
             */

            module.exports = {
                /** css 类型-已过期begin */
                // Background: 'Background',
                // Border: 'Border',
                // Radius: 'Radius',
                // Font: 'Font',
                // Margin: 'Margin',
                // Size: 'Size',
                // Padding: 'Padding',
                /***css 类型-已过期end***/
                /** 基本类型 */
                Bool: 'Bool',
                Checkbox: 'Checkbox',
                Color: 'Color',
                Select: 'Select',
                Text: 'Text',
                Icon: 'Icon',
                Number: 'Number',
                Date: 'Date',
                Time: 'Time',
                Refer: 'Refer',
                SelectTree: 'SelectTree',
                Textarea: 'Textarea',
                TitleGroup: 'TitleGroup', //表头合并配置
                EventActions: 'EventActions', //组织事件动作配置
                MathFormula: 'MathFormula', //计算公式列配置
                LogicFormula: 'LogicFormula', //逻辑公式配置
                EditorIcons: 'EditorIcons',
                Pagination: 'Pagination', //分页配置
                SwitchText: 'SwitchText',
                EnumSelect: 'EnumSelect',
                ReferEditRelation: 'ReferEditRelation', // 参照编辑关联项
                LocalData: 'LocalData', //数据表格本地数据源配置
                RowMenu: 'RowMenu',
                FilterAreaConfig: 'FilterAreaConfig',
                EChartData: 'EChartData'
            };

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 基础视图转换适配器
             */
            var BaseViewAdapter = function () {
                /**
                 * 构建对象
                 * @param primaryKey 主键/组件标识
                 */
                function BaseViewAdapter(primaryKey) {
                    _classCallCheck(this, BaseViewAdapter);

                    this.primaryKey = primaryKey;
                }

                /**
                 * 获取主键/组件标识
                 * @return {string}
                 */

                _createClass(BaseViewAdapter, [{
                    key: "getPrimaryKey",
                    value: function getPrimaryKey() {
                        return this.primaryKey;
                    }
                }]);

                return BaseViewAdapter;
            }();

            exports.default = BaseViewAdapter;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseViewAdapter2 = __webpack_require__(2);

            var _BaseViewAdapter3 = _interopRequireDefault(_BaseViewAdapter2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            } /**
               * 视图转换适配器
               */

            var ViewAdapter = function (_BaseViewAdapter) {
                _inherits(ViewAdapter, _BaseViewAdapter);

                function ViewAdapter() {
                    _classCallCheck(this, ViewAdapter);

                    return _possibleConstructorReturn(this, (ViewAdapter.__proto__ || Object.getPrototypeOf(ViewAdapter)).apply(this, arguments));
                }

                _createClass(ViewAdapter, [{
                    key: "onDataView",

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 构建数据节点的显示视图
                     * @param options {
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     * }
                     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明
                     */
                    value: function onDataView(options) {}

                    /**
                     *  @desc 当前数据节点下添加子数据节点时的校验
                     *  @param options:{
                     *      tplTree,     //当前数据树
                     *      tplNode,     //当前数据节点对象
                     *      tplChildNode //即将添加的子数据节点对象
                     *   }
                     *   @return {Object} 校验元数据视图 @link 请参考ValidMeta说明
                     */

                }, {
                    key: "onDataValid",
                    value: function onDataValid(options) {}
                }]);

                return ViewAdapter;
            }(_BaseViewAdapter3.default);

            exports.default = ViewAdapter;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _PropMeta = __webpack_require__(5);

            var _PropMeta2 = _interopRequireDefault(_PropMeta);

            var _PropDataToValue = __webpack_require__(6);

            var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

            var _PropValueToData = __webpack_require__(7);

            var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 属性转换适配器
             */
            var PropAdapter = function (_BaseDataAdapter) {
                _inherits(PropAdapter, _BaseDataAdapter);

                function PropAdapter() {
                    _classCallCheck(this, PropAdapter);

                    return _possibleConstructorReturn(this, (PropAdapter.__proto__ || Object.getPrototypeOf(PropAdapter)).apply(this, arguments));
                }

                _createClass(PropAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */
                    value: function onPageMetas(options) {
                        return (0, _PropMeta2.default)(options);
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onPageProps',
                    value: function onPageProps(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onCreateData',
                    value: function onCreateData(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        return (0, _PropDataToValue2.default)(options);
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        (0, _PropValueToData2.default)(options);
                    }
                }]);

                return PropAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = PropAdapter;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 基础的通用属性定义
             */

            var MetaType = __webpack_require__(1);
            window.EnvConfig = window.EnvConfig || {};
            var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;
            var PRODUCT_TYPE_PAGE_SIMPLE = 2;
            module.exports = function (options) {
                var productType = options.productType,
                    tplNode = options.tplNode,
                    currPage = options.currPage;

                var PropMeta = [{
                    name: 'uikey',
                    label: '键值',
                    type: MetaType.Text,
                    props: {},
                    readOnly: !!(productType == PRODUCT_TYPE_PAGE_SIMPLE && currPage && currPage.isDevelopment !== 1),
                    defaultValue: ''
                }, {
                    name: 'uititle',
                    label: '名称',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }];
                if (tplNode && tplNode.MetaType == "YYPage") {
                    PropMeta.push({
                        name: 'themeClassName',
                        label: '页面风格',
                        help: '主题样式皮肤风格名称',
                        type: MetaType.Select,
                        props: {
                            options: [{ text: '平台默认', value: '' }, { text: '公有云风格', value: 'GYY' }]
                        },
                        defaultValue: ''
                    });
                }
                PropMeta = PropMeta.concat([{
                    name: 'className',
                    label: '定制样式',
                    help: '自定义样式规则的名称，即：css的class名称',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }, {
                    name: 'specialTag',
                    label: '特殊标识',
                    type: MetaType.Refer,
                    props: {
                        refinfokey: 'defdoc-component_props',
                        serverUrl: SUPPORT_SERVER
                    },
                    defaultValue: null
                }]);
                return PropMeta;
            };

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = function (options) {
                var formMeta = options.formMeta,
                    tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var newFormData = {};
                for (var i = 0; i < formMeta.length; i++) {
                    var meta = formMeta[i];
                    switch (meta.name) {
                        case "specialTag":
                            {
                                if (tplNode[meta.name] !== undefined) {
                                    newFormData[meta.name] = {};
                                    newFormData[meta.name].id = tplNode[meta.name].id;
                                    newFormData[meta.name].code = tplNode[meta.name].code;
                                    newFormData[meta.name].name = tplNode[meta.name].name;
                                }
                                break;
                            }
                        case "uikey":
                        case "uititle":
                        case "themeClassName":
                        case "className":
                        default:
                            if (tplNode[meta.name] !== undefined) {
                                newFormData[meta.name] = tplNode[meta.name];
                            }
                            break;
                    }
                }
                return newFormData;
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 去除前后多余空字符串
             * @param x
             * @return {*}
             */

            function strTrim(x) {
                if (typeof x === 'string') {
                    return x.replace(/^\s+|\s+$/gm, '');
                } else {
                    return x;
                }
            }
            /**
             * 如果存在有效值，则设置属性值，否则清除属性
             */
            function isExistSet(object, propName, propValue) {
                if (!object) return;
                if (propValue !== undefined && propValue !== '' && propValue !== null) {
                    object[propName] = propValue;
                } else {
                    delete object[propName];
                }
            }
            module.exports = function (options) {
                var formMeta = options.formMeta,
                    formData = options.formData,
                    tplNode = options.tplNode,
                    tplTree = options.tplTree;

                for (var i = 0; i < formMeta.length; i++) {
                    var meta = formMeta[i];
                    if (!(meta.name in formData)) continue;
                    var value = formData[meta.name];
                    value = strTrim(value); //去除前后多余空格
                    switch (meta.name) {
                        case "specialTag":
                            {
                                if (value) {
                                    tplNode[meta.name] = {};
                                    tplNode[meta.name].id = value.id;
                                    tplNode[meta.name].code = value.code;
                                    tplNode[meta.name].name = value.name;
                                } else {
                                    delete tplNode[meta.name];
                                }
                                break;
                            }
                        case "uikey":
                        case "uititle":
                        case "themeClassName":
                        case "className":
                        default:
                            //默认值===表单项值，则不生成节点属性
                            if (meta.defaultValue === value) {
                                delete tplNode[meta.name];
                            } else {
                                isExistSet(tplNode, meta.name, value);
                            }
                            break;

                    }
                }
            };

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _LogicUtils = __webpack_require__(9);

            var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 基础事件转换适配器
             */
            var EventAdapter = function (_BaseDataAdapter) {
                _inherits(EventAdapter, _BaseDataAdapter);

                function EventAdapter() {
                    _classCallCheck(this, EventAdapter);

                    return _possibleConstructorReturn(this, (EventAdapter.__proto__ || Object.getPrototypeOf(EventAdapter)).apply(this, arguments));
                }

                _createClass(EventAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */
                    value: function onPageMetas(options) {
                        var metas = [{
                            name: 'onClick',
                            label: '鼠标点击',
                            type: _MetaType2.default.EventActions,
                            props: {},
                            defaultValue: null
                        }];
                        return metas;
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onPageProps',
                    value: function onPageProps(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onCreateData',
                    value: function onCreateData(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        var formMeta = options.formMeta,
                            tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var newFormData = {};
                        for (var i = 0; i < formMeta.length; i++) {
                            var meta = formMeta[i];
                            switch (meta.name) {
                                default:
                                    if (tplNode.uievents[meta.name] !== undefined) {
                                        newFormData[meta.name] = tplNode.uievents[meta.name];
                                    }
                                    break;
                            }
                        }
                        return newFormData;
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        var formMeta = options.formMeta,
                            formData = options.formData,
                            tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        for (var i = 0; i < formMeta.length; i++) {
                            var meta = formMeta[i];
                            if (!(meta.name in formData)) continue;
                            var value = formData[meta.name];
                            switch (meta.name) {
                                default:
                                    _LogicUtils2.default.isExistSet(tplNode.uievents, meta.name, value);
                                    break;
                            }
                        }
                    }
                }]);

                return EventAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = EventAdapter;

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = {
                /**
                * 如果存在有效值，则设置属性值，否则清除属性
                */
                isExistSet: function isExistSet(object, propName, propValue) {
                    if (!object) return;
                    if (propValue !== undefined && propValue !== '' && propValue !== null) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果等于指定值，则设置属性值，否则清除属性
                 */
                isEqualSet: function isEqualSet(object, propName, propValue, eqValue) {
                    if (!object) return;
                    if (propValue === eqValue) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果不等于指定值，则设置属性值，否则清除属性
                 */
                isNotEqualSet: function isNotEqualSet(object, propName, propValue, eqValue) {
                    if (!object) return;
                    if (propValue !== eqValue) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果等于指定值等于包含的任意一个值，则设置属性值，否则清除属性
                 */
                isIncludeSet: function isIncludeSet(object, propName, propValue, eqValues) {
                    if (!object) return;
                    for (var i = 0; i < eqValues.length; i++) {
                        if (propValue === eqValues[i]) {
                            object[propName] = propValue;
                            return;
                        }
                    }
                    delete object[propName];
                },
                /**
                 * 如果是true值，则设置属性值，否则清除属性
                 */
                isTrueSet: function isTrueSet(object, propName, propValue) {
                    this.isEqualSet(object, propName, propValue, true);
                },
                /**
                 * 如果是false值，则设置属性值，否则清除属性
                 */
                isFalseSet: function isFalseSet(object, propName, propValue) {
                    this.isEqualSet(object, propName, propValue, false);
                }

            };

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 一套组件定义
             */
            var UiDefines = function () {
                function UiDefines() {
                    _classCallCheck(this, UiDefines);

                    this.UiType = {};
                    this.UiTitle = {};
                    this.UiIcon = {};
                    this.UiDefault = {};
                }

                /**
                 * 添加一个组件的定义
                 * @param primaryKey    主键标识
                 * @param uitype        组件类型
                 * @param uititle       组件名称
                 * @param uiicon        组件图标
                 * @param uidefault     组件缺省属性
                 */

                _createClass(UiDefines, [{
                    key: "add",
                    value: function add(primaryKey, uitype, uititle, uiicon, uidefault) {
                        this.UiType[primaryKey] = uitype;
                        this.UiTitle[primaryKey] = uititle;
                        this.UiIcon[primaryKey] = uiicon;
                        this.UiDefault[primaryKey] = uidefault;
                    }

                    /**
                     * 移除一个组件的定义
                     * @param primaryKey    主键标识
                     */

                }, {
                    key: "remove",
                    value: function remove(primaryKey) {
                        delete this.UiType[primaryKey];
                        delete this.UiTitle[primaryKey];
                        delete this.UiIcon[primaryKey];
                        delete this.UiDefault[primaryKey];
                    }

                    /**
                     * 获得一个组件的定义
                     * @param primaryKey
                     */

                }, {
                    key: "get",
                    value: function get(primaryKey) {
                        return {
                            uitype: this.UiType[primaryKey],
                            uititle: this.UiTitle[primaryKey],
                            uiicon: this.UiIcon[primaryKey],
                            uidefault: this.UiDefault[primaryKey]
                        };
                    }
                }]);

                return UiDefines;
            }();

            exports.default = UiDefines;

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _BaseDataAdapter = __webpack_require__(0);

            var _BaseDataAdapter2 = _interopRequireDefault(_BaseDataAdapter);

            var _BaseViewAdapter = __webpack_require__(2);

            var _BaseViewAdapter2 = _interopRequireDefault(_BaseViewAdapter);

            var _ViewAdapter = __webpack_require__(3);

            var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

            var _PropAdapter = __webpack_require__(4);

            var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

            var _EventAdapter = __webpack_require__(8);

            var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            var _UiDefines = __webpack_require__(10);

            var _UiDefines2 = _interopRequireDefault(_UiDefines);

            var _UiLibrary = __webpack_require__(12);

            var _UiLibrary2 = _interopRequireDefault(_UiLibrary);

            var _LogicUtils = __webpack_require__(9);

            var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

            var _PluginAdapter = __webpack_require__(13);

            var _PluginAdapter2 = _interopRequireDefault(_PluginAdapter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            module.exports = {
                BaseDataAdapter: _BaseDataAdapter2.default,
                BaseViewAdapter: _BaseViewAdapter2.default,
                ViewAdapter: _ViewAdapter2.default,
                PropAdapter: _PropAdapter2.default,
                EventAdapter: _EventAdapter2.default,
                PluginAdapter: _PluginAdapter2.default,
                UiDefines: _UiDefines2.default,
                UiLibrary: _UiLibrary2.default,
                MetaType: _MetaType2.default,
                LogicUtils: _LogicUtils2.default
            };

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _UiDefines = __webpack_require__(10);

            var _UiDefines2 = _interopRequireDefault(_UiDefines);

            var _PropAdapter = __webpack_require__(4);

            var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

            var _EventAdapter = __webpack_require__(8);

            var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

            var _ViewAdapter = __webpack_require__(3);

            var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 定义一套适配的组件库
             */
            var UiLibrary = function () {
                /**
                 * 构建一套组件库的适配套件
                 * @param libraryName   组件库标识名
                 * @param libraryVer    组件库版本号
                 */
                function UiLibrary(libraryName, libraryVer) {
                    _classCallCheck(this, UiLibrary);

                    this.libraryName = libraryName;
                    this.libraryVer = libraryVer;
                    this.uiDefines = new _UiDefines2.default();
                    this.propAdapters = {};
                    this.eventAdapters = {};
                    this.viewAdapters = {};
                }
                /**
                 * 添加一个组件的定义
                 * @param primaryKey    主键标识
                 * @param uitype        组件类型
                 * @param uititle       组件名称
                 * @param uiicon        组件图标
                 * @param uidefault     组件缺省属性
                 */

                _createClass(UiLibrary, [{
                    key: "addDefine",
                    value: function addDefine(primaryKey, uitype, uititle, uiicon, uidefault) {
                        this.uiDefines.add(primaryKey, uitype, uititle, uiicon, uidefault);
                    }
                    /**
                     * 移除一个组件的定义
                     * @param primaryKey    主键标识
                     */

                }, {
                    key: "removeDefine",
                    value: function removeDefine(primaryKey) {
                        this.uiDefines.remove(primaryKey);
                    }

                    /**
                     * 获得一个组件的定义
                     * @param primaryKey
                     */

                }, {
                    key: "getDefine",
                    value: function getDefine(primaryKey) {
                        return this.uiDefines.get(primaryKey);
                    }

                    /**
                     * 获取全部组件的定义
                     */

                }, {
                    key: "addPropAdapter",

                    /**
                     * 添加属性适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于PropAdapter的类
                     */
                    value: function addPropAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _PropAdapter2.default) {
                                this.propAdapters[primaryKey] = new AdapterClass(primaryKey);
                                return;
                            }
                        }
                        console.warn('addPropAdapter fail ,that is not PropAdapter class!');
                    }

                    /**
                     * 添加事件适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于EventAdapter的类
                     */

                }, {
                    key: "addEventAdapter",
                    value: function addEventAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _EventAdapter2.default) {
                                this.eventAdapters[primaryKey] = adapter;
                                return;
                            }
                        }
                        console.warn('addEventAdapter fail ,that is not EventAdapter class!');
                    }

                    /**
                     * 添加视图适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于ViewAdapter的类
                     */

                }, {
                    key: "addViewAdapter",
                    value: function addViewAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _ViewAdapter2.default) {
                                this.viewAdapters[primaryKey] = adapter;
                                return;
                            }
                        }
                        console.warn('addEventAdapter fail ,that is not ViewAdapter class!');
                    }

                    /**
                     * 获取属性适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getPropAdapter",
                    value: function getPropAdapter(primaryKey) {
                        return this.propAdapters[primaryKey];
                    }
                    /**
                     * 获取事件适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getEventAdapter",
                    value: function getEventAdapter(primaryKey) {
                        return this.eventAdapters[primaryKey];
                    }
                    /**
                     * 获取视图适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getViewAdapter",
                    value: function getViewAdapter(primaryKey) {
                        return this.viewAdapters[primaryKey];
                    }

                    /**
                     * 移除属性适配
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removePropAdapter",
                    value: function removePropAdapter(primaryKey) {
                        delete this.propAdapters[primaryKey];
                    }
                    /**
                     * 移除事件适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removeEventAdapter",
                    value: function removeEventAdapter(primaryKey) {
                        delete this.eventAdapters[primaryKey];
                    }
                    /**
                     * 移除视图适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removeViewAdapter",
                    value: function removeViewAdapter(primaryKey) {
                        delete this.viewAdapters[primaryKey];
                    }

                    /**
                     * 获取全部属性适配实例
                     * @return {*}
                     */

                }, {
                    key: "UiDefines",
                    get: function get() {
                        return this.uiDefines;
                    }
                }, {
                    key: "PropAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.propAdapters) {
                            adapters.push(this.propAdapters[key]);
                        }
                        return adapters;
                    }

                    /**
                     * 获取全部事件适配实例
                     * @return {*}
                     */

                }, {
                    key: "EventAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.eventAdapters) {
                            adapters.push(this.eventAdapters[key]);
                        }
                        return adapters;
                    }

                    /**
                     * 获取全部视图适配实例
                     * @return {*}
                     */

                }, {
                    key: "ViewAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.viewAdapters) {
                            adapters.push(this.viewAdapters[key]);
                        }
                        return adapters;
                    }
                }]);

                return UiLibrary;
            }();

            exports.default = UiLibrary;

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            var _PropMeta = __webpack_require__(5);

            var _PropMeta2 = _interopRequireDefault(_PropMeta);

            var _PropDataToValue = __webpack_require__(6);

            var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

            var _PropValueToData = __webpack_require__(7);

            var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 插件转换适配器
             */
            var PluginAdapter = function (_BaseDataAdapter) {
                _inherits(PluginAdapter, _BaseDataAdapter);

                function PluginAdapter() {
                    _classCallCheck(this, PluginAdapter);

                    return _possibleConstructorReturn(this, (PluginAdapter.__proto__ || Object.getPrototypeOf(PluginAdapter)).apply(this, arguments));
                }

                _createClass(PluginAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    //配置页面的元数据
                    value: function onPageMetas(options) {
                        var baseMetas = (0, _PropMeta2.default)(options);
                        baseMetas.unshift({
                            name: 'uitype',
                            label: '解析器',
                            type: _MetaType2.default.Text,
                            props: {},
                            defaultValue: 'UnKnowWidget'
                        });
                        return baseMetas;
                    }

                    //数据转换为值的适配

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        return (0, _PropDataToValue2.default)(options);
                    }

                    //值转换为数据的适配

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        (0, _PropValueToData2.default)(options);
                    }
                }]);

                return PluginAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = PluginAdapter;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

var _AccordionsPage = __webpack_require__(76);

var _AccordionsPage2 = _interopRequireDefault(_AccordionsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionsAdapter = function (_PropAdapter) {
    _inherits(AccordionsAdapter, _PropAdapter);

    function AccordionsAdapter() {
        _classCallCheck(this, AccordionsAdapter);

        return _possibleConstructorReturn(this, (AccordionsAdapter.__proto__ || Object.getPrototypeOf(AccordionsAdapter)).apply(this, arguments));
    }

    _createClass(AccordionsAdapter, [{
        key: 'onPageProps',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        // }

        //配置页面的属性
        value: function onPageProps(options) {
            return (0, _AccordionsPage2.default)(options);
        }

        // //数据转换为值的适配
        // onDataToValue(options){
        // }
        //
        // //值转换为数据的适配
        // onValueToData(options){
        // }

    }]);

    return AccordionsAdapter;
}(_indexDeps.PropAdapter);

exports.default = AccordionsAdapter;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(1),
    UiTypeDef = _require.UiTypeDef,
    UiTitleDef = _require.UiTitleDef;

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加子卡片',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = 1 + value + new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: UiTypeDef.accordion,
                    uititle: UiTitleDef.accordion + value,
                    uikey: key,
                    key: key,
                    enableStepTarget: true,
                    header: UiTitleDef.accordion + value
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _AccordionMeta = __webpack_require__(78);

var _AccordionMeta2 = _interopRequireDefault(_AccordionMeta);

var _AccordionToValues = __webpack_require__(79);

var _AccordionToValues2 = _interopRequireDefault(_AccordionToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionAdapter = function (_PropAdapter) {
    _inherits(AccordionAdapter, _PropAdapter);

    function AccordionAdapter() {
        _classCallCheck(this, AccordionAdapter);

        return _possibleConstructorReturn(this, (AccordionAdapter.__proto__ || Object.getPrototypeOf(AccordionAdapter)).apply(this, arguments));
    }

    _createClass(AccordionAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var metas = _get(AccordionAdapter.prototype.__proto__ || Object.getPrototypeOf(AccordionAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _AccordionMeta2.default)(options);
            return [].concat(metas, myMetas);
        }

        // //配置页面的属性
        // onPageProps(options){
        // }

        // //数据转换为值的适配
        // onDataToValue(options){
        // }

        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(AccordionAdapter.prototype.__proto__ || Object.getPrototypeOf(AccordionAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _AccordionToValues2.default)(options);
        }
    }]);

    return AccordionAdapter;
}(_indexDeps.PropAdapter);

exports.default = AccordionAdapter;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'isOpen',
        label: '默认展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'header', value);
                    break;
                }
            // case "isOpen":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _AttachMgrwMeta = __webpack_require__(10);

var _AttachMgrwMeta2 = _interopRequireDefault(_AttachMgrwMeta);

var _AttachMgrwToValues = __webpack_require__(11);

var _AttachMgrwToValues2 = _interopRequireDefault(_AttachMgrwToValues);

var _AttachMgrwValues = __webpack_require__(12);

var _AttachMgrwValues2 = _interopRequireDefault(_AttachMgrwValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttachMgrwAdapter = function (_PropAdapter) {
    _inherits(AttachMgrwAdapter, _PropAdapter);

    function AttachMgrwAdapter() {
        _classCallCheck(this, AttachMgrwAdapter);

        return _possibleConstructorReturn(this, (AttachMgrwAdapter.__proto__ || Object.getPrototypeOf(AttachMgrwAdapter)).apply(this, arguments));
    }

    _createClass(AttachMgrwAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(AttachMgrwAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachMgrwAdapter.prototype), 'onPageMetas', this).call(this, options);
            baseMetas.push({
                name: 'sourceId',
                label: '单据标识',
                type: _indexDeps.MetaType.Text,
                props: {},
                defaultValue: ''
            });
            var myMetas = (0, _AttachMgrwMeta2.default)(options);
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
            var baseFormData = _get(AttachMgrwAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachMgrwAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _AttachMgrwValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(AttachMgrwAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachMgrwAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _AttachMgrwToValues2.default)(options);
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

    return AttachMgrwAdapter;
}(_indexDeps.PropAdapter);

exports.default = AttachMgrwAdapter;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _FormwMeta = __webpack_require__(82);

var _FormwMeta2 = _interopRequireDefault(_FormwMeta);

var _FormwToValues = __webpack_require__(83);

var _FormwToValues2 = _interopRequireDefault(_FormwToValues);

var _FormwValues = __webpack_require__(84);

var _FormwValues2 = _interopRequireDefault(_FormwValues);

var _FormwPage = __webpack_require__(85);

var _FormwPage2 = _interopRequireDefault(_FormwPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormwAdapter = function (_PropAdapter) {
    _inherits(FormwAdapter, _PropAdapter);

    function FormwAdapter() {
        _classCallCheck(this, FormwAdapter);

        return _possibleConstructorReturn(this, (FormwAdapter.__proto__ || Object.getPrototypeOf(FormwAdapter)).apply(this, arguments));
    }

    _createClass(FormwAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(FormwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormwAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _FormwMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _FormwPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(FormwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormwAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _FormwValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(FormwAdapter.prototype.__proto__ || Object.getPrototypeOf(FormwAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _FormwToValues2.default)(options);
        }
    }]);

    return FormwAdapter;
}(_indexDeps.PropAdapter);

exports.default = FormwAdapter;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'colnumber',
        label: '布局',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ value: 1, text: '一行一列' }, { value: 2, text: '一行两列' }, { value: 3, text: '一行三列' }, { value: 4, text: '一行四列' }]
        },
        defaultValue: 2
    }, {
        name: 'visible',
        label: '是否显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'labelCol',
        label: '标签宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 6
    }, {
        name: 'wrapperCol',
        label: '内容宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 14
    }, {
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                } else if (rootSystem) {
                    //再取页面级
                    return { "system.systemName": rootSystem.systemName };
                }
            }()
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: _indexDeps.MetaType.Refer,
        help: "先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" + "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" + "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" + "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" + "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n" + "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。",
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            multiselect: true,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                var rootEntity = (tplTree.dataprops || {}).entity;
                //将实体名作为参照过滤条件
                var cond = {};
                if (tplNode.dataprops && tplNode.dataprops.entity) {
                    //先取自身级
                    cond["entity.entityFullName"] = tplNode.dataprops.entity.entityFullName;
                } else if (rootEntity) {
                    //再取页面级
                    cond["entity.entityFullName"] = rootEntity.entityFullName;
                }
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    cond["projectName"] = tplNode.dataprops.system.systemName;
                } else if (rootSystem) {
                    //再取页面级
                    cond["projectName"] = rootSystem.systemName;
                }
                return cond;
            }() //注意立即执行
        },
        defaultValue: null
    }];
    return PropMeta;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops ? tplNode.dataprops : {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "colnumber":{
            //     // meta.defaultValue = value;
            //     tplNode.colnumber = value;
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            case "labelCol":
                {
                    if (meta.defaultValue === value) {
                        delete tplNode[meta.name];
                        (tplNode.children || []).forEach(function (child) {
                            delete child.formLabelCol;
                        });
                    } else {
                        tplNode[meta.name] = { span: value };
                        (tplNode.children || []).forEach(function (child) {
                            child.formLabelCol = { span: value };
                        });
                    }
                    break;
                }
            case "wrapperCol":
                {
                    if (meta.defaultValue === value) {
                        delete tplNode[meta.name];
                        (tplNode.children || []).forEach(function (child) {
                            delete child.formWrapperCol;
                        });
                    } else {
                        tplNode[meta.name] = { span: value };
                        (tplNode.children || []).forEach(function (child) {
                            child.formWrapperCol = { span: value };
                        });
                    }
                    break;
                }
            case "system":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "fields":
                {
                    //添加关联字段
                    delete tplNode[meta.name];
                    if (value) {
                        for (var idx = 0; idx < value.length; idx++) {
                            var item = value[idx];
                            //注意attrName属性赋值给uikey
                            var field = _Utils2.default.findByUiKey(tplNode.children, item.attrName);
                            if (!field) {
                                //不存在则添加,防止重复添加
                                var uikey = item.attrName;
                                var uititle = item.attrCnName;
                                //依据JAVA元数据字段类型自动匹配对应的数据类型
                                var fieldtype = (0, _Constant.JavaTypeToFieldType)(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var uisubtype = _Constant.FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.formitemw,
                                    uisubtype: uisubtype,
                                    label: uititle,
                                    uititle: uititle,
                                    uikey: uikey
                                };
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
        }
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    //获取页面配置的系统、实体信息
    var rootDataprops = tplTree.dataprops || {};
    var rootSystem = rootDataprops.system;
    var rootEntity = rootDataprops.entity;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "colnumber":{
            //     meta.defaultValue=tplNode.colnumber?tplNode.colnumber:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue = tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "labelCol":
            case "wrapperCol":
                if (tplNode[meta.name] && tplNode[meta.name].span) {
                    newFormData[meta.name] = tplNode[meta.name].span;
                }
                break;
            case "system":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.system){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id=tplNode.dataprops.system.id;
                    // }else if(rootSystem){//再取页面配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = rootSystem.systemCnName;
                    //     meta.defaultValue.code = rootSystem.systemName;
                    //     meta.defaultValue.id = rootSystem.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops.system) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                        newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                        newFormData[meta.name].id = tplNode.dataprops.system.id;
                    } else if (rootSystem) {
                        //再取页面配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootSystem.systemCnName;
                        newFormData[meta.name].code = rootSystem.systemName;
                        newFormData[meta.name].id = rootSystem.id;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else if(rootEntity){//再取页面配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=rootEntity.entityCnName;
                    //     meta.defaultValue.code=rootEntity.entityFullName;
                    //     meta.defaultValue.id=rootEntity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops.entity) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.entity.entityCnName;
                        newFormData[meta.name].code = tplNode.dataprops.entity.entityFullName;
                        newFormData[meta.name].id = tplNode.dataprops.entity.id;
                    } else if (rootEntity) {
                        //再取页面配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootEntity.entityCnName;
                        newFormData[meta.name].code = rootEntity.entityFullName;
                        newFormData[meta.name].id = rootEntity.id;
                    }
                    break;
                }
            case "fields":
                {
                    break;
                }
        }
    }
    return newFormData;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                var title = _Defines.UiTitleDef.input + count;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.formitemw,
                    uisubtype: _FormItemType2.default.input,
                    label: title,
                    uititle: title
                });
                return true;
            },
            text: '添加字段'
        }]
    };
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SearchConditionMeta = __webpack_require__(87);

var _SearchConditionMeta2 = _interopRequireDefault(_SearchConditionMeta);

var _SearchConditionToValues = __webpack_require__(88);

var _SearchConditionToValues2 = _interopRequireDefault(_SearchConditionToValues);

var _SearchConditionValues = __webpack_require__(89);

var _SearchConditionValues2 = _interopRequireDefault(_SearchConditionValues);

var _SearchConditionPage = __webpack_require__(90);

var _SearchConditionPage2 = _interopRequireDefault(_SearchConditionPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchConditionAdapter = function (_PropAdapter) {
    _inherits(SearchConditionAdapter, _PropAdapter);

    function SearchConditionAdapter() {
        _classCallCheck(this, SearchConditionAdapter);

        return _possibleConstructorReturn(this, (SearchConditionAdapter.__proto__ || Object.getPrototypeOf(SearchConditionAdapter)).apply(this, arguments));
    }

    _createClass(SearchConditionAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SearchConditionAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchConditionAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _SearchConditionMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _SearchConditionPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(SearchConditionAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchConditionAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _SearchConditionValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(SearchConditionAdapter.prototype.__proto__ || Object.getPrototypeOf(SearchConditionAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _SearchConditionToValues2.default)(options);
        }
    }]);

    return SearchConditionAdapter;
}(_indexDeps.PropAdapter);

exports.default = SearchConditionAdapter;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '查询方案'
    }, {
        name: 'buttonIcon',
        label: '按钮图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: null
    }, {
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                //依据系统名称筛选实体
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                } else if (rootSystem) {
                    //再取页面级
                    return { "system.systemName": rootSystem.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: _indexDeps.MetaType.Refer,
        help: "先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" + "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" + "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" + "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" + "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n" + "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。",
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            multiselect: true,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                var rootEntity = (tplTree.dataprops || {}).entity;
                //将实体名作为参照过滤条件
                var cond = {};
                if (tplNode.dataprops && tplNode.dataprops.entity) {
                    //先取自身级
                    cond["entity.entityFullName"] = tplNode.dataprops.entity.entityFullName;
                } else if (rootEntity) {
                    //再取页面级
                    cond["entity.entityFullName"] = rootEntity.entityFullName;
                }
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    cond["projectName"] = tplNode.dataprops.system.systemName;
                } else if (rootSystem) {
                    //再取页面级
                    cond["projectName"] = rootSystem.systemName;
                }
                return cond;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: "XG01"
    }, {
        name: 'enableSenior',
        label: '高级搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enablePublic',
        label: '公共方案',
        help: '是否允许用户收藏方案为公共方案',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableItemSearch',
        label: '单项搜索',
        help: '是否启用在输入框输入关键词弹出下拉选择字段，进行单项字段搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableElasticSearch',
        label: '全文搜索',
        help: '是否启用在输入框输入关键词直接回车进行全文搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableSort',
        label: '支持排序',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];

    return PropMeta;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "buttonText":{
            //     // meta.defaultValue = value;
            //     tplNode[meta.name]=value;
            //     break;
            // }
            // case "buttonIcon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "system":
                {
                    //关联系统
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "fields":
                {
                    //添加关联字段
                    delete tplNode[meta.name];
                    if (value) {
                        for (var idx = 0; idx < value.length; idx++) {
                            var item = value[idx];
                            //注意attrName属性赋值给uikey
                            var field = _Utils2.default.findByUiKey(tplNode.children, item.attrName);
                            if (!field) {
                                //不存在则添加,防止重复添加
                                var uikey = item.attrName;
                                var uititle = item.attrCnName;
                                //依据JAVA元数据字段类型自动匹配对应的数据类型
                                var fieldtype = (0, _Constant.JavaTypeToFieldType)(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var inputtype = _Constant.FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.searchitem,
                                    uititle: uititle,
                                    title: uititle,
                                    uikey: uikey,
                                    key: uikey,
                                    fieldtype: fieldtype,
                                    inputtype: inputtype,
                                    oper: []
                                };
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
            case "billType":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "enableSenior":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enablePublic":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableItemSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableElasticSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableSort":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    //获取页面配置的系统、实体信息

    var rootDataprops = tplTree.dataprops || {};
    var rootSystem = rootDataprops.system;
    var rootEntity = rootDataprops.entity;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "buttonText":{
            //     meta.defaultValue=tplNode.buttonText!=undefined?tplNode.buttonText:meta.defaultValue;
            //     break;
            // }
            // case "buttonIcon":{
            //     meta.defaultValue=tplNode.buttonIcon!=undefined?tplNode.buttonIcon:meta.defaultValue;
            //     break;
            // }
            case "system":
                {
                    //关联系统
                    // if(tplNode.dataprops&&tplNode.dataprops.system){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id=tplNode.dataprops.system.id;
                    //     //meta.defaultValue.baseUrl=tplNode.dataprops.system.baseUrl;
                    // }else if(rootSystem){//再取页面配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = rootSystem.systemCnName;
                    //     meta.defaultValue.code = rootSystem.systemName;
                    //     meta.defaultValue.id = rootSystem.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops.system) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                        newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                        newFormData[meta.name].id = tplNode.dataprops.system.id;
                    } else if (rootSystem) {
                        //再取页面配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootSystem.systemCnName;
                        newFormData[meta.name].code = rootSystem.systemName;
                        newFormData[meta.name].id = rootSystem.id;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身级
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else if(rootEntity){//再取页面配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=rootEntity.entityCnName;
                    //     meta.defaultValue.code=rootEntity.entityFullName;
                    //     meta.defaultValue.id=rootEntity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops.entity) {
                        //先取自身级
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.entity.entityCnName;
                        newFormData[meta.name].code = tplNode.dataprops.entity.entityFullName;
                        newFormData[meta.name].id = tplNode.dataprops.entity.id;
                    } else if (rootEntity) {
                        //再取页面配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootEntity.entityCnName;
                        newFormData[meta.name].code = rootEntity.entityFullName;
                        newFormData[meta.name].id = rootEntity.id;
                    }
                    break;
                }
            case "fields":
                {
                    break;
                }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "enableSenior":{
            //     meta.defaultValue=tplNode.enableSenior!==undefined?tplNode.enableSenior:meta.defaultValue;
            //     break;
            // }
            // case "enablePublic":{
            //     meta.defaultValue=tplNode.enablePublic!==undefined?tplNode.enablePublic:meta.defaultValue;
            //     break;
            // }
            // case "enableItemSearch":{
            //     meta.defaultValue=tplNode.enableItemSearch!==undefined?tplNode.enableItemSearch:meta.defaultValue;
            //     break;
            // }
            // case "enableElasticSearch":{
            //     meta.defaultValue=tplNode.enableElasticSearch!==undefined?tplNode.enableElasticSearch:meta.defaultValue;
            //     break;
            // }
            // case "enableSort":{
            //     meta.defaultValue=tplNode.enableSort!==undefined?tplNode.enableSort:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!==undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!==undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加条件项',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.searchitem,
                    uititle: _Defines.UiTitleDef.searchitem + value,
                    title: _Defines.UiTitleDef.searchitem + value,
                    uikey: key,
                    key: key,
                    fieldtype: 'string',
                    inputtype: _FormItemType2.default.input,
                    oper: []
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SearchItemMeta = __webpack_require__(92);

var _SearchItemMeta2 = _interopRequireDefault(_SearchItemMeta);

var _SearchItemToValues = __webpack_require__(94);

var _SearchItemToValues2 = _interopRequireDefault(_SearchItemToValues);

var _SearchItemValues = __webpack_require__(96);

var _SearchItemValues2 = _interopRequireDefault(_SearchItemValues);

var _SearchItemPage = __webpack_require__(97);

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

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _indexDeps = __webpack_require__(0);

var _FormInputsMeta = __webpack_require__(7);

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operations = {
    'eq': '等于',
    'ne': '不等于',
    'lt': '小于',
    'le': '小于等于',
    'gt': '大于',
    'ge': '大于等于',
    'bw': '开始于',
    'in': '属于',
    'ni': '不属于',
    'cn': '包含',
    'bt': '介于'
};

function makeOpers(operations) {
    var options = [];
    for (var key in operations) {
        if (operations.hasOwnProperty(key)) {
            options.push({ text: operations[key], value: key });
        }
    }
    return options;
}
module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'fieldtype',
        label: '字段类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '字符串', value: 'string' }, { text: '字符串数组', value: 'arraystring' }, { text: '数字', value: 'number' }, { text: '精确数值', value: 'currency' }, { text: '日期', value: 'date' }, { text: '布尔', value: 'boolean' }]
        },
        defaultValue: 'string'
    }, {
        name: 'inputtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: _Defines.FormItemType.input, text: _Defines.UiTitleDef.input }, { value: _Defines.FormItemType.date, text: _Defines.UiTitleDef.datepicker }, { value: _Defines.FormItemType.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _Defines.FormItemType.switch, text: _Defines.UiTitleDef.switch }, { value: _Defines.FormItemType.select, text: _Defines.UiTitleDef.select }, { value: _Defines.FormItemType.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _Defines.FormItemType.number, text: _Defines.UiTitleDef.inputnumber }, { value: _Defines.FormItemType.currency, text: _Defines.UiTitleDef.currency }, { value: _Defines.FormItemType.autoselect, text: _Defines.UiTitleDef.autoselect }]
        },
        defaultValue: _Defines.FormItemType.input
    }, {
        name: 'oper',
        label: '操作集合',
        type: _indexDeps.MetaType.Select,
        props: {

            multiple: true,
            options: makeOpers(operations)
        },
        defaultValue: []
    }, {
        name: 'hidden',
        label: '隐藏条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'required',
        label: '必填条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'readonly',
        label: '必填只读',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableSearch',
        label: '支持搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrder',
        label: '支持排序',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'preFunction',
        label: '预置函数',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'defdoc-query-treegrid',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }];
    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前inputtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.inputtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;
    return formMeta;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputmap){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputmap||
    //     tplNode.uitype == UiTypeDef.formitemw
    //     //||tplNode.uitype == UiTypeDef.edititemw
    //     //||tplNode.uitype == UiTypeDef.searchitem
    // ) {
    //     //PropMeta = PropMeta.concat([//扩展的配置
    //     //]);
    // }
    return PropMeta;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = __webpack_require__(0);

var _FormInputsToValues = __webpack_require__(8);

var _FormInputsToValues2 = _interopRequireDefault(_FormInputsToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当inputtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode) {
    //需要保留的属性清单
    var keepProps = ['nid', 'uikey', 'uititle', 'uitype', 'className', 'inputtype', 'fieldkey', 'title', 'fieldtype', 'oper', 'hidden', 'required', 'enableSearch', 'enableOrder', 'preFunction'];
    //需要清理的属性清单
    var removeProps = [];
    for (var key in tplNode) {
        if (!Array.includes(keepProps, key)) removeProps.push(key);
    }
    //console.log('需要清理的属性：',removeProps);
    //执行清理
    for (var idx in removeProps) {
        delete tplNode[removeProps[idx]];
    }
}
module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            case "uikey":
                {
                    // tplNode.fieldkey = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'fieldkey', value);
                    break;
                }
            // case "fieldtype":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "oper":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "inputtype":
                {
                    // meta.defaultValue = value;
                    if (tplNode.inputtype != value) {
                        tplNode.inputtype = value;
                        clearOtherProps(tplNode); //当uisubtype发生变更时清理属性
                    }
                    break;
                }
            // case "hidden":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "readonly":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableSearch":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrder":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "preFunction":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.name;
                        // meta.defaultValue.code = value.code;
                        tplNode.funcId = value.id;
                        tplNode.funcCode = value.code;
                        tplNode.funcName = value.name;
                    } else {
                        delete tplNode.funcId;
                        delete tplNode.funcCode;
                        delete tplNode.funcName;
                    }
                    break;
                }
        }
    }
    //初始化inputprops属性
    tplNode.inputprops = tplNode.inputprops || {};
    //处理inputtype特有属性
    if (typeof _FormInputsToValues2.default[tplNode.inputtype] == 'function') {
        _FormInputsToValues2.default[tplNode.inputtype](options);
    }
    //清理inputprops空对象属性
    if (tplNode.inputprops && !Object.keys(tplNode.inputprops).length) {
        delete tplNode.inputprops;
    }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputmap){
    //     // BasePropToValues(options);//处理公共属性
    // }
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormInputsValues = __webpack_require__(9);

var _FormInputsValues2 = _interopRequireDefault(_FormInputsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "fieldtype":{
            //     meta.defaultValue=tplNode.fieldtype?tplNode.fieldtype:meta.defaultValue;
            //     break;
            // }
            // case "oper":{
            //     meta.defaultValue=tplNode.oper?tplNode.oper:meta.defaultValue;
            //     break;
            // }
            // case "inputtype":{
            //     meta.defaultValue=tplNode.inputtype?tplNode.inputtype:meta.defaultValue;
            //     break;
            // }
            // case "hidden":{
            //     meta.defaultValue=tplNode.hidden!==undefined?tplNode.hidden:meta.defaultValue;
            //     break;
            // }
            // case "required":{
            //     meta.defaultValue=tplNode.required!==undefined?tplNode.required:meta.defaultValue;
            //     break;
            // }
            // case "readonly":{
            //     meta.defaultValue=tplNode.readonly!==undefined?tplNode.readonly:meta.defaultValue;
            //     break;
            // }
            // case "enableSearch":{
            //     meta.defaultValue=tplNode.enableSearch!==undefined?tplNode.enableSearch:meta.defaultValue;
            //     break;
            // }
            // case "enableOrder":{
            //     meta.defaultValue=tplNode.enableOrder!==undefined?tplNode.enableOrder:meta.defaultValue;
            //     break;
            // }
            case "preFunction":
                {
                    // if(tplNode.funcId&&tplNode.funcCode&&tplNode.funcName){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.id = tplNode.funcId;
                    //     meta.defaultValue.code = tplNode.funcCode;
                    //     meta.defaultValue.name = tplNode.funcName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.funcId && tplNode.funcCode && tplNode.funcName) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.funcId;
                        newFormData[meta.name].code = tplNode.funcCode;
                        newFormData[meta.name].name = tplNode.funcName;
                    }
                    break;
                }
        }
    }
    //处理inputtype特有属性
    if (typeof _FormInputsValues2.default[tplNode.inputtype] == 'function') {
        newFormData = Object.assign(newFormData, _FormInputsValues2.default[tplNode.inputtype](options));
    }
    return newFormData;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            var buttons = [];
            var inputtype = opts.tplNode.inputtype;
            if (inputtype === _FormItemType2.default.select) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                        var title = _Defines.UiTitleDef.option + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            children: title,
                            uikey: key,
                            value: key,
                            key: key
                        });
                        return true;
                    },
                    text: '添加下拉选项'
                });
            }
            return buttons.length > 0 ? buttons : null;
        }
    };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SearchSchemeMeta = __webpack_require__(99);

var _SearchSchemeMeta2 = _interopRequireDefault(_SearchSchemeMeta);

var _SearchSchemeToValues = __webpack_require__(100);

var _SearchSchemeToValues2 = _interopRequireDefault(_SearchSchemeToValues);

var _SearchSchemeValues = __webpack_require__(101);

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

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: ''
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableUnSelect',
        label: '启用反选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "billType":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUnSelect":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     //meta.defaultValue.id =
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!=undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
            // case "enableUnSelect":{
            //     meta.defaultValue=tplNode.enableUnSelect!=undefined?tplNode.enableUnSelect:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _AutoSelectMeta = __webpack_require__(32);

var _AutoSelectMeta2 = _interopRequireDefault(_AutoSelectMeta);

var _AutoSelectToValues = __webpack_require__(51);

var _AutoSelectToValues2 = _interopRequireDefault(_AutoSelectToValues);

var _AutoSelectValues = __webpack_require__(70);

var _AutoSelectValues2 = _interopRequireDefault(_AutoSelectValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoSelectAdapter = function (_PropAdapter) {
    _inherits(AutoSelectAdapter, _PropAdapter);

    function AutoSelectAdapter() {
        _classCallCheck(this, AutoSelectAdapter);

        return _possibleConstructorReturn(this, (AutoSelectAdapter.__proto__ || Object.getPrototypeOf(AutoSelectAdapter)).apply(this, arguments));
    }

    _createClass(AutoSelectAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(AutoSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(AutoSelectAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _AutoSelectMeta2.default)(options);
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
            var baseFormData = _get(AutoSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(AutoSelectAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _AutoSelectValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(AutoSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(AutoSelectAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _AutoSelectToValues2.default)(options);
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

    return AutoSelectAdapter;
}(_indexDeps.PropAdapter);

exports.default = AutoSelectAdapter;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _EnumSelectMeta = __webpack_require__(17);

var _EnumSelectMeta2 = _interopRequireDefault(_EnumSelectMeta);

var _EnumSelectToValues = __webpack_require__(41);

var _EnumSelectToValues2 = _interopRequireDefault(_EnumSelectToValues);

var _EnumSelectValues = __webpack_require__(57);

var _EnumSelectValues2 = _interopRequireDefault(_EnumSelectValues);

var _FormInputsToNode = __webpack_require__(4);

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

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ScrollbarMeta = __webpack_require__(105);

var _ScrollbarMeta2 = _interopRequireDefault(_ScrollbarMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollbarAdapter = function (_PropAdapter) {
    _inherits(ScrollbarAdapter, _PropAdapter);

    function ScrollbarAdapter() {
        _classCallCheck(this, ScrollbarAdapter);

        return _possibleConstructorReturn(this, (ScrollbarAdapter.__proto__ || Object.getPrototypeOf(ScrollbarAdapter)).apply(this, arguments));
    }

    _createClass(ScrollbarAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ScrollbarAdapter.prototype.__proto__ || Object.getPrototypeOf(ScrollbarAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ScrollbarMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return ScrollbarAdapter;
}(_indexDeps.PropAdapter);

exports.default = ScrollbarAdapter;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'width',
        label: '宽度',
        type: _indexDeps.MetaType.Number,
        props: {
            selectValue: 'px',
            selectOptions: ['px', '%'],

            min: null, //滑条最小值
            max: null, //滑条最大值
            enableSlider: false,
            enableSelect: true
        },
        defaultValue: '400px'
    }, {
        name: 'height',
        label: '高度',
        type: _indexDeps.MetaType.Number,
        props: {
            selectValue: 'px',
            selectOptions: ['px', '%'],

            min: null, //滑条最小值
            max: null, //滑条最大值
            enableSlider: false,
            enableSelect: true
        },
        defaultValue: '400px'
    }];

    return PropMeta;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TreeMeta = __webpack_require__(107);

var _TreeMeta2 = _interopRequireDefault(_TreeMeta);

var _TreePage = __webpack_require__(108);

var _TreePage2 = _interopRequireDefault(_TreePage);

var _TreeToValues = __webpack_require__(109);

var _TreeToValues2 = _interopRequireDefault(_TreeToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeAdapter = function (_PropAdapter) {
    _inherits(TreeAdapter, _PropAdapter);

    function TreeAdapter() {
        _classCallCheck(this, TreeAdapter);

        return _possibleConstructorReturn(this, (TreeAdapter.__proto__ || Object.getPrototypeOf(TreeAdapter)).apply(this, arguments));
    }

    _createClass(TreeAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TreeAdapter.prototype.__proto__ || Object.getPrototypeOf(TreeAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TreeMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _TreePage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TreeAdapter.prototype.__proto__ || Object.getPrototypeOf(TreeAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TreeToValues2.default)(options);
        }
    }]);

    return TreeAdapter;
}(_indexDeps.PropAdapter);

exports.default = TreeAdapter;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'header',
        label: '头部标题',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'checkable',
        label: '支持勾选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'multiple',
        label: '支持多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'draggable',
        label: '支持拖拽',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'bordered',
        label: '显示边框',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'showLine',
        label: '显示线条',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'searchFilter',
        label: '启用搜索',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'placeholder',
        label: '搜索提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'height',
        label: '固定高度',
        height: '树内容体的固定高度值，当实际内容超出本高度后将显示滚动条',
        type: _indexDeps.MetaType.Number,
        props: { enableSlider: false, enableSelect: false, min: null, max: null },
        defaultValue: null
    }];

    return PropMeta;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加树节点',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.treenode,
                    uititle: _Defines.UiTitleDef.treenode + value,
                    uikey: key,
                    key: key,
                    title: _Defines.UiTitleDef.treenode + value,
                    disabled: false,
                    disableCheckbox: false,
                    selectable: true,
                    expanded: true
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "checkable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "searchFilter":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "multiple":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "bordered":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "header":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "height":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "placeholder":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showLine":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TreeNodeMeta = __webpack_require__(111);

var _TreeNodeMeta2 = _interopRequireDefault(_TreeNodeMeta);

var _TreeNodePage = __webpack_require__(112);

var _TreeNodePage2 = _interopRequireDefault(_TreeNodePage);

var _TreeNodeToValues = __webpack_require__(113);

var _TreeNodeToValues2 = _interopRequireDefault(_TreeNodeToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNodeAdapter = function (_PropAdapter) {
    _inherits(TreeNodeAdapter, _PropAdapter);

    function TreeNodeAdapter() {
        _classCallCheck(this, TreeNodeAdapter);

        return _possibleConstructorReturn(this, (TreeNodeAdapter.__proto__ || Object.getPrototypeOf(TreeNodeAdapter)).apply(this, arguments));
    }

    _createClass(TreeNodeAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TreeNodeAdapter.prototype.__proto__ || Object.getPrototypeOf(TreeNodeAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TreeNodeMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _TreeNodePage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TreeNodeAdapter.prototype.__proto__ || Object.getPrototypeOf(TreeNodeAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TreeNodeToValues2.default)(options);
        }
    }]);

    return TreeNodeAdapter;
}(_indexDeps.PropAdapter);

exports.default = TreeNodeAdapter;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'disabled',
        label: '禁用响应',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'disableCheckbox',
        label: '禁用勾选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'expanded',
        label: '是否展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'selectable',
        label: '允许选中',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'draggable',
        label: '允许拖拽',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];

    return PropMeta;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加树节点',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = tplNode.title + '-' + (1 + (tplNode.children ? tplNode.children.length : 0));
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.treenode,
                    uititle: value,
                    uikey: key,
                    key: key,
                    title: value
                    // disabled:false,
                    // disableCheckbox:false,
                    // selectable:false,
                    // expanded:false
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "disableCheckbox":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "selectable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "expanded":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _DivideMeta = __webpack_require__(115);

var _DivideMeta2 = _interopRequireDefault(_DivideMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DivideAdapter = function (_PropAdapter) {
    _inherits(DivideAdapter, _PropAdapter);

    function DivideAdapter() {
        _classCallCheck(this, DivideAdapter);

        return _possibleConstructorReturn(this, (DivideAdapter.__proto__ || Object.getPrototypeOf(DivideAdapter)).apply(this, arguments));
    }

    _createClass(DivideAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(DivideAdapter.prototype.__proto__ || Object.getPrototypeOf(DivideAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _DivideMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return DivideAdapter;
}(_indexDeps.PropAdapter);

exports.default = DivideAdapter;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
	var PropMeta = [{
		name: 'type',
		label: '类型',
		type: _indexDeps.MetaType.Select,
		props: {
			options: [{ value: 'inline', text: '水平分隔' }, { value: 'vertical', text: '垂直分隔' }]
		},
		defaultValue: 'vertical'
	}];
	return PropMeta;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ModalMeta = __webpack_require__(117);

var _ModalMeta2 = _interopRequireDefault(_ModalMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalAdapter = function (_PropAdapter) {
    _inherits(ModalAdapter, _PropAdapter);

    function ModalAdapter() {
        _classCallCheck(this, ModalAdapter);

        return _possibleConstructorReturn(this, (ModalAdapter.__proto__ || Object.getPrototypeOf(ModalAdapter)).apply(this, arguments));
    }

    _createClass(ModalAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ModalAdapter.prototype.__proto__ || Object.getPrototypeOf(ModalAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ModalMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return ModalAdapter;
}(_indexDeps.PropAdapter);

exports.default = ModalAdapter;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'visible',
        label: '窗口显示',
        labelStyle: { color: "red" },
        help: '弹出窗口默认是不显示的，需要动态代码来配合控制显示，例如： this.findUI("myDialog").visible=true; this.refresh(); 运行态时执行以上代码控制其显示,其中"myDialog"为弹窗的键值。(此效果只有在运行态时才生效)',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'title',
        label: '窗口标题',
        help: '窗口左上角显示的标题文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'width',
        label: '窗口宽度',
        type: _indexDeps.MetaType.Number,
        help: '将值清空，使用默认宽度(520px)',
        props: {

            enableSlider: false,
            selectValue: 'px',
            selectOptions: ['px', '%'],
            max: null
        },
        defaultValue: null
    }, {
        name: 'okText',
        label: '确定文本',
        type: _indexDeps.MetaType.Text,
        help: '自定义“确定”按钮文本',
        props: {},
        defaultValue: null
    }, {
        name: 'cancelText',
        label: '取消文本',
        type: _indexDeps.MetaType.Text,
        help: '自定义“取消”按钮文本',
        props: {},
        defaultValue: null
    }, {
        name: 'closable',
        label: '显示关闭',
        help: '窗口右上角是否显示关闭按钮(此效果只有在运行态时才生效)',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'draggable',
        label: '拖拽移动',
        help: '窗口顶部区域按住鼠标是否可以进行拖拽移动(此效果只有在运行态时才生效)',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'maskClosable',
        label: '蒙层响应',
        help: '点击蒙层是否自动关闭窗口，如果需要模态窗口，将此设置为：否。(此效果只有在运行态时才生效)',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _StepsNavMeta = __webpack_require__(119);

var _StepsNavMeta2 = _interopRequireDefault(_StepsNavMeta);

var _StepsNavToValues = __webpack_require__(120);

var _StepsNavToValues2 = _interopRequireDefault(_StepsNavToValues);

var _StepsNavPage = __webpack_require__(121);

var _StepsNavPage2 = _interopRequireDefault(_StepsNavPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepsNavAdapter = function (_PropAdapter) {
    _inherits(StepsNavAdapter, _PropAdapter);

    function StepsNavAdapter() {
        _classCallCheck(this, StepsNavAdapter);

        return _possibleConstructorReturn(this, (StepsNavAdapter.__proto__ || Object.getPrototypeOf(StepsNavAdapter)).apply(this, arguments));
    }

    _createClass(StepsNavAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(StepsNavAdapter.prototype.__proto__ || Object.getPrototypeOf(StepsNavAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _StepsNavMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _StepsNavPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(StepsNavAdapter.prototype.__proto__ || Object.getPrototypeOf(StepsNavAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _StepsNavToValues2.default)(options);
        }
    }]);

    return StepsNavAdapter;
}(_indexDeps.PropAdapter);

exports.default = StepsNavAdapter;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
	var PropMeta = [{
		name: 'target',
		label: '监听目标',
		type: _indexDeps.MetaType.Text,
		props: {},
		defaultValue: ''
	}];

	return PropMeta;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    // tplNode.key = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "target":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加导航项',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.stepsnavitem,
                    uititle: _Defines.UiTitleDef.stepsnavitem + value,
                    title: _Defines.UiTitleDef.stepsnavitem + value,
                    description: ''
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _StepsNavItemMeta = __webpack_require__(123);

var _StepsNavItemMeta2 = _interopRequireDefault(_StepsNavItemMeta);

var _StepsNavItemToValues = __webpack_require__(124);

var _StepsNavItemToValues2 = _interopRequireDefault(_StepsNavItemToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepsNavItemAdapter = function (_PropAdapter) {
    _inherits(StepsNavItemAdapter, _PropAdapter);

    function StepsNavItemAdapter() {
        _classCallCheck(this, StepsNavItemAdapter);

        return _possibleConstructorReturn(this, (StepsNavItemAdapter.__proto__ || Object.getPrototypeOf(StepsNavItemAdapter)).apply(this, arguments));
    }

    _createClass(StepsNavItemAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(StepsNavItemAdapter.prototype.__proto__ || Object.getPrototypeOf(StepsNavItemAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _StepsNavItemMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(StepsNavItemAdapter.prototype.__proto__ || Object.getPrototypeOf(StepsNavItemAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _StepsNavItemToValues2.default)(options);
        }
    }]);

    return StepsNavItemAdapter;
}(_indexDeps.PropAdapter);

exports.default = StepsNavItemAdapter;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }, {
        name: 'linkTarget',
        label: '跳转目标',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'description',
        label: '描述',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];

    return PropMeta;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    // tplNode.key = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "icon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "linkTarget":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "description":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _EditorMeta = __webpack_require__(28);

var _EditorMeta2 = _interopRequireDefault(_EditorMeta);

var _EditorToValues = __webpack_require__(48);

var _EditorToValues2 = _interopRequireDefault(_EditorToValues);

var _EditorValues = __webpack_require__(67);

var _EditorValues2 = _interopRequireDefault(_EditorValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorAdapter = function (_PropAdapter) {
    _inherits(EditorAdapter, _PropAdapter);

    function EditorAdapter() {
        _classCallCheck(this, EditorAdapter);

        return _possibleConstructorReturn(this, (EditorAdapter.__proto__ || Object.getPrototypeOf(EditorAdapter)).apply(this, arguments));
    }

    _createClass(EditorAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(EditorAdapter.prototype.__proto__ || Object.getPrototypeOf(EditorAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _EditorMeta2.default)(options);
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
            var baseFormData = _get(EditorAdapter.prototype.__proto__ || Object.getPrototypeOf(EditorAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _EditorValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(EditorAdapter.prototype.__proto__ || Object.getPrototypeOf(EditorAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _EditorToValues2.default)(options);
        }
    }]);

    return EditorAdapter;
}(_indexDeps.PropAdapter);

exports.default = EditorAdapter;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TagItemToValues = __webpack_require__(127);

var _TagItemToValues2 = _interopRequireDefault(_TagItemToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagItemAdapter = function (_PropAdapter) {
    _inherits(TagItemAdapter, _PropAdapter);

    function TagItemAdapter() {
        _classCallCheck(this, TagItemAdapter);

        return _possibleConstructorReturn(this, (TagItemAdapter.__proto__ || Object.getPrototypeOf(TagItemAdapter)).apply(this, arguments));
    }

    _createClass(TagItemAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(TagItemAdapter.prototype.__proto__ || Object.getPrototypeOf(TagItemAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TagItemToValues2.default)(options);
        }
    }]);

    return TagItemAdapter;
}(_indexDeps.PropAdapter);

exports.default = TagItemAdapter;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "text":
                {
                    // meta.defaultValue = value;
                    // tplNode.text = value;
                    // tplNode.uititle = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'uititle', value);
                    break;
                }
            // case "value":{
            //     // meta.defaultValue = value;
            //     tplNode.value = value;
            //     break;
            // }
        }
    }
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TagGroupPage = __webpack_require__(129);

var _TagGroupPage2 = _interopRequireDefault(_TagGroupPage);

var _TagGroupToValues = __webpack_require__(130);

var _TagGroupToValues2 = _interopRequireDefault(_TagGroupToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagGroupAdapter = function (_PropAdapter) {
    _inherits(TagGroupAdapter, _PropAdapter);

    function TagGroupAdapter() {
        _classCallCheck(this, TagGroupAdapter);

        return _possibleConstructorReturn(this, (TagGroupAdapter.__proto__ || Object.getPrototypeOf(TagGroupAdapter)).apply(this, arguments));
    }

    _createClass(TagGroupAdapter, [{
        key: 'onPageProps',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        //配置页面的属性
        value: function onPageProps(options) {
            return (0, _TagGroupPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TagGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(TagGroupAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TagGroupToValues2.default)(options);
        }
    }]);

    return TagGroupAdapter;
}(_indexDeps.PropAdapter);

exports.default = TagGroupAdapter;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加标签项',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.tagitem,
                    uititle: _Defines.UiTitleDef.tagitem + value,
                    text: _Defines.UiTitleDef.tagitem + value,
                    value: key
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    tplNode.tab = value;
                    break;
                }
        }
    }
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ToolbarMeta = __webpack_require__(132);

var _ToolbarMeta2 = _interopRequireDefault(_ToolbarMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarAdapter = function (_PropAdapter) {
    _inherits(ToolbarAdapter, _PropAdapter);

    function ToolbarAdapter() {
        _classCallCheck(this, ToolbarAdapter);

        return _possibleConstructorReturn(this, (ToolbarAdapter.__proto__ || Object.getPrototypeOf(ToolbarAdapter)).apply(this, arguments));
    }

    _createClass(ToolbarAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ToolbarAdapter.prototype.__proto__ || Object.getPrototypeOf(ToolbarAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ToolbarMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return ToolbarAdapter;
}(_indexDeps.PropAdapter);

exports.default = ToolbarAdapter;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'align',
        label: '对齐方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: 'left'
    }, {
        name: 'enableAffix',
        label: '固定',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _InputButtonMeta = __webpack_require__(20);

var _InputButtonMeta2 = _interopRequireDefault(_InputButtonMeta);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputButtonAdapter = function (_PropAdapter) {
    _inherits(InputButtonAdapter, _PropAdapter);

    function InputButtonAdapter() {
        _classCallCheck(this, InputButtonAdapter);

        return _possibleConstructorReturn(this, (InputButtonAdapter.__proto__ || Object.getPrototypeOf(InputButtonAdapter)).apply(this, arguments));
    }

    _createClass(InputButtonAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(InputButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(InputButtonAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _InputButtonMeta2.default)(options);
            return baseMetas.concat(myMetas);
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }
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

    return InputButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = InputButtonAdapter;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CascaderMeta = __webpack_require__(14);

var _CascaderMeta2 = _interopRequireDefault(_CascaderMeta);

var _CascaderToValues = __webpack_require__(42);

var _CascaderToValues2 = _interopRequireDefault(_CascaderToValues);

var _CascaderValues = __webpack_require__(53);

var _CascaderValues2 = _interopRequireDefault(_CascaderValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CascaderAdapter = function (_PropAdapter) {
    _inherits(CascaderAdapter, _PropAdapter);

    function CascaderAdapter() {
        _classCallCheck(this, CascaderAdapter);

        return _possibleConstructorReturn(this, (CascaderAdapter.__proto__ || Object.getPrototypeOf(CascaderAdapter)).apply(this, arguments));
    }

    _createClass(CascaderAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CascaderAdapter.prototype.__proto__ || Object.getPrototypeOf(CascaderAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _CascaderMeta2.default)(options);
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
            var baseFormData = _get(CascaderAdapter.prototype.__proto__ || Object.getPrototypeOf(CascaderAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _CascaderValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CascaderAdapter.prototype.__proto__ || Object.getPrototypeOf(CascaderAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CascaderToValues2.default)(options);
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

    return CascaderAdapter;
}(_indexDeps.PropAdapter);

exports.default = CascaderAdapter;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _AttachuploadMeta = __webpack_require__(13);

var _AttachuploadMeta2 = _interopRequireDefault(_AttachuploadMeta);

var _AttachuploadToValues = __webpack_require__(46);

var _AttachuploadToValues2 = _interopRequireDefault(_AttachuploadToValues);

var _AttachuploadValues = __webpack_require__(52);

var _AttachuploadValues2 = _interopRequireDefault(_AttachuploadValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttachuploadAdapter = function (_PropAdapter) {
    _inherits(AttachuploadAdapter, _PropAdapter);

    function AttachuploadAdapter() {
        _classCallCheck(this, AttachuploadAdapter);

        return _possibleConstructorReturn(this, (AttachuploadAdapter.__proto__ || Object.getPrototypeOf(AttachuploadAdapter)).apply(this, arguments));
    }

    _createClass(AttachuploadAdapter, [{
        key: 'onPageMetas',

        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(AttachuploadAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachuploadAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _AttachuploadMeta2.default)(options);
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
            var baseFormData = _get(AttachuploadAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachuploadAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _AttachuploadValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(AttachuploadAdapter.prototype.__proto__ || Object.getPrototypeOf(AttachuploadAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _AttachuploadToValues2.default)(options);
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

    return AttachuploadAdapter;
}(_indexDeps.PropAdapter);

exports.default = AttachuploadAdapter;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _PrintButtonMeta = __webpack_require__(137);

var _PrintButtonMeta2 = _interopRequireDefault(_PrintButtonMeta);

var _PrintButtonToValues = __webpack_require__(138);

var _PrintButtonToValues2 = _interopRequireDefault(_PrintButtonToValues);

var _PrintButtonValues = __webpack_require__(139);

var _PrintButtonValues2 = _interopRequireDefault(_PrintButtonValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrintButtonAdapter = function (_PropAdapter) {
    _inherits(PrintButtonAdapter, _PropAdapter);

    function PrintButtonAdapter() {
        _classCallCheck(this, PrintButtonAdapter);

        return _possibleConstructorReturn(this, (PrintButtonAdapter.__proto__ || Object.getPrototypeOf(PrintButtonAdapter)).apply(this, arguments));
    }

    _createClass(PrintButtonAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(PrintButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(PrintButtonAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _PrintButtonMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(PrintButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(PrintButtonAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _PrintButtonValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(PrintButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(PrintButtonAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _PrintButtonToValues2.default)(options);
        }
    }]);

    return PrintButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = PrintButtonAdapter;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'type',
        label: '颜色',
        help: '按钮的填充颜色',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'align',
        label: '排列方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '从左侧排列',
                value: 'left'
            }, {
                text: '从右侧排列',
                value: 'right'
            }]
        },
        defaultValue: 'left'
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'serverUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''

    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // tplNode.title = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "serverUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "align":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isEqualSet(tplNode,meta.name,value,'right');
            //     break;
            // }
        }
    }
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "serverUrl":{
            //     meta.defaultValue=tplNode.serverUrl!==undefined?tplNode.serverUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!==undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
            // case "align":{
            //     meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _RadioToValues = __webpack_require__(141);

var _RadioToValues2 = _interopRequireDefault(_RadioToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioAdapter = function (_PropAdapter) {
    _inherits(RadioAdapter, _PropAdapter);

    function RadioAdapter() {
        _classCallCheck(this, RadioAdapter);

        return _possibleConstructorReturn(this, (RadioAdapter.__proto__ || Object.getPrototypeOf(RadioAdapter)).apply(this, arguments));
    }

    _createClass(RadioAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(RadioAdapter.prototype.__proto__ || Object.getPrototypeOf(RadioAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _RadioToValues2.default)(options);
        }
    }]);

    return RadioAdapter;
}(_indexDeps.PropAdapter);

exports.default = RadioAdapter;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.radio){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.radio||
    //     (tplNode.uitype == UiTypeDef.formitemw && tplNode.uisubtype==FormItemType.radio)
    // ){

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', tplNode.uikey);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'value', tplNode.uikey);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'label', tplNode.uititle);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', tplNode.uititle);
                    break;
                }
        }
    }
    // }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _RadioGroupMeta = __webpack_require__(24);

var _RadioGroupMeta2 = _interopRequireDefault(_RadioGroupMeta);

var _RadioGroupToValues = __webpack_require__(43);

var _RadioGroupToValues2 = _interopRequireDefault(_RadioGroupToValues);

var _RadioGroupValues = __webpack_require__(63);

var _RadioGroupValues2 = _interopRequireDefault(_RadioGroupValues);

var _RadioGroupPage = __webpack_require__(143);

var _RadioGroupPage2 = _interopRequireDefault(_RadioGroupPage);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroupAdapter = function (_PropAdapter) {
    _inherits(RadioGroupAdapter, _PropAdapter);

    function RadioGroupAdapter() {
        _classCallCheck(this, RadioGroupAdapter);

        return _possibleConstructorReturn(this, (RadioGroupAdapter.__proto__ || Object.getPrototypeOf(RadioGroupAdapter)).apply(this, arguments));
    }

    _createClass(RadioGroupAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(RadioGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(RadioGroupAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _RadioGroupMeta2.default)(options);
            return baseMetas.concat(myMetas);
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _RadioGroupPage2.default)(options);
        }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var baseFormData = _get(RadioGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(RadioGroupAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _RadioGroupValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(RadioGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(RadioGroupAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _RadioGroupToValues2.default)(options);
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

    return RadioGroupAdapter;
}(_indexDeps.PropAdapter);

exports.default = RadioGroupAdapter;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var key = 1 + value + new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.radio,
                    uititle: _Defines.UiTitleDef.radio + value,
                    uikey: key,
                    children: _Defines.UiTitleDef.radio + value,
                    value: key
                });
                return true;
            },
            text: '添加单选项'
        }]
    };
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CheckboxToValues = __webpack_require__(145);

var _CheckboxToValues2 = _interopRequireDefault(_CheckboxToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxAdapter = function (_PropAdapter) {
    _inherits(CheckboxAdapter, _PropAdapter);

    function CheckboxAdapter() {
        _classCallCheck(this, CheckboxAdapter);

        return _possibleConstructorReturn(this, (CheckboxAdapter.__proto__ || Object.getPrototypeOf(CheckboxAdapter)).apply(this, arguments));
    }

    _createClass(CheckboxAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(CheckboxAdapter.prototype.__proto__ || Object.getPrototypeOf(CheckboxAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CheckboxToValues2.default)(options);
        }
    }]);

    return CheckboxAdapter;
}(_indexDeps.PropAdapter);

exports.default = CheckboxAdapter;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.checkbox){
    //     // BasePropToValues(options);//处理公共属性
    // }
    // if(tplNode.uitype == UiTypeDef.checkbox||
    //     tplNode.uitype == UiTypeDef.formitemw
    // ) {

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', tplNode.uikey);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'value', tplNode.uikey);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'label', tplNode.uikey);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', tplNode.uikey);
                    break;
                }
        }
    }
    // }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CheckboxGroupMeta = __webpack_require__(23);

var _CheckboxGroupMeta2 = _interopRequireDefault(_CheckboxGroupMeta);

var _CheckboxGroupToValues = __webpack_require__(44);

var _CheckboxGroupToValues2 = _interopRequireDefault(_CheckboxGroupToValues);

var _CheckboxGroupValues = __webpack_require__(62);

var _CheckboxGroupValues2 = _interopRequireDefault(_CheckboxGroupValues);

var _CheckboxGroupPage = __webpack_require__(147);

var _CheckboxGroupPage2 = _interopRequireDefault(_CheckboxGroupPage);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroupAdapter = function (_PropAdapter) {
    _inherits(CheckboxGroupAdapter, _PropAdapter);

    function CheckboxGroupAdapter() {
        _classCallCheck(this, CheckboxGroupAdapter);

        return _possibleConstructorReturn(this, (CheckboxGroupAdapter.__proto__ || Object.getPrototypeOf(CheckboxGroupAdapter)).apply(this, arguments));
    }

    _createClass(CheckboxGroupAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CheckboxGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(CheckboxGroupAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _CheckboxGroupMeta2.default)(options);
            return baseMetas.concat(myMetas);
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _CheckboxGroupPage2.default)(options);
        }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var baseFormData = _get(CheckboxGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(CheckboxGroupAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _CheckboxGroupValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CheckboxGroupAdapter.prototype.__proto__ || Object.getPrototypeOf(CheckboxGroupAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CheckboxGroupToValues2.default)(options);
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

    return CheckboxGroupAdapter;
}(_indexDeps.PropAdapter);

exports.default = CheckboxGroupAdapter;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = _Defines.UiTitleDef.checkbox + count;
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.checkbox,
                    uititle: title,
                    uikey: key,
                    children: title,
                    value: key,
                    label: title
                });
                return true;
            },
            text: '添加多选项'
        }]
    };
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _NumberMeta = __webpack_require__(22);

var _NumberMeta2 = _interopRequireDefault(_NumberMeta);

var _NumberToValues = __webpack_require__(37);

var _NumberToValues2 = _interopRequireDefault(_NumberToValues);

var _NumberValues = __webpack_require__(61);

var _NumberValues2 = _interopRequireDefault(_NumberValues);

var _FormInputsToNode = __webpack_require__(4);

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

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _DateMeta = __webpack_require__(16);

var _DateMeta2 = _interopRequireDefault(_DateMeta);

var _DateToValues = __webpack_require__(35);

var _DateToValues2 = _interopRequireDefault(_DateToValues);

var _DateValues = __webpack_require__(55);

var _DateValues2 = _interopRequireDefault(_DateValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateAdapter = function (_PropAdapter) {
    _inherits(DateAdapter, _PropAdapter);

    function DateAdapter() {
        _classCallCheck(this, DateAdapter);

        return _possibleConstructorReturn(this, (DateAdapter.__proto__ || Object.getPrototypeOf(DateAdapter)).apply(this, arguments));
    }

    _createClass(DateAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(DateAdapter.prototype.__proto__ || Object.getPrototypeOf(DateAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _DateMeta2.default)(options);
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
            var baseFormData = _get(DateAdapter.prototype.__proto__ || Object.getPrototypeOf(DateAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _DateValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(DateAdapter.prototype.__proto__ || Object.getPrototypeOf(DateAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _DateToValues2.default)(options);
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

    return DateAdapter;
}(_indexDeps.PropAdapter);

exports.default = DateAdapter;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TimeMeta = __webpack_require__(29);

var _TimeMeta2 = _interopRequireDefault(_TimeMeta);

var _TimeToValues = __webpack_require__(49);

var _TimeToValues2 = _interopRequireDefault(_TimeToValues);

var _TimeValues = __webpack_require__(68);

var _TimeValues2 = _interopRequireDefault(_TimeValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeAdapter = function (_PropAdapter) {
    _inherits(TimeAdapter, _PropAdapter);

    function TimeAdapter() {
        _classCallCheck(this, TimeAdapter);

        return _possibleConstructorReturn(this, (TimeAdapter.__proto__ || Object.getPrototypeOf(TimeAdapter)).apply(this, arguments));
    }

    _createClass(TimeAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TimeAdapter.prototype.__proto__ || Object.getPrototypeOf(TimeAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _TimeMeta2.default)(options);
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
            var baseFormData = _get(TimeAdapter.prototype.__proto__ || Object.getPrototypeOf(TimeAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _TimeValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TimeAdapter.prototype.__proto__ || Object.getPrototypeOf(TimeAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TimeToValues2.default)(options);
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

    return TimeAdapter;
}(_indexDeps.PropAdapter);

exports.default = TimeAdapter;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _RangePickerMeta = __webpack_require__(30);

var _RangePickerMeta2 = _interopRequireDefault(_RangePickerMeta);

var _RangePickerToValues = __webpack_require__(36);

var _RangePickerToValues2 = _interopRequireDefault(_RangePickerToValues);

var _RangePickerValues = __webpack_require__(56);

var _RangePickerValues2 = _interopRequireDefault(_RangePickerValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePickerAdapter = function (_PropAdapter) {
    _inherits(RangePickerAdapter, _PropAdapter);

    function RangePickerAdapter() {
        _classCallCheck(this, RangePickerAdapter);

        return _possibleConstructorReturn(this, (RangePickerAdapter.__proto__ || Object.getPrototypeOf(RangePickerAdapter)).apply(this, arguments));
    }

    _createClass(RangePickerAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(RangePickerAdapter.prototype.__proto__ || Object.getPrototypeOf(RangePickerAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _RangePickerMeta2.default)(options);
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
            var baseFormData = _get(RangePickerAdapter.prototype.__proto__ || Object.getPrototypeOf(RangePickerAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _RangePickerValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(RangePickerAdapter.prototype.__proto__ || Object.getPrototypeOf(RangePickerAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _RangePickerToValues2.default)(options);
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

    return RangePickerAdapter;
}(_indexDeps.PropAdapter);

exports.default = RangePickerAdapter;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ImageUploadMeta = __webpack_require__(18);

var _ImageUploadMeta2 = _interopRequireDefault(_ImageUploadMeta);

var _ImageUploadToValues = __webpack_require__(45);

var _ImageUploadToValues2 = _interopRequireDefault(_ImageUploadToValues);

var _ImageUploadValues = __webpack_require__(58);

var _ImageUploadValues2 = _interopRequireDefault(_ImageUploadValues);

var _FormInputsToNode = __webpack_require__(4);

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

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _InputMeta = __webpack_require__(19);

var _InputMeta2 = _interopRequireDefault(_InputMeta);

var _InputToValues = __webpack_require__(33);

var _InputToValues2 = _interopRequireDefault(_InputToValues);

var _InputValues = __webpack_require__(59);

var _InputValues2 = _interopRequireDefault(_InputValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputAdapter = function (_PropAdapter) {
    _inherits(InputAdapter, _PropAdapter);

    function InputAdapter() {
        _classCallCheck(this, InputAdapter);

        return _possibleConstructorReturn(this, (InputAdapter.__proto__ || Object.getPrototypeOf(InputAdapter)).apply(this, arguments));
    }

    _createClass(InputAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(InputAdapter.prototype.__proto__ || Object.getPrototypeOf(InputAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _InputMeta2.default)(options);
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
            var baseFormData = _get(InputAdapter.prototype.__proto__ || Object.getPrototypeOf(InputAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _InputValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(InputAdapter.prototype.__proto__ || Object.getPrototypeOf(InputAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _InputToValues2.default)(options);
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

    return InputAdapter;
}(_indexDeps.PropAdapter);

exports.default = InputAdapter;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMapAdapter = function (_PropAdapter) {
    _inherits(InputMapAdapter, _PropAdapter);

    function InputMapAdapter() {
        _classCallCheck(this, InputMapAdapter);

        return _possibleConstructorReturn(this, (InputMapAdapter.__proto__ || Object.getPrototypeOf(InputMapAdapter)).apply(this, arguments));
    }

    _createClass(InputMapAdapter, [{
        key: 'onCreateData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }
        //当前数据被创建时的适配
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            (0, _FormInputsToNode2.default)(options);
        }
    }]);

    return InputMapAdapter;
}(_indexDeps.PropAdapter);

exports.default = InputMapAdapter;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ButtonReferMeta = __webpack_require__(156);

var _ButtonReferMeta2 = _interopRequireDefault(_ButtonReferMeta);

var _ButtonReferToValues = __webpack_require__(157);

var _ButtonReferToValues2 = _interopRequireDefault(_ButtonReferToValues);

var _ButtonReferValues = __webpack_require__(158);

var _ButtonReferValues2 = _interopRequireDefault(_ButtonReferValues);

var _FormInputsToNode = __webpack_require__(4);

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

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    //基础公共属性
    //PropMeta = PropMeta.concat(options.baseMeta);
    //扩展特有属性
    // if (tplNode.uitype == UiTypeDef.buttonrefer) {
    PropMeta = PropMeta.concat([//参照扩展的配置
    {
        name: 'type',
        label: '颜色',
        type: _indexDeps.MetaType.Select,
        help: '按钮的填充颜色',
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, {
                text: '绿色',
                value: 'success'
            }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'disabled',
        label: '禁用',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'refinfokey',
        label: '参照编码',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: '001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'multiselect',
        label: '参照多选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'searchPlaceholder',
        label: '搜索提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'checkControl',
        label: '父子联动',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'buttonText', value);
                    break;
                }
            case "specialTag":
                {
                    //行操作按钮默认隐藏
                    if (value && value.code == 'lineBtn') {
                        tplNode.visible = false;
                        formData['visible'] = false;
                    } else {
                        delete tplNode.visible;
                    }
                    break;
                }
            // case "icon": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "type": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode, meta.name, value, ['primary', 'success', 'error', 'warning']);
            //     break;
            // }
            // case "visible": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "disabled": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "ghost": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            case "refinfokey":
                {
                    if (value) {
                        // meta.defaultValue = {};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId ? value.refId : value.id;
                        tplNode.refinfokey = value.refCode ? value.refCode : value.code;
                        tplNode.refName = value.refName ? value.refName : value.name;
                        tplNode.refId = value.refId ? value.refId : value.id;
                    } else {
                        // meta.defaultValue = null;
                        delete tplNode.refinfokey;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
            // case "multiselect": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "searchPlaceholder": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "checkControl": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name, value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    //处理公共属性

    var newFormData = {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "disabled": {
            //     meta.defaultValue = tplNode.visible !== undefined ? tplNode.visible : meta.defaultValue;
            //     break;
            // }
            // case "visible": {
            //     meta.defaultValue = tplNode.visible !== undefined ? tplNode.visible : meta.defaultValue;
            //     break;
            // }
            // case "icon": {
            //     meta.defaultValue = tplNode.icon !== undefined ? tplNode.icon : meta.defaultValue;
            //     break;
            // }
            // case "type": {
            //     meta.defaultValue = tplNode.type !== undefined ? tplNode.type : meta.defaultValue;
            //     break;
            // }
            // case "ghost": {
            //     meta.defaultValue = tplNode.ghost !== undefined ? tplNode.ghost : meta.defaultValue;
            //     break;
            // }
            case "refinfokey":
                {
                    // if (tplNode.refinfokey) {
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.code = tplNode.refinfokey;
                    //     meta.defaultValue.name = tplNode.refName;
                    //     meta.defaultValue.id = tplNode.refId;
                    // } else {
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.refinfokey) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.refinfokey;
                        newFormData[meta.name].name = tplNode.refName;
                        newFormData[meta.name].id = tplNode.refId;
                    }
                    break;
                }
            // case "multiselect": {
            //     meta.defaultValue = tplNode.multiselect != undefined ? tplNode.multiselect : meta.defaultValue;
            //     break;
            // }
            // case "searchPlaceholder": {
            //     meta.defaultValue = tplNode.searchPlaceholder != undefined ? tplNode.searchPlaceholder : meta.defaultValue;
            //     break;
            // }
            // case "checkControl": {
            //     meta.defaultValue = tplNode.checkControl != undefined ? tplNode.checkControl : meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _InputReferMeta = __webpack_require__(21);

var _InputReferMeta2 = _interopRequireDefault(_InputReferMeta);

var _InputReferToValues = __webpack_require__(34);

var _InputReferToValues2 = _interopRequireDefault(_InputReferToValues);

var _InputReferValues = __webpack_require__(60);

var _InputReferValues2 = _interopRequireDefault(_InputReferValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputReferAdapter = function (_PropAdapter) {
    _inherits(InputReferAdapter, _PropAdapter);

    function InputReferAdapter() {
        _classCallCheck(this, InputReferAdapter);

        return _possibleConstructorReturn(this, (InputReferAdapter.__proto__ || Object.getPrototypeOf(InputReferAdapter)).apply(this, arguments));
    }

    _createClass(InputReferAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(InputReferAdapter.prototype.__proto__ || Object.getPrototypeOf(InputReferAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _InputReferMeta2.default)(options);
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
            var baseFormData = _get(InputReferAdapter.prototype.__proto__ || Object.getPrototypeOf(InputReferAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _InputReferValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(InputReferAdapter.prototype.__proto__ || Object.getPrototypeOf(InputReferAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _InputReferToValues2.default)(options);
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

    return InputReferAdapter;
}(_indexDeps.PropAdapter);

exports.default = InputReferAdapter;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TextareaMeta = __webpack_require__(27);

var _TextareaMeta2 = _interopRequireDefault(_TextareaMeta);

var _TextareaToValues = __webpack_require__(47);

var _TextareaToValues2 = _interopRequireDefault(_TextareaToValues);

var _TextareaValues = __webpack_require__(66);

var _TextareaValues2 = _interopRequireDefault(_TextareaValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextareaAdapter = function (_PropAdapter) {
    _inherits(TextareaAdapter, _PropAdapter);

    function TextareaAdapter() {
        _classCallCheck(this, TextareaAdapter);

        return _possibleConstructorReturn(this, (TextareaAdapter.__proto__ || Object.getPrototypeOf(TextareaAdapter)).apply(this, arguments));
    }

    _createClass(TextareaAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TextareaAdapter.prototype.__proto__ || Object.getPrototypeOf(TextareaAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _TextareaMeta2.default)(options);
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
            var baseFormData = _get(TextareaAdapter.prototype.__proto__ || Object.getPrototypeOf(TextareaAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _TextareaValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TextareaAdapter.prototype.__proto__ || Object.getPrototypeOf(TextareaAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TextareaToValues2.default)(options);
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

    return TextareaAdapter;
}(_indexDeps.PropAdapter);

exports.default = TextareaAdapter;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TextMeta = __webpack_require__(31);

var _TextMeta2 = _interopRequireDefault(_TextMeta);

var _TextToValues = __webpack_require__(50);

var _TextToValues2 = _interopRequireDefault(_TextToValues);

var _TextValues = __webpack_require__(69);

var _TextValues2 = _interopRequireDefault(_TextValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAdapter = function (_PropAdapter) {
    _inherits(TextAdapter, _PropAdapter);

    function TextAdapter() {
        _classCallCheck(this, TextAdapter);

        return _possibleConstructorReturn(this, (TextAdapter.__proto__ || Object.getPrototypeOf(TextAdapter)).apply(this, arguments));
    }

    _createClass(TextAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TextAdapter.prototype.__proto__ || Object.getPrototypeOf(TextAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _TextMeta2.default)(options);
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
            var baseFormData = _get(TextAdapter.prototype.__proto__ || Object.getPrototypeOf(TextAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _TextValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TextAdapter.prototype.__proto__ || Object.getPrototypeOf(TextAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TextToValues2.default)(options);
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

    return TextAdapter;
}(_indexDeps.PropAdapter);

exports.default = TextAdapter;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _IframeMeta = __webpack_require__(163);

var _IframeMeta2 = _interopRequireDefault(_IframeMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IframeAdapter = function (_PropAdapter) {
    _inherits(IframeAdapter, _PropAdapter);

    function IframeAdapter() {
        _classCallCheck(this, IframeAdapter);

        return _possibleConstructorReturn(this, (IframeAdapter.__proto__ || Object.getPrototypeOf(IframeAdapter)).apply(this, arguments));
    }

    _createClass(IframeAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(IframeAdapter.prototype.__proto__ || Object.getPrototypeOf(IframeAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _IframeMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return IframeAdapter;
}(_indexDeps.PropAdapter);

exports.default = IframeAdapter;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'src',
        label: '链接地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'width',
        label: '宽度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'height',
        label: '高度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'scrolling',
        label: '支持滚动',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '自动', value: 'auto' }, { text: '固定滚动', value: 'yes' }, { text: '不可滚动', value: 'no' }]
        },
        defaultValue: 'auto'
    }, {
        name: 'frameBorder',
        label: '显示边框',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '显示', value: 1 }, { text: '不显示', value: 0 }]
        },
        defaultValue: 1
    }];
    return PropMeta;
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SplitPaneMeta = __webpack_require__(165);

var _SplitPaneMeta2 = _interopRequireDefault(_SplitPaneMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplitPaneAdapter = function (_PropAdapter) {
    _inherits(SplitPaneAdapter, _PropAdapter);

    function SplitPaneAdapter() {
        _classCallCheck(this, SplitPaneAdapter);

        return _possibleConstructorReturn(this, (SplitPaneAdapter.__proto__ || Object.getPrototypeOf(SplitPaneAdapter)).apply(this, arguments));
    }

    _createClass(SplitPaneAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SplitPaneAdapter.prototype.__proto__ || Object.getPrototypeOf(SplitPaneAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _SplitPaneMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return SplitPaneAdapter;
}(_indexDeps.PropAdapter);

exports.default = SplitPaneAdapter;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'minSize',
        label: '最小尺寸',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSelect: false,
            enableSlider: false,
            min: 0,
            max: null
        },
        help: '分割方向是horizontal时尺寸代表高度，vertical时尺寸代表宽度',
        defaultValue: null
    }, {
        name: 'maxSize',
        label: '最大尺寸',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSelect: false,
            enableSlider: false,
            min: 0,
            max: null
        },
        help: '分割方向是horizontal时尺寸代表高度，vertical时尺寸代表宽度',
        defaultValue: null
    }, {
        name: 'step',
        label: '拖动步长',
        type: _indexDeps.MetaType.Number,
        help: '拖动尺寸时的步长距离',
        props: {

            enableSelect: false,
            min: 1,
            max: 1000
        },
        defaultValue: 1
    }, {
        name: 'split',
        label: '布局方向',
        type: _indexDeps.MetaType.Select,
        help: '最多只能挂两个子级，两个子级会按左右或上下两种方式进行排列',
        props: {

            options: [{ text: '左右排列', value: 'vertical' }, { text: '上下排列', value: 'horizontal' }]
        },
        defaultValue: 'vertical'
    }, {
        name: 'defaultSize',
        label: '默认尺寸',
        type: _indexDeps.MetaType.Number,
        props: {

            enableSelect: false,
            enableSlider: false,
            min: 0,
            max: null
        },
        help: '左右分区(horizontal)时尺寸代表高度，上下分区(vertical)时尺寸代表宽度',
        defaultSize: 300
    }];
    return PropMeta;
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _FilterAreaMeta = __webpack_require__(167);

var _FilterAreaMeta2 = _interopRequireDefault(_FilterAreaMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterAreaAdapter = function (_PropAdapter) {
    _inherits(FilterAreaAdapter, _PropAdapter);

    function FilterAreaAdapter() {
        _classCallCheck(this, FilterAreaAdapter);

        return _possibleConstructorReturn(this, (FilterAreaAdapter.__proto__ || Object.getPrototypeOf(FilterAreaAdapter)).apply(this, arguments));
    }

    _createClass(FilterAreaAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(FilterAreaAdapter.prototype.__proto__ || Object.getPrototypeOf(FilterAreaAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _FilterAreaMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return FilterAreaAdapter;
}(_indexDeps.PropAdapter);

exports.default = FilterAreaAdapter;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'filterItems',
        label: '筛选条件',
        type: _indexDeps.MetaType.FilterAreaConfig,
        props: {},
        defaultValue: []
    }, {
        name: 'trigger',
        label: '触发方式',
        type: _indexDeps.MetaType.Select,
        help: '条件内容区域展开/折叠的触发方式',
        props: {

            options: [{ text: '点击(Click)', value: 'click' }, { text: '悬浮(Hover)', value: 'hover' }]
        },
        defaultValue: 'click'
    }, {
        name: 'rowHidden',
        label: '自动隐藏',
        help: '当某行的条件已被选时，将自动隐藏本行筛选条件',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _EChartsMeta = __webpack_require__(169);

var _EChartsMeta2 = _interopRequireDefault(_EChartsMeta);

var _EChartsValues = __webpack_require__(170);

var _EChartsValues2 = _interopRequireDefault(_EChartsValues);

var _EChartsToValues = __webpack_require__(171);

var _EChartsToValues2 = _interopRequireDefault(_EChartsToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EChartsAdapter = function (_PropAdapter) {
    _inherits(EChartsAdapter, _PropAdapter);

    function EChartsAdapter() {
        _classCallCheck(this, EChartsAdapter);

        return _possibleConstructorReturn(this, (EChartsAdapter.__proto__ || Object.getPrototypeOf(EChartsAdapter)).apply(this, arguments));
    }

    _createClass(EChartsAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(EChartsAdapter.prototype.__proto__ || Object.getPrototypeOf(EChartsAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _EChartsMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(EChartsAdapter.prototype.__proto__ || Object.getPrototypeOf(EChartsAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _EChartsValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(EChartsAdapter.prototype.__proto__ || Object.getPrototypeOf(EChartsAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _EChartsToValues2.default)(options);
        }
    }]);

    return EChartsAdapter;
}(_indexDeps.PropAdapter);

exports.default = EChartsAdapter;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'title.text',
        label: '主标题文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'xAxis.type',
        label: 'x坐标轴类型',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ value: 'value', text: '数据轴' }, { value: 'category', text: '类目轴' }, { value: 'time', text: '时间轴' }, { value: 'log', text: '对数轴' }]
        },
        defaultValue: 'category'
    }, {
        name: 'yAxis.type',
        label: 'y坐标轴类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'value', text: '数据轴' }, { value: 'category', text: '类目轴' }, { value: 'time', text: '时间轴' }, { value: 'log', text: '对数轴' }]
        },
        defaultValue: 'value'
    }, {
        name: 'series.type',
        label: '图标类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'line', text: '折线图' }, { value: 'bar', text: '柱状图' }, { value: 'pie', text: '饼状图' }]
        },
        defaultValue: 'line'
    }, {
        name: 'xAxis.data',
        label: 'x轴数据',
        type: _indexDeps.MetaType.EChartData,
        props: {

            title: 'x轴数据编辑'
        },
        defaultValue: []
    }, {
        name: 'yAxis.data',
        label: 'y轴数据',
        type: _indexDeps.MetaType.EChartData,
        props: {

            title: 'y轴数据编辑'
        },
        defaultValue: []
    }, {
        name: 'series',
        label: '本地数据',
        type: _indexDeps.MetaType.EChartData,
        props: {

            title: '本地数据'
        },
        defaultValue: []
    }, {
        name: 'options',
        label: '复杂配置',
        type: _indexDeps.MetaType.EChartData,
        props: {

            title: '原始数据体'
        },
        defaultValue: {}
    }, {
        name: 'remoteUrl',
        label: '服务数据地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    return PropMeta;
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.options = tplNode.options || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "title.text":
                {
                    // meta.defaultValue = (tplNode.options.title && tplNode.options.title.text != undefined) ? tplNode.options.title.text : meta.defaultValue;
                    if (tplNode.options.title && tplNode.options.title.text !== undefined) {
                        newFormData[meta.name] = tplNode.options.title.text;
                    }
                    break;
                }
            case "xAxis.type":
                {
                    // meta.defaultValue = (tplNode.options.xAxis && tplNode.options.xAxis.type != undefined) ? tplNode.options.xAxis.type : meta.defaultValue;
                    if (tplNode.options.xAxis && tplNode.options.xAxis.type !== undefined) {
                        newFormData[meta.name] = tplNode.options.xAxis.type;
                    }
                    break;
                }
            case "xAxis.data":
                {
                    // meta.defaultValue = (tplNode.options.xAxis && tplNode.options.xAxis.data != undefined) ? tplNode.options.xAxis.data : meta.defaultValue;
                    if (tplNode.options.xAxis && tplNode.options.xAxis.data !== undefined) {
                        newFormData[meta.name] = tplNode.options.xAxis.data;
                    }
                    break;
                }
            case "yAxis.type":
                {
                    // meta.defaultValue = (tplNode.options.yAxis && tplNode.options.yAxis.type != undefined) ? tplNode.options.yAxis.type : meta.defaultValue;
                    if (tplNode.options.yAxis && tplNode.options.yAxis.type !== undefined) {
                        newFormData[meta.name] = tplNode.options.yAxis.type;
                    }
                    break;
                }
            case "yAxis.data":
                {
                    // meta.defaultValue = (tplNode.options.yAxis && tplNode.options.yAxis.data != undefined) ? tplNode.options.yAxis.data : meta.defaultValue;
                    if (tplNode.options.yAxis && tplNode.options.yAxis.data !== undefined) {
                        newFormData[meta.name] = tplNode.options.yAxis.data;
                    }
                    break;
                }
            case "series":
                {
                    // meta.defaultValue = (tplNode.options.series && tplNode.options.series != undefined) ? tplNode.options.series : meta.defaultValue;
                    if (tplNode.options.series && tplNode.options.series !== undefined) {
                        newFormData[meta.name] = tplNode.options.series;
                    }
                    break;
                }
            case "series.type":
                {
                    // meta.defaultValue = (tplNode.options.series && tplNode.options.series[0] && tplNode.options.series[0].type != undefined) ? tplNode.options.series[0].type : meta.defaultValue;
                    if (tplNode.options.series && tplNode.options.series[0] && tplNode.options.series[0].type !== undefined) {
                        newFormData[meta.name] = tplNode.options.series[0].type;
                    }
                    break;
                }
            case "options":
                {
                    // meta.defaultValue = tplNode.options != undefined ? tplNode.options : meta.defaultValue;
                    if (tplNode.options !== undefined) {
                        newFormData[meta.name] = tplNode.options;
                    }
                    break;
                }
            case "remoteUrl":
                {
                    // meta.defaultValue = tplNode.remoteUrl != undefined ? tplNode.remoteUrl : meta.defaultValue;
                    if (tplNode.remoteUrl !== undefined) {
                        newFormData[meta.name] = tplNode.remoteUrl;
                    }
                    break;
                }
        }
    }
    if (!Object.keys(tplNode.options).length) {
        delete tplNode.options;
    }
    return newFormData;
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "title.text":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.title === undefined) tplNode.options.title = {};
                    tplNode.options.title.text = value;
                    break;
                }
            case "xAxis.type":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.xAxis === undefined) tplNode.options.xAxis = {};
                    tplNode.options.xAxis.type = value;
                    break;
                }
            case "xAxis.data":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.xAxis === undefined) tplNode.options.xAxis = {};
                    tplNode.options.xAxis.data = value;
                    break;
                }
            case "yAxis.type":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.yAxis === undefined) tplNode.options.yAxis = {};
                    tplNode.options.yAxis.type = value;
                    break;
                }
            case "yAxis.data":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.yAxis === undefined) tplNode.options.yAxis = {};
                    tplNode.options.yAxis.data = value;
                    break;
                }
            case "series":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.series === undefined) tplNode.options.series = [];
                    tplNode.options.series = value;
                    break;
                }
            case "series.type":
                {
                    // meta.defaultValue = value;
                    if (tplNode.options.series === undefined) {
                        tplNode.options.series = [];
                    }
                    if (tplNode.options.series.length === 0) {
                        tplNode.options.series.push({ type: value });
                    } else {
                        tplNode.options.series[0].type = value;
                    }
                    break;
                }
            case "options":
                {
                    // meta.defaultValue = value;
                    tplNode.options = value;
                    break;
                }
            case "remoteUrl":
                {
                    // meta.defaultValue = value;
                    tplNode.remoteUrl = value;
                    break;
                }
        }
    }
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPCardTitleToValues = __webpack_require__(173);

var _CPCardTitleToValues2 = _interopRequireDefault(_CPCardTitleToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPCardTitleAdapter = function (_PropAdapter) {
    _inherits(CPCardTitleAdapter, _PropAdapter);

    function CPCardTitleAdapter() {
        _classCallCheck(this, CPCardTitleAdapter);

        return _possibleConstructorReturn(this, (CPCardTitleAdapter.__proto__ || Object.getPrototypeOf(CPCardTitleAdapter)).apply(this, arguments));
    }

    _createClass(CPCardTitleAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(CPCardTitleAdapter.prototype.__proto__ || Object.getPrototypeOf(CPCardTitleAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPCardTitleToValues2.default)(options);
        }
    }]);

    return CPCardTitleAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPCardTitleAdapter;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    tplNode.title = value;
                    break;
                }
        }
    }
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _BpmApprovewMeta = __webpack_require__(175);

var _BpmApprovewMeta2 = _interopRequireDefault(_BpmApprovewMeta);

var _BpmApprovewToValues = __webpack_require__(176);

var _BpmApprovewToValues2 = _interopRequireDefault(_BpmApprovewToValues);

var _BpmApprovewValues = __webpack_require__(177);

var _BpmApprovewValues2 = _interopRequireDefault(_BpmApprovewValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BpmApprovewAdapterAdapter = function (_PropAdapter) {
    _inherits(BpmApprovewAdapterAdapter, _PropAdapter);

    function BpmApprovewAdapterAdapter() {
        _classCallCheck(this, BpmApprovewAdapterAdapter);

        return _possibleConstructorReturn(this, (BpmApprovewAdapterAdapter.__proto__ || Object.getPrototypeOf(BpmApprovewAdapterAdapter)).apply(this, arguments));
    }

    _createClass(BpmApprovewAdapterAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(BpmApprovewAdapterAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmApprovewAdapterAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _BpmApprovewMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(BpmApprovewAdapterAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmApprovewAdapterAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _BpmApprovewValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(BpmApprovewAdapterAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmApprovewAdapterAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _BpmApprovewToValues2.default)(options);
        }
    }]);

    return BpmApprovewAdapterAdapter;
}(_indexDeps.PropAdapter);

exports.default = BpmApprovewAdapterAdapter;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {

    var PropMeta = [{
        name: 'billTypeId',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'type',
        label: '颜色',
        help: '按钮的填充颜色',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'formurl',
        label: '链接地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'serUrl',
        label: '审批服务',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'refUrl',
        label: '参照服务',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];

    return PropMeta;
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "billTypeId":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billId = value.id;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billTypeId = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billTypeId;
                        delete tplNode.billName;
                        delete tplNode.billId;
                    }
                    break;
                }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "formurl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "serUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "refUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue=tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "billTypeId":
                {
                    // if(tplNode.billName&&tplNode.billTypeId){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billTypeId;
                    //     meta.defaultValue.name = tplNode.billName;
                    //     meta.defaultValue.id = tplNode.billId;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode[meta.name]) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.billId;
                        newFormData[meta.name].code = tplNode.billTypeId;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "formurl":{
            //     meta.defaultValue=tplNode.formurl!==undefined?tplNode.formurl:meta.defaultValue;
            //     break;
            // }
            // case "serUrl":{
            //     meta.defaultValue=tplNode.serUrl!==undefined?tplNode.serUrl:meta.defaultValue;
            //     break;
            // }
            // case "refUrl":{
            //     meta.defaultValue=tplNode.refUrl!=undefined?tplNode.refUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!=undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!=undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _BpmSubmitwMeta = __webpack_require__(179);

var _BpmSubmitwMeta2 = _interopRequireDefault(_BpmSubmitwMeta);

var _BpmSubmitwToValues = __webpack_require__(180);

var _BpmSubmitwToValues2 = _interopRequireDefault(_BpmSubmitwToValues);

var _BpmSubmitwValues = __webpack_require__(181);

var _BpmSubmitwValues2 = _interopRequireDefault(_BpmSubmitwValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BpmSubmitwAdapter = function (_PropAdapter) {
    _inherits(BpmSubmitwAdapter, _PropAdapter);

    function BpmSubmitwAdapter() {
        _classCallCheck(this, BpmSubmitwAdapter);

        return _possibleConstructorReturn(this, (BpmSubmitwAdapter.__proto__ || Object.getPrototypeOf(BpmSubmitwAdapter)).apply(this, arguments));
    }

    _createClass(BpmSubmitwAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(BpmSubmitwAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmSubmitwAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _BpmSubmitwMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(BpmSubmitwAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmSubmitwAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _BpmSubmitwValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(BpmSubmitwAdapter.prototype.__proto__ || Object.getPrototypeOf(BpmSubmitwAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _BpmSubmitwToValues2.default)(options);
        }
    }]);

    return BpmSubmitwAdapter;
}(_indexDeps.PropAdapter);

exports.default = BpmSubmitwAdapter;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'billTypeId',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'type',
        label: '颜色',
        help: '按钮的填充颜色',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'serUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    return PropMeta;
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "billTypeId":
                {
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billRefId = value.refId ? value.refId : value.id;
                        tplNode.billTypeId = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billRefId;
                        delete tplNode.billTypeId;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "serUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableUser":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableOrg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "type":{
            //     meta.defaultValue=tplNode.type!==undefined?tplNode.type:meta.defaultValue;
            //     break;
            // }
            // case "ghost":{
            //     meta.defaultValue=tplNode.ghost!==undefined?tplNode.ghost:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue=tplNode.visible!==undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "billTypeId":
                {
                    // if(tplNode.billName&&tplNode.billTypeId){
                    //     meta.defaultValue={};
                    //     // billtypeid和billtypeCode
                    //     meta.defaultValue.id = tplNode.billRefId;
                    //     meta.defaultValue.code = tplNode.billTypeId;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }

                    if (tplNode[meta.name]) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.billRefId;
                        newFormData[meta.name].code = tplNode.billTypeId;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "serUrl":{
            //     meta.defaultValue=tplNode.serUrl!==undefined?tplNode.serUrl:meta.defaultValue;
            //     break;
            // }
            // case "enableUser":{
            //     meta.defaultValue=tplNode.enableUser!==undefined?tplNode.enableUser:meta.defaultValue;
            //     break;
            // }
            // case "enableOrg":{
            //     meta.defaultValue=tplNode.enableOrg!==undefined?tplNode.enableOrg:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPIconButtonMeta = __webpack_require__(183);

var _CPIconButtonMeta2 = _interopRequireDefault(_CPIconButtonMeta);

var _CPIconButtonToValues = __webpack_require__(184);

var _CPIconButtonToValues2 = _interopRequireDefault(_CPIconButtonToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPIconButtonAdapter = function (_PropAdapter) {
    _inherits(CPIconButtonAdapter, _PropAdapter);

    function CPIconButtonAdapter() {
        _classCallCheck(this, CPIconButtonAdapter);

        return _possibleConstructorReturn(this, (CPIconButtonAdapter.__proto__ || Object.getPrototypeOf(CPIconButtonAdapter)).apply(this, arguments));
    }

    _createClass(CPIconButtonAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPIconButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(CPIconButtonAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPIconButtonMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CPIconButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(CPIconButtonAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPIconButtonToValues2.default)(options);
        }
    }]);

    return CPIconButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPIconButtonAdapter;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: null
    }, {
        name: 'color',
        label: '颜色',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '黑色',
                value: 'black'
            }, {
                text: '蓝色',
                value: 'blue'
            }, {
                text: '红色',
                value: 'red'
            }]
        },
        defaultValue: 'black'
    }, {
        name: 'visible',
        label: '是否显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'align',
        label: '排列方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '从左侧排列',
                value: 'left'
            }, {
                text: '从右侧排列',
                value: 'right'
            }]
        },
        defaultValue: 'left'
    }];
    return PropMeta;
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'text', value);
                    break;
                }
            // case "icon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "color":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "align":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isEqualSet(tplNode,meta.name,value,'right');
            //     break;
            // }
        }
    }
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPDropdownButtonPage = __webpack_require__(186);

var _CPDropdownButtonPage2 = _interopRequireDefault(_CPDropdownButtonPage);

var _CPDropdownButtonToValues = __webpack_require__(187);

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

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.CPDropdownItem,
                    uititle: _Defines.UiTitleDef.CPDropdownItem + value
                });
                return true;
            },
            text: '添加下拉按钮'
        }]
    };
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    tplNode.text = value;
                    break;
                }
        }
    }
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPGoBackMeta = __webpack_require__(189);

var _CPGoBackMeta2 = _interopRequireDefault(_CPGoBackMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPGoBackAdapter = function (_PropAdapter) {
    _inherits(CPGoBackAdapter, _PropAdapter);

    function CPGoBackAdapter() {
        _classCallCheck(this, CPGoBackAdapter);

        return _possibleConstructorReturn(this, (CPGoBackAdapter.__proto__ || Object.getPrototypeOf(CPGoBackAdapter)).apply(this, arguments));
    }

    _createClass(CPGoBackAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPGoBackAdapter.prototype.__proto__ || Object.getPrototypeOf(CPGoBackAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPGoBackMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return CPGoBackAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPGoBackAdapter;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'backSelect',
        label: '返回方式',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{
                text: '返回列表',
                value: 'list'
            }, {
                text: '上一次页面',
                value: 'prev'
            }]
        },
        defaultValue: 'list'
    }];
    return PropMeta;
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPAuditInfoMeta = __webpack_require__(191);

var _CPAuditInfoMeta2 = _interopRequireDefault(_CPAuditInfoMeta);

var _CPAuditInfoToValues = __webpack_require__(192);

var _CPAuditInfoToValues2 = _interopRequireDefault(_CPAuditInfoToValues);

var _CPAuditInfoValues = __webpack_require__(193);

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

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'primaryKey',
        label: '主键字段',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: 'id'
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'bpm',
        label: '走审批流',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];

    return PropMeta;
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "primaryKey":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "billType":
                {
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            // case "bpm":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "primaryKey":{
            //     meta.defaultValue=tplNode.primaryKey!==undefined?tplNode.primaryKey:meta.defaultValue;
            //     break;
            // }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     //meta.defaultValue.id =
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            // case "bpm":{
            //     meta.defaultValue=tplNode.bpm!==undefined?tplNode.bpm:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPPluginMgrMeta = __webpack_require__(195);

var _CPPluginMgrMeta2 = _interopRequireDefault(_CPPluginMgrMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPPluginMgrAdapter = function (_PropAdapter) {
    _inherits(CPPluginMgrAdapter, _PropAdapter);

    function CPPluginMgrAdapter() {
        _classCallCheck(this, CPPluginMgrAdapter);

        return _possibleConstructorReturn(this, (CPPluginMgrAdapter.__proto__ || Object.getPrototypeOf(CPPluginMgrAdapter)).apply(this, arguments));
    }

    _createClass(CPPluginMgrAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPPluginMgrAdapter.prototype.__proto__ || Object.getPrototypeOf(CPPluginMgrAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPPluginMgrMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return CPPluginMgrAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPPluginMgrAdapter;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'attachMgr',
        label: '附件管理',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'viewApprove',
        label: '查看审批流',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'exportExcel',
        label: '导出Excel',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'sourceType',
        label: '业务类型',
        help: '单据下的细分业务类型标识',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    return PropMeta;
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPFilterBarMeta = __webpack_require__(197);

var _CPFilterBarMeta2 = _interopRequireDefault(_CPFilterBarMeta);

var _CPFilterBarPage = __webpack_require__(198);

var _CPFilterBarPage2 = _interopRequireDefault(_CPFilterBarPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPFilterBarAdapter = function (_PropAdapter) {
    _inherits(CPFilterBarAdapter, _PropAdapter);

    function CPFilterBarAdapter() {
        _classCallCheck(this, CPFilterBarAdapter);

        return _possibleConstructorReturn(this, (CPFilterBarAdapter.__proto__ || Object.getPrototypeOf(CPFilterBarAdapter)).apply(this, arguments));
    }

    _createClass(CPFilterBarAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPFilterBarAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFilterBarAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPFilterBarMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _CPFilterBarPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return CPFilterBarAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPFilterBarAdapter;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'linkTable',
        label: '关联表格',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    return PropMeta;
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = _Defines.UiTitleDef.CPFilterRow + value;
                var key = new Date().getTime() + '_1';
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.CPFilterRow,
                    uikey: key,
                    uititle: title,
                    title: title,
                    rowKey: key
                });
                return true;
            },
            text: '添加条件'
        }]
    };
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPFilterRowMeta = __webpack_require__(200);

var _CPFilterRowMeta2 = _interopRequireDefault(_CPFilterRowMeta);

var _CPFilterRowToValues = __webpack_require__(201);

var _CPFilterRowToValues2 = _interopRequireDefault(_CPFilterRowToValues);

var _CPFilterRowValues = __webpack_require__(202);

var _CPFilterRowValues2 = _interopRequireDefault(_CPFilterRowValues);

var _CPFilterRowPage = __webpack_require__(203);

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

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'title',
        label: '条件标题',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'rowKey',
        label: '条件行键值',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'multiple',
        label: '多选模式',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'referObj',
        label: '档案编码',
        props: {
            refinfokey: 'bd-009',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        type: _indexDeps.MetaType.Refer,
        defaultValue: ''
    }, {
        name: 'serverUrl',
        label: '服务地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'enableOrg',
        label: '当前组织',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case 'title': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'rowKey': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'multiple': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            case "referObj":
                {
                    delete tplNode[meta.name];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
                        // meta.defaultValue = {};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId ? value.refId : value.id;
                        tplNode.code = value.refCode ? value.refCode : value.code;
                        tplNode.refName = value.refName ? value.refName : value.name;
                        tplNode.refId = value.refId ? value.refId : value.id;
                    } else {
                        delete tplNode.code;
                        delete tplNode.refName;
                        delete tplNode.refId;
                    }
                    break;
                }
            // case "serverUrl": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "enableOrg": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name, value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case 'title': {
            //     meta.defaultValue = tplNode.title !== undefined ? tplNode.title : meta.defaultValue;
            //     break;
            // }
            // case 'rowKey': {
            //     meta.defaultValue = tplNode.rowKey !== undefined ? tplNode.rowKey : meta.defaultValue;
            //     break;
            // }
            // case 'multiple': {
            //     meta.defaultValue = tplNode.multiple !== undefined ? tplNode.multiple : meta.defaultValue;
            //     break;
            // }
            case "referObj":
                {
                    // meta.defaultValue = {};
                    // meta.defaultValue.code = tplNode.code;
                    // meta.defaultValue.name = tplNode.refName;
                    // meta.defaultValue.id = tplNode.refId;
                    if (tplNode.code && tplNode.refName) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.code;
                        newFormData[meta.name].name = tplNode.refName;
                        newFormData[meta.name].id = tplNode.refId;
                    }
                    break;
                }
            // case "serverUrl": {
            //     meta.defaultValue = tplNode.serverUrl != undefined ? tplNode.serverUrl : meta.defaultValue;
            //     break;
            // }
            // case "enableOrg": {
            //     meta.defaultValue = tplNode.enableOrg != undefined ? tplNode.enableOrg : meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = _Defines.UiTitleDef.CPFRField + value;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.CPFRField,
                    uikey: new Date().getTime(),
                    uititle: title,
                    title: title,
                    type: 'input',
                    compare: 'eq'
                });
                return true;
            },
            text: '添加元素'
        }]
    };
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CPFRFieldMeta = __webpack_require__(205);

var _CPFRFieldMeta2 = _interopRequireDefault(_CPFRFieldMeta);

var _CPFRFieldToValues = __webpack_require__(206);

var _CPFRFieldToValues2 = _interopRequireDefault(_CPFRFieldToValues);

var _CPFRFieldValues = __webpack_require__(207);

var _CPFRFieldValues2 = _interopRequireDefault(_CPFRFieldValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CPFRFieldAdapter = function (_PropAdapter) {
    _inherits(CPFRFieldAdapter, _PropAdapter);

    function CPFRFieldAdapter() {
        _classCallCheck(this, CPFRFieldAdapter);

        return _possibleConstructorReturn(this, (CPFRFieldAdapter.__proto__ || Object.getPrototypeOf(CPFRFieldAdapter)).apply(this, arguments));
    }

    _createClass(CPFRFieldAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(CPFRFieldAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFRFieldAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _CPFRFieldMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(CPFRFieldAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFRFieldAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _CPFRFieldValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(CPFRFieldAdapter.prototype.__proto__ || Object.getPrototypeOf(CPFRFieldAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CPFRFieldToValues2.default)(options);
        }
    }]);

    return CPFRFieldAdapter;
}(_indexDeps.PropAdapter);

exports.default = CPFRFieldAdapter;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'type',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'input', text: '标签' }, { value: 'number', text: '范围' }, { value: 'date', text: '日期' }, { value: 'range', text: '日期范围' }]
        },
        defaultValue: { value: 'text', text: '标签' }
    }, {
        name: 'compare',
        label: '运算符',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'eq', text: '等于' }, { value: 'ne', text: '不等于' }, { value: 'lt', text: '小于' }, { value: 'le', text: '小于等于' }, { value: 'gt', text: '大于' }, { value: 'ge', text: '大于等于' }, { value: 'bw', text: '开始于' }, { value: 'in', text: '属于' }, { value: 'ni', text: '不属于' }, { value: 'cn', text: '包含' }, { value: 'bt', text: '介于' }]
        },
        defaultValue: { value: 'eq', text: '等于' }
    }, {
        name: 'text',
        label: '元素名称',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'value',
        label: '元素值',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'disabled',
        label: '禁用',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'preFunction',
        label: '预置函数',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'defdoc-query-treegrid',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }];
    return PropMeta;
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case 'type':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'compare':{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'text': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'value': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case 'disabled': {
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            case 'preFunction':
                {
                    delete tplNode[meta.name];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        // meta.defaultValue = {};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.name;
                        // meta.defaultValue.code = value.code;
                        tplNode.funcId = value.id;
                        tplNode.funcCode = value.code;
                        tplNode.funcName = value.name;
                    } else {
                        delete tplNode.funcId;
                        delete tplNode.funcCode;
                        delete tplNode.funcName;
                    }
                    break;
                }
        }
    }
};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {};
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case 'type': {
            //     meta.defaultValue = tplNode.type !== undefined ? tplNode.type : meta.defaultValue;
            //     break;
            // }
            // case 'compare': {
            //     meta.defaultValue = tplNode.compare !== undefined ? tplNode.compare : meta.defaultValue;
            //     break;
            // }
            // case 'text': {
            //     meta.defaultValue = tplNode.text !== undefined ? tplNode.text : meta.defaultValue;
            //     break;
            // }
            // case 'value': {
            //     meta.defaultValue = tplNode.value !== undefined ? tplNode.value : meta.defaultValue;
            //     break;
            // }
            // case 'disabled': {
            //     meta.defaultValue = tplNode.disabled !== undefined ? tplNode.disabled : meta.defaultValue;
            //     break;
            // }
            case 'preFunction':
                {
                    // if (tplNode.funcId && tplNode.funcCode && tplNode.funcName) {
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.id = tplNode.funcId;
                    //     meta.defaultValue.code = tplNode.funcCode;
                    //     meta.defaultValue.name = tplNode.funcName;
                    // } else {
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.funcId && tplNode.funcCode && tplNode.funcName) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.funcId;
                        newFormData[meta.name].code = tplNode.funcCode;
                        newFormData[meta.name].name = tplNode.funcName;
                    }
                    break;
                }
        }
    }
    return newFormData;
};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _BreadcrumbMeta = __webpack_require__(209);

var _BreadcrumbMeta2 = _interopRequireDefault(_BreadcrumbMeta);

var _BreadcrumbPage = __webpack_require__(210);

var _BreadcrumbPage2 = _interopRequireDefault(_BreadcrumbPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbAdapter = function (_PropAdapter) {
    _inherits(BreadcrumbAdapter, _PropAdapter);

    function BreadcrumbAdapter() {
        _classCallCheck(this, BreadcrumbAdapter);

        return _possibleConstructorReturn(this, (BreadcrumbAdapter.__proto__ || Object.getPrototypeOf(BreadcrumbAdapter)).apply(this, arguments));
    }

    _createClass(BreadcrumbAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(BreadcrumbAdapter.prototype.__proto__ || Object.getPrototypeOf(BreadcrumbAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _BreadcrumbMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _BreadcrumbPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return BreadcrumbAdapter;
}(_indexDeps.PropAdapter);

exports.default = BreadcrumbAdapter;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
	var PropMeta = [{
		name: 'separator',
		label: '分隔符',
		type: _indexDeps.MetaType.Text,
		props: {},
		defaultValue: ''
	}];
	return PropMeta;
};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.breadcrumbitem,
                    uititle: UiTitleDef.breadcrumbitem + value,
                    key: key,
                    uikey: key,
                    children: UiTitleDef.breadcrumbitem + value
                });
                return true;
            },
            text: '添加子面包屑'
        }]
    };
};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _BreadcrumbItemMeta = __webpack_require__(212);

var _BreadcrumbItemMeta2 = _interopRequireDefault(_BreadcrumbItemMeta);

var _BreadcrumbItemToValues = __webpack_require__(213);

var _BreadcrumbItemToValues2 = _interopRequireDefault(_BreadcrumbItemToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbItemAdapter = function (_PropAdapter) {
    _inherits(BreadcrumbItemAdapter, _PropAdapter);

    function BreadcrumbItemAdapter() {
        _classCallCheck(this, BreadcrumbItemAdapter);

        return _possibleConstructorReturn(this, (BreadcrumbItemAdapter.__proto__ || Object.getPrototypeOf(BreadcrumbItemAdapter)).apply(this, arguments));
    }

    _createClass(BreadcrumbItemAdapter, [{
        key: 'onPageMetas',

        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(BreadcrumbItemAdapter.prototype.__proto__ || Object.getPrototypeOf(BreadcrumbItemAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _BreadcrumbItemMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(BreadcrumbItemAdapter.prototype.__proto__ || Object.getPrototypeOf(BreadcrumbItemAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _BreadcrumbItemToValues2.default)(options);
        }
    }]);

    return BreadcrumbItemAdapter;
}(_indexDeps.PropAdapter);

exports.default = BreadcrumbItemAdapter;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
	var PropMeta = [{
		name: 'href',
		label: '链接',
		type: _indexDeps.MetaType.Text,
		props: {},
		defaultValue: ''
	}, {
		name: 'visible',
		label: '显示',
		type: _indexDeps.MetaType.Bool,
		props: {},
		defaultValue: true
	}];

	return PropMeta;
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', value);
                    break;
                }
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            // case "href":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ButtonMeta = __webpack_require__(215);

var _ButtonMeta2 = _interopRequireDefault(_ButtonMeta);

var _ButtonToValues = __webpack_require__(216);

var _ButtonToValues2 = _interopRequireDefault(_ButtonToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonAdapter = function (_PropAdapter) {
    _inherits(ButtonAdapter, _PropAdapter);

    function ButtonAdapter() {
        _classCallCheck(this, ButtonAdapter);

        return _possibleConstructorReturn(this, (ButtonAdapter.__proto__ || Object.getPrototypeOf(ButtonAdapter)).apply(this, arguments));
    }

    _createClass(ButtonAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ButtonMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(ButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _ButtonToValues2.default)(options);
        }
        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            tplNode.children = tplNode.uititle;
        }
    }]);

    return ButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = ButtonAdapter;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'type',
        label: '颜色',
        type: _indexDeps.MetaType.Select,
        help: '按钮的填充颜色',
        props: {
            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'size',
        label: '大小',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '默认', value: '' }, { text: '较小', value: 'small' }, { text: '较大', value: 'large' }]
        },
        defaultValue: ''
    }, {
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'visible',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'disabled',
        label: '禁用',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', value);
                    break;
                }
            case "specialTag":
                {
                    //行操作按钮默认隐藏
                    if (value && value.code == 'lineBtn') {
                        tplNode.visible = false;
                        formData['visible'] = false;
                    } else {
                        delete tplNode.visible;
                    }
                    break;
                }
            // case "icon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "size":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['small','large']);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _PageMeta = __webpack_require__(218);

var _PageMeta2 = _interopRequireDefault(_PageMeta);

var _PageToValues = __webpack_require__(219);

var _PageToValues2 = _interopRequireDefault(_PageToValues);

var _PageValues = __webpack_require__(220);

var _PageValues2 = _interopRequireDefault(_PageValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageAdapter = function (_PropAdapter) {
    _inherits(PageAdapter, _PropAdapter);

    function PageAdapter() {
        _classCallCheck(this, PageAdapter);

        return _possibleConstructorReturn(this, (PageAdapter.__proto__ || Object.getPrototypeOf(PageAdapter)).apply(this, arguments));
    }

    _createClass(PageAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(PageAdapter.prototype.__proto__ || Object.getPrototypeOf(PageAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _PageMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(PageAdapter.prototype.__proto__ || Object.getPrototypeOf(PageAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _PageValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(PageAdapter.prototype.__proto__ || Object.getPrototypeOf(PageAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _PageToValues2.default)(options);
        }
    }]);

    return PageAdapter;
}(_indexDeps.PropAdapter);

exports.default = PageAdapter;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _require = __webpack_require__(1),
    UiTypeDef = _require.UiTypeDef;

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    if (!Object({"NODE_ENV":"production"}).YYLIB_ENV) {
        //开发态
        PropMeta.push({
            name: 'logicFormula',
            label: '逻辑公式',
            type: _indexDeps.MetaType.LogicFormula,
            props: {},
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                //依据系统名称筛选实体
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }]);
    if (tplNode.uitype === UiTypeDef.CPListPage) {
        PropMeta.push({
            name: 'billType',
            label: '单据类型',
            type: _indexDeps.MetaType.Refer,
            props: {

                refinfokey: 'bill_001',
                serverUrl: _indexDeps.SUPPORT_SERVER
            },
            defaultValue: null
        });
    }
    return PropMeta;
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "system":
                {
                    //关联系统
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "billType":
                {
                    //单据类型
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.id = value.id;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        tplNode.billName = value.refName ? value.refName : value.name;
                        tplNode.billType = value.refCode ? value.refCode : value.code;
                    } else {
                        delete tplNode.billType;
                        delete tplNode.billName;
                    }
                    break;
                }
            case "logicFormula":
                {
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.logicFormula = value.code;
                        // meta.defaultValue.logicFormulaXml = value.xml;
                        tplNode.logicFormula = value.code;
                        tplNode.logicFormulaXml = value.xml;
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.logicFormula;
                        delete tplNode.logicFormulaXml;
                    }
                    break;
                }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "system":
                {
                    //关联系统
                    // if(tplNode.dataprops&&tplNode.dataprops.system){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id=tplNode.dataprops.system.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops[meta.name] !== undefined) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.dataprops[meta.name].id;
                        newFormData[meta.name].code = tplNode.dataprops[meta.name].systemName;
                        newFormData[meta.name].name = tplNode.dataprops[meta.name].systemCnName;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops[meta.name] !== undefined) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode.dataprops[meta.name].id;
                        newFormData[meta.name].code = tplNode.dataprops[meta.name].entityFullName;
                        newFormData[meta.name].name = tplNode.dataprops[meta.name].entityCnName;
                    }
                    break;
                }
            case "billType":
                {
                    // if(tplNode.billName&&tplNode.billType){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.code = tplNode.billType;
                    //     meta.defaultValue.name = tplNode.billName;
                    // }else{
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.billName && tplNode.billType) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.billType;
                        newFormData[meta.name].name = tplNode.billName;
                    }
                    break;
                }
            case "logicFormula":
                {
                    // if(tplNode.logicFormula && tplNode.logicFormulaXml) {
                    //     meta.defaultValue={
                    //         logicFormula : tplNode.logicFormula,
                    //         logicFormulaXml : tplNode.logicFormulaXml
                    //     }
                    // } else {
                    //     meta.defaultValue = null;
                    // }
                    if (tplNode.logicFormula && tplNode.logicFormulaXml) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].code = tplNode.logicFormula;
                        newFormData[meta.name].xml = tplNode.logicFormulaXml;
                    }
                    break;
                }
        }
    }
    return newFormData;
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _CaptionToValues = __webpack_require__(222);

var _CaptionToValues2 = _interopRequireDefault(_CaptionToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaptionAdapter = function (_PropAdapter) {
    _inherits(CaptionAdapter, _PropAdapter);

    function CaptionAdapter() {
        _classCallCheck(this, CaptionAdapter);

        return _possibleConstructorReturn(this, (CaptionAdapter.__proto__ || Object.getPrototypeOf(CaptionAdapter)).apply(this, arguments));
    }

    _createClass(CaptionAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(CaptionAdapter.prototype.__proto__ || Object.getPrototypeOf(CaptionAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _CaptionToValues2.default)(options);
        }

        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            tplNode.children = tplNode.uititle;
        }
    }]);

    return CaptionAdapter;
}(_indexDeps.PropAdapter);

exports.default = CaptionAdapter;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', value);
                    break;
                }
        }
    }
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _FormItemwMeta = __webpack_require__(224);

var _FormItemwMeta2 = _interopRequireDefault(_FormItemwMeta);

var _FormItemwToValues = __webpack_require__(225);

var _FormItemwToValues2 = _interopRequireDefault(_FormItemwToValues);

var _FormItemwValues = __webpack_require__(226);

var _FormItemwValues2 = _interopRequireDefault(_FormItemwValues);

var _FormItemwPage = __webpack_require__(227);

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

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _Defines = __webpack_require__(1);

var _FormInputsMeta = __webpack_require__(7);

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;
    //表单字段公共的属性

    var PropMeta = [{
        name: 'uisubtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ value: _FormItemType2.default.input, text: _Defines.UiTitleDef.input }, { value: _FormItemType2.default.inputhidden, text: _Defines.UiTitleDef.inputhidden }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }, { value: _FormItemType2.default.time, text: _Defines.UiTitleDef.timepicker }, { value: _FormItemType2.default.rangepicker, text: _Defines.UiTitleDef.rangepicker }, { value: _FormItemType2.default.number, text: _Defines.UiTitleDef.inputnumber }, { value: _FormItemType2.default.currency, text: _Defines.UiTitleDef.currency }, { value: _FormItemType2.default.textarea, text: _Defines.UiTitleDef.textarea }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.switch, text: _Defines.UiTitleDef.switch }, { value: _FormItemType2.default.select, text: _Defines.UiTitleDef.select }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.attachupload, text: _Defines.UiTitleDef.attachupload }, { value: _FormItemType2.default.imageupload, text: _Defines.UiTitleDef.imageupload }, { value: _FormItemType2.default.cascader, text: _Defines.UiTitleDef.cascader }, { value: _FormItemType2.default.radiogroup, text: _Defines.UiTitleDef.radiogroup }, { value: _FormItemType2.default.checkboxgroup, text: _Defines.UiTitleDef.checkboxgroup }, { value: _FormItemType2.default.inputmap, text: _Defines.UiTitleDef.inputmap }, { value: _FormItemType2.default.editor, text: _Defines.UiTitleDef.editor }, { value: _FormItemType2.default.attachmgrw, text: _Defines.UiTitleDef.attachmgrw }, { value: _FormItemType2.default.plaintext, text: _Defines.UiTitleDef.text }, { value: _FormItemType2.default.autoselect, text: _Defines.UiTitleDef.autoselect }, { value: _FormItemType2.default.inputbutton, text: _Defines.UiTitleDef.inputbutton }]
        },
        defaultValue: _FormItemType2.default.input
    }, {
        name: 'labelHelp',
        label: '帮助信息',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    //隐藏输入框-移除一些属性
    if (tplNode.uisubtype !== _FormItemType2.default.inputhidden) {
        PropMeta.push({
            name: 'extra',
            label: '提示信息',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'visible',
        label: '是否显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'disabled',
        label: '是否禁用',
        type: _indexDeps.MetaType.Bool,
        props: {
            checkedChildren: "是",
            unCheckedChildren: "否"
        },
        defaultValue: false
    }, {
        name: 'newline',
        label: '占用整行',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'rowBreak',
        label: '强制换行',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'required',
        label: '是否必填',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'mathFormula',
        label: '计算公式',
        type: _indexDeps.MetaType.MathFormula,
        props: {
            options: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                fieldsNode.forEach(function (node, index) {
                    //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                    if (tplNode.nid !== node.nid && !node.mathFormula && node.uikey) {
                        fields.push({ key: node.uikey, title: node.uititle });
                    }
                });
                return fields;
            }() //注意立即执行
        },
        defaultValue: null
    }]);
    //隐藏输入框-移除一些属性
    if (tplNode.uisubtype !== _FormItemType2.default.inputhidden) {
        PropMeta.push({
            name: 'pattern',
            label: '正则验证',
            help: '如需进行一些特殊验证，填入相关正则表达式进行验证',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
        PropMeta.push({
            name: 'patternMsg',
            label: '错误提示',
            type: _indexDeps.MetaType.Text,
            help: '正则验证不通过时给出的错误提示信息',
            props: {},
            defaultValue: ''
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'labelCol',
        label: '标签宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 6
    }, {
        name: 'wrapperCol',
        label: '内容宽度',
        type: _indexDeps.MetaType.Number,
        props: { max: 24, enableSelect: false },
        defaultValue: 14
    }]);

    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前uisubtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.uisubtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;

    return formMeta;
};

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _FormInputsToValues = __webpack_require__(8);

var _FormInputsToValues2 = _interopRequireDefault(_FormInputsToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当uisubtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode) {
    //需要保留的属性清单
    var keepProps = ['nid', 'uikey', 'uititle', 'uitype', 'className', 'uisubtype', 'label', 'labelHelp', 'extra', 'pattern', 'patternMsg', 'newline', 'rowBreak', 'required', 'labelCol', 'disabled', 'wrapperCol', 'visible'];
    //需要清理的属性清单
    var removeProps = [];
    for (var key in tplNode) {
        if (!Array.includes(keepProps, key)) removeProps.push(key);
    }
    //console.log('需要清理的属性：',removeProps);
    //执行清理
    for (var idx in removeProps) {
        delete tplNode[removeProps[idx]];
    }
}

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var oldUiSubType = tplNode.uisubtype;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // tplNode.label = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'label', value);
                    break;
                }
            case "uisubtype":
                {
                    // meta.defaultValue = value;
                    if (oldUiSubType !== value) {
                        clearOtherProps(tplNode); //当uisubtype发生变更时清理属性
                    }
                    break;
                }
            // case "labelHelp":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "extra":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "pattern":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "patternMsg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "newline":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "rowBreak":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "labelCol":
            case "wrapperCol":
                if (meta.defaultValue === value) {
                    delete tplNode[meta.name];
                } else {
                    tplNode[meta.name] = { span: value };
                }
                break;
            // case "disabled":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //处理uisubtype特有属性
    if (typeof _FormInputsToValues2.default[tplNode.uisubtype] == 'function') {
        _FormInputsToValues2.default[tplNode.uisubtype](options);
    }
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormInputsValues = __webpack_require__(9);

var _FormInputsValues2 = _interopRequireDefault(_FormInputsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {}; //处理公共属性
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "uisubtype":{
            //     meta.defaultValue = tplNode.uisubtype?tplNode.uisubtype:meta.defaultValue;
            //     break;
            // }
            // case "labelHelp":{
            //     meta.defaultValue = tplNode.labelHelp?tplNode.labelHelp:meta.defaultValue;
            //     break;
            // }
            // case "extra":{
            //     meta.defaultValue = tplNode.extra?tplNode.extra:meta.defaultValue;
            //     break;
            // }
            // case "pattern":{
            //     meta.defaultValue = tplNode.pattern?tplNode.pattern:meta.defaultValue;
            //     break;
            // }
            // case "disabled":{
            //     meta.defaultValue = tplNode.disabled!=undefined?tplNode.disabled:meta.defaultValue;
            //     break;
            // }
            // case "patternMsg":{
            //     meta.defaultValue = tplNode.patternMsg?tplNode.patternMsg:meta.defaultValue;
            //     break;
            // }
            // case "newline":{
            //     meta.defaultValue = tplNode.newline!=undefined?tplNode.newline:meta.defaultValue;
            //     break;
            // }
            // case "required":{
            //     meta.defaultValue = tplNode.required!=undefined?tplNode.required:meta.defaultValue;
            //     break;
            // }
            // case "visible":{
            //     meta.defaultValue = tplNode.visible!=undefined?tplNode.visible:meta.defaultValue;
            //     break;
            // }
            case "wrapperCol":
                {
                    if (tplNode.wrapperCol && tplNode.wrapperCol.span) {
                        // meta.defaultValue =tplNode.wrapperCol.span;
                        newFormData[meta.name] = tplNode.wrapperCol.span;
                    } else if (tplNode.formWrapperCol) {
                        // meta.defaultValue =tplNode.formWrapperCol.span;
                        newFormData[meta.name] = tplNode.formWrapperCol.span;
                    }
                    break;
                }
            case "labelCol":
                {
                    if (tplNode.labelCol && tplNode.labelCol.span) {
                        // meta.defaultValue =tplNode.labelCol.span;
                        newFormData[meta.name] = tplNode.labelCol.span;
                    } else if (tplNode.formLabelCol) {
                        // meta.defaultValue =tplNode.formLabelCol.span;
                        newFormData[meta.name] = tplNode.formLabelCol.span;
                    }
                    break;
                }
            // case "rowBreak":{
            //     meta.defaultValue = tplNode.rowBreak!=undefined?tplNode.rowBreak:meta.defaultValue;
            //     break;
            // }

            // case "mathFormula":{
            //     meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
            //     break;
            // }
        }
    }
    //处理uisubtype特有属性
    if (typeof _FormInputsValues2.default[tplNode.uisubtype] == 'function') {
        newFormData = Object.assign(newFormData, _FormInputsValues2.default[tplNode.uisubtype](options));
    }
    return newFormData;
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            var buttons = [];
            var uisubtype = opts.tplNode.uisubtype;
            if (uisubtype === _FormItemType2.default.select) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                        var title = _Defines.UiTitleDef.option + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            children: title,
                            uikey: key,
                            value: key,
                            key: key
                        });
                        return true;
                    },
                    text: '添加下拉选项'
                });
            } else if (uisubtype === _FormItemType2.default.radiogroup) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var value = 1 + tplNode.children ? tplNode.children.length : 0;
                        var key = 1 + value + new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.radio,
                            uititle: _Defines.UiTitleDef.radio + value,
                            uikey: key,
                            children: _Defines.UiTitleDef.radio + value,
                            value: key
                        });
                        return true;
                    },
                    text: '添加单选项'
                });
            } else if (uisubtype === _FormItemType2.default.checkboxgroup) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + tplNode.children ? tplNode.children.length : 0;
                        var title = _Defines.UiTitleDef.checkbox + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.checkbox,
                            uititle: title,
                            uikey: key,
                            children: title,
                            value: key,
                            label: title,
                            checked: false
                        });
                        return true;
                    },
                    text: '添加多选项'
                });
            }
            return buttons.length > 0 ? buttons : null;
        }
    };
};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _OptionToValues = __webpack_require__(229);

var _OptionToValues2 = _interopRequireDefault(_OptionToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionAdapter = function (_PropAdapter) {
    _inherits(OptionAdapter, _PropAdapter);

    function OptionAdapter() {
        _classCallCheck(this, OptionAdapter);

        return _possibleConstructorReturn(this, (OptionAdapter.__proto__ || Object.getPrototypeOf(OptionAdapter)).apply(this, arguments));
    }

    _createClass(OptionAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(OptionAdapter.prototype.__proto__ || Object.getPrototypeOf(OptionAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _OptionToValues2.default)(options);
        }
    }]);

    return OptionAdapter;
}(_indexDeps.PropAdapter);

exports.default = OptionAdapter;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', tplNode[meta.name]);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'value', tplNode[meta.name]);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'text', tplNode[meta.name]);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', tplNode[meta.name]);
                    break;
                }
        }
    }
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ButtonSelectMeta = __webpack_require__(231);

var _ButtonSelectMeta2 = _interopRequireDefault(_ButtonSelectMeta);

var _ButtonSelectPage = __webpack_require__(232);

var _ButtonSelectPage2 = _interopRequireDefault(_ButtonSelectPage);

var _ButtonSelectToValues = __webpack_require__(233);

var _ButtonSelectToValues2 = _interopRequireDefault(_ButtonSelectToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonSelectAdapter = function (_PropAdapter) {
    _inherits(ButtonSelectAdapter, _PropAdapter);

    function ButtonSelectAdapter() {
        _classCallCheck(this, ButtonSelectAdapter);

        return _possibleConstructorReturn(this, (ButtonSelectAdapter.__proto__ || Object.getPrototypeOf(ButtonSelectAdapter)).apply(this, arguments));
    }

    _createClass(ButtonSelectAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ButtonSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonSelectAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ButtonSelectMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _ButtonSelectPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(ButtonSelectAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonSelectAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _ButtonSelectToValues2.default)(options);
        }
    }]);

    return ButtonSelectAdapter;
}(_indexDeps.PropAdapter);

exports.default = ButtonSelectAdapter;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'type',
        label: '颜色',
        help: '按钮的填充颜色',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'ghost',
        label: '透明',
        help: '按钮的内部是否填充颜色',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    return PropMeta;
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(1),
    UiTypeDef = _require.UiTypeDef,
    UiTitleDef = _require.UiTitleDef;

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                var title = UiTitleDef.buttonitem + value;
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: UiTypeDef.buttonitem,
                    uititle: title,
                    uikey: key,
                    clickKey: key,
                    children: title
                });
                return true;
            },
            text: '添加' + UiTitleDef.buttonitem
        }]
    };
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'buttonText', value);
                    break;
                }
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'clickKey', value);
                    break;
                }
            // case "type":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['primary','success','error','warning']);
            //     break;
            // }
            // case "ghost":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ButtonItemToValues = __webpack_require__(235);

var _ButtonItemToValues2 = _interopRequireDefault(_ButtonItemToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonItemAdapter = function (_PropAdapter) {
    _inherits(ButtonItemAdapter, _PropAdapter);

    function ButtonItemAdapter() {
        _classCallCheck(this, ButtonItemAdapter);

        return _possibleConstructorReturn(this, (ButtonItemAdapter.__proto__ || Object.getPrototypeOf(ButtonItemAdapter)).apply(this, arguments));
    }

    _createClass(ButtonItemAdapter, [{
        key: 'onValueToData',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配
        value: function onValueToData(options) {
            _get(ButtonItemAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonItemAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _ButtonItemToValues2.default)(options);
        }
    }]);

    return ButtonItemAdapter;
}(_indexDeps.PropAdapter);

exports.default = ButtonItemAdapter;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'clickKey', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'children', value);
                    break;
                }
        }
    }
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _EditTablewMeta = __webpack_require__(237);

var _EditTablewMeta2 = _interopRequireDefault(_EditTablewMeta);

var _EditTablewToValues = __webpack_require__(238);

var _EditTablewToValues2 = _interopRequireDefault(_EditTablewToValues);

var _EditTablewValues = __webpack_require__(239);

var _EditTablewValues2 = _interopRequireDefault(_EditTablewValues);

var _EditTablewPage = __webpack_require__(240);

var _EditTablewPage2 = _interopRequireDefault(_EditTablewPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditTablewAdapter = function (_PropAdapter) {
    _inherits(EditTablewAdapter, _PropAdapter);

    function EditTablewAdapter() {
        _classCallCheck(this, EditTablewAdapter);

        return _possibleConstructorReturn(this, (EditTablewAdapter.__proto__ || Object.getPrototypeOf(EditTablewAdapter)).apply(this, arguments));
    }

    _createClass(EditTablewAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(EditTablewAdapter.prototype.__proto__ || Object.getPrototypeOf(EditTablewAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _EditTablewMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _EditTablewPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(EditTablewAdapter.prototype.__proto__ || Object.getPrototypeOf(EditTablewAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _EditTablewValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(EditTablewAdapter.prototype.__proto__ || Object.getPrototypeOf(EditTablewAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _EditTablewToValues2.default)(options);
        }
    }]);

    return EditTablewAdapter;
}(_indexDeps.PropAdapter);

exports.default = EditTablewAdapter;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.edittablew){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // if(tplNode.uitype == UiTypeDef.edittablew) {
    PropMeta.push({
        name: 'showRowNum',
        label: '生成序号',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    });
    if (tplNode.showRowNum === true) {
        PropMeta.push({
            name: 'visibleRowNum',
            label: '显示序号',
            help: '当[生成序号]启用时，序号列在表格上是否可见',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'checkable',
        label: '多选模式',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'bordered',
        label: '显示边框',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'draggable',
        label: '列宽拖拽',
        type: _indexDeps.MetaType.Bool,
        help: '当启用时支持表格表头（标题右侧边界处）进行拖拽调整列显示宽度',
        props: {},
        defaultValue: true
    }, {
        name: 'rowBreak',
        label: '换行显示',
        help: '单元格数据内容长度超过列宽度时是否换行显示，默认：false，即单一行显示超出内容为"..."',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'autoSelect',
        label: '联动勾选',
        help: '当父节点勾选后，子节点默认全部勾选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'enableRowClickEdit',
        label: '单行编辑',
        help: '启用此模式后，点击表格行，同一时间只编辑当前激活的行数据',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
        // ,{
        //     name: 'scrollX',
        //     label: '横向滚动',
        //     help:'配置是否启用横向滚动条，并指明横向滚动条的宽度',
        //     type: MetaType.SwitchText,
        //     props: {},
        //     defaultValue: null
        // }
    }, {
        name: 'scrollY',
        label: '高度限制',
        help: '当表格内容超过指定高度时，将出现垂直滚动条',
        type: _indexDeps.MetaType.SwitchText,
        props: {},
        defaultValue: false
    }, {
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {

            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                } else if (rootSystem) {
                    //再取页面级
                    return { "system.systemName": rootSystem.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: _indexDeps.MetaType.Refer,
        help: "先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" + "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" + "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" + "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" + "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n" + "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。",
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            multiselect: true,
            condition: function () {
                //将实体名作为参照过滤条件
                var cond = {};
                var rootSystem = (tplTree.dataprops || {}).system;
                var rootEntity = (tplTree.dataprops || {}).entity;
                if (tplNode.dataprops && tplNode.dataprops.entity) {
                    //先取自身级
                    cond["entity.entityFullName"] = tplNode.dataprops.entity.entityFullName;
                } else if (rootEntity) {
                    //再取页面级
                    cond["entity.entityFullName"] = rootEntity.entityFullName;
                }
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    cond["projectName"] = tplNode.dataprops.system.systemName;
                } else if (rootSystem) {
                    //再取页面级
                    cond["projectName"] = rootSystem.systemName;
                }
                return cond;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'rowKey',
        label: '主键字段',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var items = [];
                items.push({ value: 'id', text: '默认(id)' });
                (tplNode.children || []).forEach(function (child) {
                    items.push({ key: child.uikey, value: child.uikey, text: child.uititle });
                });
                return items;
            }() //注意立即执行
        },
        defaultValue: 'id'
    }, {
        name: 'dataSource',
        label: '本地数据',
        help: '配置本地演示数据',
        type: _indexDeps.MetaType.LocalData,
        props: {
            owner: 'edittable',
            columns: tplNode.children !== undefined ? tplNode.children : []
        },
        defaultValue: []
    }, {
        name: 'totalIndex',
        label: '合计位置',
        help: '定义合计文本显示到哪一列，默认显示在勾选列，如果需要显示到其它字段列则配置对应字段键值，注意：确保列启用合计才生效',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'totalText',
        label: '合计文本',
        help: '默认显示文本为“合计”，注意：确保列启用合计才生效',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "checkable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "bordered":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "showRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visibleRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "totalIndex":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "totalText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "scrollY":{
            //     // meta.defaultValue = value;
            //     if(value===false){//{x:true|Number}
            //         if(tplNode.scroll)delete tplNode.scroll.y
            //     }else{//true|string
            //         if(!tplNode.scroll){tplNode.scroll = {}}
            //         tplNode.scroll.y = value;
            //     }
            //     break;
            // }
            case "system":
                {
                    //关联系统
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "fields":
                {
                    //添加关联字段
                    delete tplNode[meta.name];
                    if (value) {
                        for (var idx = 0; idx < value.length; idx++) {
                            var item = value[idx];
                            //注意attrName属性赋值给uikey
                            var field = _Utils2.default.findByUiKey(tplNode.children, item.attrName);
                            if (!field) {
                                //不存在则添加,防止重复添加
                                var uikey = item.attrName;
                                var uititle = item.attrCnName;
                                //依据JAVA元数据字段类型自动匹配对应的数据类型
                                var fieldtype = JavaTypeToFieldType(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var uisubtype = FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.edititemw,
                                    uisubtype: uisubtype,
                                    uititle: uititle,
                                    title: uititle,
                                    uikey: uikey,
                                    key: uikey,
                                    dataIndex: uikey
                                };
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
            // case "rowKey":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableRowClickEdit":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            // }
            // case "rowBreak": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "autoSelect":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "dataSource":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
    if (tplNode.scroll && !Object.keys(tplNode.scroll).length) {
        delete tplNode.scroll;
    }
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var rootDataprops = tplTree.dataprops || {};
    var rootSystem = rootDataprops.system;
    var rootEntity = rootDataprops.entity;
    var newFormData = {}; //处理公共属性
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "checkable":{
            //     meta.defaultValue=tplNode.checkable!==undefined?tplNode.checkable:meta.defaultValue;
            //     break;
            // }
            // case "bordered":{
            //     meta.defaultValue=tplNode.bordered!==undefined?tplNode.bordered:meta.defaultValue;
            //     break;
            // }
            // case "showRowNum":{
            //     meta.defaultValue=tplNode.showRowNum!==undefined?tplNode.showRowNum:meta.defaultValue;
            //     break;
            // }
            // case "draggable":{
            //     meta.defaultValue=tplNode.draggable!==undefined?tplNode.draggable:meta.defaultValue;
            //     break;
            // }
            // case "visibleRowNum":{
            //     meta.defaultValue=tplNode.visibleRowNum!==undefined?tplNode.visibleRowNum:meta.defaultValue;
            //     break;
            // }
            // case "totalIndex":{
            //     meta.defaultValue=tplNode.totalIndex!==undefined?tplNode.totalIndex:meta.defaultValue;
            //     break;
            // }
            // case "totalText":{
            //     meta.defaultValue=tplNode.totalText!==undefined?tplNode.totalText:meta.defaultValue;
            //     break;
            // }
            case "scrollY":
                {
                    // meta.defaultValue=tplNode.scroll!==undefined&&tplNode.scroll.y!==undefined?tplNode.scroll.y:meta.defaultValue;
                    if (tplNode.scroll && tplNode.scroll.y !== undefined) {
                        newFormData[meta.name] = tplNode.scroll.y;
                    }
                    break;
                }
            case "system":
                {
                    //关联系统
                    // if(tplNode.dataprops&&tplNode.dataprops.system){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id=tplNode.dataprops.system.id;
                    //     //meta.defaultValue.baseUrl=tplNode.dataprops.system.baseUrl;
                    // }else if(rootSystem){//再取页面配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = rootSystem.systemCnName;
                    //     meta.defaultValue.code = rootSystem.systemName;
                    //     meta.defaultValue.id = rootSystem.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops.system) {
                        //先取自身配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                        newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                        newFormData[meta.name].id = tplNode.dataprops.system.id;
                    } else if (rootSystem) {
                        //再取页面配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootSystem.systemCnName;
                        newFormData[meta.name].code = rootSystem.systemName;
                        newFormData[meta.name].id = rootSystem.id;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else if(rootEntity){//再取页面配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=rootEntity.entityCnName;
                    //     meta.defaultValue.code=rootEntity.entityFullName;
                    //     meta.defaultValue.id=rootEntity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode.dataprops && tplNode.dataprops.entity) {
                        //先取自身配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.entity.entityCnName;
                        newFormData[meta.name].code = tplNode.dataprops.entity.entityFullName;
                        newFormData[meta.name].id = tplNode.dataprops.entity.id;
                    } else if (rootEntity) {
                        //再取页面配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootEntity.entityCnName;
                        newFormData[meta.name].code = rootEntity.entityFullName;
                        newFormData[meta.name].id = rootEntity.id;
                    }
                    break;
                }
            case "fields":
                {
                    break;
                }
            // case "rowKey":{
            //     meta.defaultValue=tplNode.rowKey?tplNode.rowKey:meta.defaultValue;
            //     break;
            // }
            // case "enableRowClickEdit":{
            //     meta.defaultValue = tplNode.enableRowClickEdit!==undefined?tplNode.enableRowClickEdit:meta.defaultValue
            //     break;
            // }
            // case "rowBreak":{
            //     meta.defaultValue=tplNode.rowBreak!==undefined?tplNode.rowBreak:meta.defaultValue;
            //     break;
            // }
            // case "autoSelect":{
            //     meta.defaultValue=tplNode.autoSelect!==undefined?tplNode.autoSelect:meta.defaultValue;
            //     break;
            // }
            // case "dataSource":{
            //     meta.defaultValue=tplNode.dataSource!==undefined?tplNode.dataSource:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                var uititle = _Defines.UiTitleDef.edititemw + count;
                var uikey = new Date().getTime();
                _Utils2.default.appendNode(tplNode, { uitype: _Defines.UiTypeDef.edititemw, uisubtype: _FormItemType2.default.input, uititle: uititle, title: uititle, uikey: uikey, key: uikey, dataIndex: uikey });
                return true;
            },
            text: '添加字段'
        }]
    };
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _EditItemWMeta = __webpack_require__(242);

var _EditItemWMeta2 = _interopRequireDefault(_EditItemWMeta);

var _EditItemWToValues = __webpack_require__(243);

var _EditItemWToValues2 = _interopRequireDefault(_EditItemWToValues);

var _EditItemWValues = __webpack_require__(244);

var _EditItemWValues2 = _interopRequireDefault(_EditItemWValues);

var _EditItemWPage = __webpack_require__(245);

var _EditItemWPage2 = _interopRequireDefault(_EditItemWPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditItemWAdapter = function (_PropAdapter) {
    _inherits(EditItemWAdapter, _PropAdapter);

    function EditItemWAdapter() {
        _classCallCheck(this, EditItemWAdapter);

        return _possibleConstructorReturn(this, (EditItemWAdapter.__proto__ || Object.getPrototypeOf(EditItemWAdapter)).apply(this, arguments));
    }

    _createClass(EditItemWAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(EditItemWAdapter.prototype.__proto__ || Object.getPrototypeOf(EditItemWAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _EditItemWMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _EditItemWPage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(EditItemWAdapter.prototype.__proto__ || Object.getPrototypeOf(EditItemWAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _EditItemWValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(EditItemWAdapter.prototype.__proto__ || Object.getPrototypeOf(EditItemWAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _EditItemWToValues2.default)(options);
        }
    }]);

    return EditItemWAdapter;
}(_indexDeps.PropAdapter);

exports.default = EditItemWAdapter;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsMeta = __webpack_require__(7);

var _FormInputsMeta2 = _interopRequireDefault(_FormInputsMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;
    //编辑表格字段公共的属性

    var PropMeta = [{
        name: 'uisubtype',
        label: '输入方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: _FormItemType2.default.input, text: _Defines.UiTitleDef.input }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }, { value: _FormItemType2.default.time, text: _Defines.UiTitleDef.timepicker }, { value: _FormItemType2.default.rangepicker, text: _Defines.UiTitleDef.rangepicker }, { value: _FormItemType2.default.number, text: _Defines.UiTitleDef.inputnumber }, { value: _FormItemType2.default.currency, text: _Defines.UiTitleDef.currency }, { value: _FormItemType2.default.textarea, text: _Defines.UiTitleDef.textarea }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.switch, text: _Defines.UiTitleDef.switch }, { value: _FormItemType2.default.select, text: _Defines.UiTitleDef.select }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.cascader, text: _Defines.UiTitleDef.cascader }, { value: _FormItemType2.default.attachupload, text: _Defines.UiTitleDef.attachupload }, { value: _FormItemType2.default.autoselect, text: _Defines.UiTitleDef.autoselect }]
        },
        defaultValue: _FormItemType2.default.input
    }, {
        name: 'titleAlign',
        label: '标题对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: 'center'
    }, {
        name: 'align',
        label: '数据对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency ? 'right' : 'left'
    }, {
        name: 'width',
        label: '宽度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'isShow',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'required',
        label: '必填',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'total',
        label: '统计合计',
        help: '默认合计计算本列数据',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }];
    if (tplNode.total) {
        PropMeta.push({
            name: 'totalDecimal',
            label: '合计精度',
            help: '定义合计数值保留的小数位,默认不保留小数位',
            type: _indexDeps.MetaType.Number,
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: 0
        });
    }

    PropMeta = PropMeta.concat([{
        name: 'editable',
        label: '支持编辑',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'cellFill',
        label: '支持填充',
        help: '是否支持单元格整列填充、向下填充、向上填充',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'mathFormula',
        label: '计算公式',
        type: _indexDeps.MetaType.MathFormula,
        props: {
            fields: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                (fieldsNode || []).forEach(function (node, index) {
                    //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                    if (tplNode.nid !== node.nid && !node.mathFormula) {
                        fields.push({ key: node.uikey, title: node.uititle });
                    }
                });
                return fields;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'sorterEnable',
        label: '默认排序',
        help: '根据数据类型自动预制排序函数',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'colSpan',
        label: '表头合并',
        type: _indexDeps.MetaType.Select,
        props: {

            options: function () {
                var opts = [{ value: -1, text: '不合并' }, { value: 0, text: '被合并' }];
                for (var i = 2; i <= 100; i++) {
                    opts.push({ value: i, text: '合并' + i + "列" });
                }
                return opts;
            }()
        },
        defaultValue: -1
    }]);
    //只有合并N列头才显示表头配置项
    if (tplNode.colSpan > 0) {
        PropMeta.push({
            name: 'titleGroup',
            label: '表头配置',
            type: _indexDeps.MetaType.TitleGroup,
            props: {},
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'fixed',
        label: '固定冻结',
        help: '注意：启用固定冻结列时需要明确配置各列[宽度]，并配置表格[横向滚动]宽度等于所有显示列宽度之和',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左冻结' }, { value: 'right', text: '右冻结' }, { value: 'noFixed', text: '不冻结' }]
        },
        defaultValue: 'noFixed'
    }, {
        name: 'titleTip',
        label: '标题提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'helpTip',
        label: '帮助提示',
        help: '非编辑态时显示辅助悬浮提示的信息内容',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'editTip',
        label: '编辑提示',
        help: '编辑态输入时显示辅助悬浮提示的信息内容',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }]);

    //千分位配置
    if (tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency) {
        PropMeta.push({
            name: 'comma',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    //文本框、金额框、整数框验证属性
    if (tplNode.uisubtype == _FormItemType2.default.input || tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency) {
        PropMeta.push({
            name: 'pattern',
            label: '正则验证',
            help: '如需进行一些特殊验证，填入相关正则表达式进行验证',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        }, {
            name: 'patternMsg',
            label: '错误提示',
            type: _indexDeps.MetaType.Text,
            help: '正则验证不通过时给出的错误提示信息',
            props: {},
            defaultValue: ''
        });
    }

    // 获取全部FormInputType对应的配置
    var inputsPropMeta = (0, _FormInputsMeta2.default)(options);
    // 获取当前uisubtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.uisubtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta ? PropMeta.concat(uisubtypeMeta) : PropMeta;
    return formMeta;
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _FormInputsToValues = __webpack_require__(8);

var _FormInputsToValues2 = _interopRequireDefault(_FormInputsToValues);

var _TableUtils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当uisubtype发生变更时，清除其它特殊属性，只保留共性的属性。
function clearOtherProps(tplNode) {
    //需要保留的属性清单
    var keepProps = ['nid', 'uikey', 'uititle', 'uitype', 'className', 'uisubtype', 'key', 'dataIndex', 'title', 'isShow', 'width', 'titleAlign', 'align', 'colSpan', 'titleGroup', 'editable', 'helpTip', 'editTip', 'fixed', 'total', 'totalDecimal', 'comma', 'sorterEnable', 'titleTip'];
    //需要清理的属性清单
    var removeProps = [];
    for (var key in tplNode) {
        if (!Array.includes(keepProps, key)) removeProps.push(key);
    }
    //console.log('需要清理的属性：',removeProps);
    //执行清理
    for (var idx in removeProps) {
        delete tplNode[removeProps[idx]];
    }
}
module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var oldUiSubType = tplNode.uisubtype;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        //保证formMeta数据值和表单数据值一致
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'dataIndex', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'uititle', value);
                    break;
                }
            // case "isShow":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "required":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "patternMsg":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "pattern":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "uisubtype":
                {
                    // meta.defaultValue = value;
                    if (oldUiSubType !== value) {
                        clearOtherProps(tplNode); //当uisubtype发生变更时清理属性
                    }
                    break;
                }
            // case "titleAlign":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            case "align":
                {
                    if (tplNode.uisubtype == _FormItemType2.default.number || tplNode.uisubtype == _FormItemType2.default.currency) {
                        value = formData[meta.name] !== undefined ? formData[meta.name] : 'right';
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isIncludeSet(tplNode, meta.name, value, ['left', 'center']); //默认右对齐
                    } else {
                        value = formData[meta.name] !== undefined ? formData[meta.name] : 'left';
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isIncludeSet(tplNode, meta.name, value, ['right', 'center']); //默认左对齐
                    }
                    break;
                }
            // case "total":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "totalDecimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.total && value >= 0) {
                        tplNode.totalDecimal = value;
                    } else {
                        delete tplNode.totalDecimal;
                    }
                    break;
                }
            // case "comma":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "width":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "colSpan":
                {
                    // 区分被合并,不合并,合并列
                    // meta.defaultValue = value;
                    tplNode.colSpan = value;
                    if (value < 1) {
                        if (value === -1) {
                            delete tplNode.colSpan;
                        }
                        delete tplNode.titleGroup;
                    }
                    break;
                }
            case "titleGroup":
                {
                    if (tplNode.colSpan && tplNode.colSpan > 0) {
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            // case "helpTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "editTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "editable": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "fixed":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            // case "cellFill": {
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "sorterEnable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "titleTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //级联设置后面相关字段为被合并
    if (tplNode.colSpan > 0) {
        (0, _TableUtils.tableColSpan)(tplTree, tplNode);
    }
    //处理uisubtype特有属性
    if (typeof _FormInputsToValues2.default[tplNode.uisubtype] == 'function') {
        _FormInputsToValues2.default[tplNode.uisubtype](options);
    }
};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormInputsValues = __webpack_require__(9);

var _FormInputsValues2 = _interopRequireDefault(_FormInputsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {}; //处理公共属性
    tplNode.dataprops = tplNode.dataprops || {};
    // for(var i=0;i<formMeta.length;i++){
    //     var meta = formMeta[i];
    //     switch(meta.name){
    //         case "isShow":{
    //             meta.defaultValue=tplNode.isShow!==undefined?tplNode.isShow:meta.defaultValue;
    //             break;
    //         }case "required":{
    //             meta.defaultValue=tplNode.required!==undefined?tplNode.required:meta.defaultValue;
    //             break;
    //         }case "patternMsg":{
    //             meta.defaultValue=tplNode.patternMsg!==undefined?tplNode.patternMsg:meta.defaultValue;
    //             break;
    //         }case "pattern":{
    //             meta.defaultValue=tplNode.pattern!==undefined?tplNode.pattern:meta.defaultValue;
    //             break;
    //         }
    //         case "uisubtype":{
    //             meta.defaultValue = tplNode.uisubtype?tplNode.uisubtype:meta.defaultValue;
    //             break;
    //         }
    //         case "width":{
    //             meta.defaultValue=tplNode.width!==undefined?tplNode.width:meta.defaultValue;
    //             break;
    //         }
    //         case "titleAlign":{
    //             meta.defaultValue=tplNode.titleAlign!==undefined?tplNode.titleAlign:meta.defaultValue;
    //             break;
    //         }
    //         case "align":{
    //             meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
    //             break;
    //         }
    //         case "total":{
    //             meta.defaultValue=tplNode.total!==undefined?tplNode.total:meta.defaultValue;
    //             break;
    //         }
    //         case "totalDecimal":{
    //             meta.defaultValue=tplNode.totalDecimal!==undefined?tplNode.totalDecimal:meta.defaultValue;
    //             break;
    //         }
    //         case "comma":{
    //             meta.defaultValue = tplNode.comma !== undefined ? tplNode.comma : meta.defaultValue;
    //             break;
    //         }
    //         case "editable":{
    //             meta.defaultValue=tplNode.editable!==undefined?tplNode.editable:meta.defaultValue;
    //             break;
    //         }
    //         case "colSpan":{
    //             meta.defaultValue=tplNode.colSpan!==undefined?tplNode.colSpan:meta.defaultValue;
    //             break;
    //         }
    //         case "mathFormula":{//数学计算公式
    //             meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
    //             break;
    //         }
    //         case "titleGroup":{
    //             meta.defaultValue=tplNode.titleGroup!==undefined?tplNode.titleGroup:meta.defaultValue;
    //             break;
    //         }
    //         case "helpTip":{
    //             meta.defaultValue=tplNode.helpTip!==undefined?tplNode.helpTip:meta.defaultValue;
    //             break;
    //         }
    //         case "editTip":{
    //             meta.defaultValue=tplNode.editTip!==undefined?tplNode.editTip:meta.defaultValue;
    //             break;
    //         }
    //         case "fixed":{
    //             meta.defaultValue=tplNode.fixed!==undefined?tplNode.fixed:meta.defaultValue;
    //             break;
    //         }
    //         case "cellFill":{
    //             meta.defaultValue=tplNode.cellFill!==undefined?tplNode.cellFill:meta.defaultValue;
    //             break;
    //         }
    //         case "sorterEnable":{
    //             meta.defaultValue=tplNode.sorterEnable!==undefined?tplNode.sorterEnable:meta.defaultValue;
    //             break;
    //         }
    //         case "titleTip":{
    //             meta.defaultValue=tplNode.titleTip!==undefined?tplNode.titleTip:meta.defaultValue;
    //             break;
    //         }
    //     }
    // }

    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }

    //处理uisubtype特有属性
    if (typeof _FormInputsValues2.default[tplNode.uisubtype] == 'function') {
        newFormData = Object.assign(newFormData, _FormInputsValues2.default[tplNode.uisubtype](options));
    }
    return newFormData;
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            var buttons = [];
            var uisubtype = opts.tplNode.uisubtype;
            if (uisubtype === _FormItemType2.default.select) {
                buttons.push({
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                        var title = _Defines.UiTitleDef.option + count;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            uidisabled: true,
                            text: title,
                            uikey: key,
                            value: key
                        });
                        return true;
                    },
                    text: '添加下拉选项'
                });
            }
            return buttons.length > 0 ? buttons : null;
        }
    };
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _StepsMeta = __webpack_require__(247);

var _StepsMeta2 = _interopRequireDefault(_StepsMeta);

var _StepsPage = __webpack_require__(248);

var _StepsPage2 = _interopRequireDefault(_StepsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepsAdapter = function (_PropAdapter) {
    _inherits(StepsAdapter, _PropAdapter);

    function StepsAdapter() {
        _classCallCheck(this, StepsAdapter);

        return _possibleConstructorReturn(this, (StepsAdapter.__proto__ || Object.getPrototypeOf(StepsAdapter)).apply(this, arguments));
    }

    _createClass(StepsAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(StepsAdapter.prototype.__proto__ || Object.getPrototypeOf(StepsAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _StepsMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _StepsPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return StepsAdapter;
}(_indexDeps.PropAdapter);

exports.default = StepsAdapter;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode;

    var PropMeta = [{
        name: 'current',
        label: '当前步骤',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var items = [];
                (tplNode.children || []).forEach(function (child, index) {
                    items.push({ value: index, text: child.uititle });
                });
                return items;
            }()
        },
        defaultValue: null
    }, {
        name: 'size',
        label: '大小',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '普通',
                value: 'default'
            }, {
                text: '迷你',
                value: 'small'
            }]
        },
        defaultValue: 'default'
    }, {
        name: 'direction',
        label: '步骤条方向',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '水平',
                value: 'default'
            }, {
                text: '垂直',
                value: 'vertical'
            }]
        },
        defaultValue: 'default'
    }];
    return PropMeta;
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加步骤',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.step,
                    uititle: _Defines.UiTitleDef.step + value,
                    uikey: key,
                    key: key,
                    title: _Defines.UiTitleDef.step + value,
                    status: value === 1 ? 'process' : undefined,
                    description: '',
                    icon: ''
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _StepMeta = __webpack_require__(250);

var _StepMeta2 = _interopRequireDefault(_StepMeta);

var _StepToValues = __webpack_require__(251);

var _StepToValues2 = _interopRequireDefault(_StepToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepAdapter = function (_PropAdapter) {
    _inherits(StepAdapter, _PropAdapter);

    function StepAdapter() {
        _classCallCheck(this, StepAdapter);

        return _possibleConstructorReturn(this, (StepAdapter.__proto__ || Object.getPrototypeOf(StepAdapter)).apply(this, arguments));
    }

    _createClass(StepAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(StepAdapter.prototype.__proto__ || Object.getPrototypeOf(StepAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _StepMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(StepAdapter.prototype.__proto__ || Object.getPrototypeOf(StepAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _StepToValues2.default)(options);
        }
    }]);

    return StepAdapter;
}(_indexDeps.PropAdapter);

exports.default = StepAdapter;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var PropMeta = [{
        name: 'status',
        label: '当前状态',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '待运行',
                value: 'wait'
            }, {
                text: '进行中',
                value: 'process'
            }, {
                text: '已完成',
                value: 'finish'
            }, {
                text: '失败',
                value: 'error'
            }]
        },
        defaultValue: undefined
    }, {
        name: 'description',
        label: '描述',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'icon',
        label: '图标',
        type: _indexDeps.MetaType.Icon,
        props: {},
        defaultValue: ''
    }];
    return PropMeta;
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    // meta.defaultValue = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, "title", value);
                    break;
                }
            // case "status":{
            //     // meta.defaultValue = value;
            //     tplNode.status = value;
            //     break;
            // }
            // case "description":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "icon":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TableMeta = __webpack_require__(253);

var _TableMeta2 = _interopRequireDefault(_TableMeta);

var _TableToValues = __webpack_require__(254);

var _TableToValues2 = _interopRequireDefault(_TableToValues);

var _TableValues = __webpack_require__(255);

var _TableValues2 = _interopRequireDefault(_TableValues);

var _TablePage = __webpack_require__(256);

var _TablePage2 = _interopRequireDefault(_TablePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableAdapter = function (_PropAdapter) {
    _inherits(TableAdapter, _PropAdapter);

    function TableAdapter() {
        _classCallCheck(this, TableAdapter);

        return _possibleConstructorReturn(this, (TableAdapter.__proto__ || Object.getPrototypeOf(TableAdapter)).apply(this, arguments));
    }

    _createClass(TableAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TableAdapter.prototype.__proto__ || Object.getPrototypeOf(TableAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TableMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _TablePage2.default)(options);
        }
    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(TableAdapter.prototype.__proto__ || Object.getPrototypeOf(TableAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _TableValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TableAdapter.prototype.__proto__ || Object.getPrototypeOf(TableAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TableToValues2.default)(options);
        }
    }]);

    return TableAdapter;
}(_indexDeps.PropAdapter);

exports.default = TableAdapter;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Defines = __webpack_require__(1);

var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    PropMeta.push({
        name: 'showRowNum',
        label: '生成序号',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    });
    if (tplNode.showRowNum === true) {
        PropMeta.push({
            name: 'visibleRowNum',
            label: '显示序号',
            help: '当[生成序号]启用时，序号列在表格上是否可见',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'checkable',
        label: '多选模式',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'bordered',
        label: '显示边框',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'draggable',
        label: '列宽拖拽',
        type: _indexDeps.MetaType.Bool,
        help: '当启用时支持表格表头（标题右侧边界处）进行拖拽调整列显示宽度',
        props: {},
        defaultValue: true
    }, {
        name: 'rowBreak',
        label: '换行显示',
        help: '单元格数据内容长度超过列宽度时是否换行显示，默认：false，即单一行显示超出内容为"..."',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'autoSelect',
        label: '联动勾选',
        help: '当父节点勾选后，子节点默认全部勾选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'system',
        label: '系统对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-system',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                //依据系统名称作为参照过滤条件
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    return { "system.systemName": tplNode.dataprops.system.systemName };
                } else if (rootSystem) {
                    //再取页面级
                    return { "system.systemName": rootSystem.systemName };
                }
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: _indexDeps.MetaType.Refer,
        help: "先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" + "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" + "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" + "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" + "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n" + "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。",
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: _indexDeps.SUPPORT_SERVER,
            multiselect: true,
            condition: function () {
                var rootSystem = (tplTree.dataprops || {}).system;
                var rootEntity = (tplTree.dataprops || {}).entity;
                //将实体名作为参照过滤条件
                var cond = {};
                if (tplNode.dataprops && tplNode.dataprops.entity) {
                    //先取自身级
                    cond["entity.entityFullName"] = tplNode.dataprops.entity.entityFullName;
                } else if (rootEntity) {
                    //再取页面级
                    cond["entity.entityFullName"] = rootEntity.entityFullName;
                }
                if (tplNode.dataprops && tplNode.dataprops.system) {
                    //先取自身级
                    cond["projectName"] = tplNode.dataprops.system.systemName;
                } else if (rootSystem) {
                    //再取页面级
                    cond["projectName"] = rootSystem.systemName;
                }
                return cond;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'scrollY',
        label: '高度限制',
        help: '当表格内容超过指定高度时，将出现垂直滚动条',
        type: _indexDeps.MetaType.SwitchText,
        props: {},
        defaultValue: false
    }, {
        name: 'rowKey',
        label: '主键字段',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var items = [];
                (tplNode.children || []).forEach(function (child) {
                    items.push({ key: child.uikey, value: child.uikey, text: child.uititle });
                });
                items.unshift({ value: 'id', text: '默认(id)' });
                return items;
            }() //注意立即执行
        },
        defaultValue: 'id'
    }, {
        name: 'totalIndex',
        label: '合计位置',
        help: '定义合计文本显示到哪一列，默认显示在勾选列，如果需要显示到其它字段列则配置对应字段键值，注意：确保列启用合计才生效',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'totalText',
        label: '合计文本',
        help: '默认显示文本为“合计”，注意：确保列启用合计才生效',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    //扩展数据表格(TableWidget)配置
    if (tplNode.uitype == _Defines.UiTypeDef.tablew || tplNode.uitype == _Defines.UiTypeDef.CPListTable) {
        PropMeta.push({
            name: 'queryUrl',
            label: '查询URL',
            help: '建议代码动态配置queryUrl属性',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
        PropMeta.push({
            name: 'dataSource',
            label: '本地数据',
            help: '配置本地演示数据',
            type: _indexDeps.MetaType.LocalData,
            props: {
                owner: 'table',
                columns: tplNode.children !== undefined ? tplNode.children : []
            },
            defaultValue: []
        });
        PropMeta.push({
            name: 'deleteUrl',
            label: '删除URL',
            help: '建议代码动态配置deleteUrl属性',
            type: _indexDeps.MetaType.Text,
            props: {},
            defaultValue: ''
        });
        PropMeta.push({
            name: 'autoQuery',
            label: '自动查询',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
        PropMeta.push({
            name: 'pagination',
            label: '分页配置',
            type: _indexDeps.MetaType.Pagination,
            props: {},
            defaultValue: null
        });
        PropMeta.push({
            name: 'rowMenus',
            label: '行菜单项',
            type: _indexDeps.MetaType.RowMenu,
            props: {
                columns: tplNode.children !== undefined ? tplNode.children : []
            },
            defaultValue: null
        });
        PropMeta.push({
            name: 'rowMenuIndex',
            label: '行菜单列',
            type: _indexDeps.MetaType.Select,
            props: {
                options: function () {
                    var items = [];
                    (tplNode.children || []).forEach(function (child) {
                        items.push({ key: child.uikey, value: child.uikey, text: child.uititle });
                    });
                    items.unshift({ value: '', text: '最后一列(默认)' });
                    return items;
                }() //注意立即执行
            },
            defaultValue: ''
        });
    }
    return PropMeta;
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

var _Constant = __webpack_require__(6);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            // case "checkable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "showRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "draggable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "visibleRowNum":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "rowBreak":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "autoSelect":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "scrollY":
                {
                    delete tplNode[meta.name];
                    // meta.defaultValue = value;   //{x:true|Number}
                    if (value === false) {
                        if (tplNode.scroll) delete tplNode.scroll.y;
                    } else {
                        //true|string
                        if (!tplNode.scroll) {
                            tplNode.scroll = {};
                        }
                        tplNode.scroll.y = value;
                    }
                    break;
                }
            case "system":
                {
                    //关联系统
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.systemCnName?value.systemCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.systemName?value.systemName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.system = {
                            id: value.id,
                            systemCnName: value.systemCnName ? value.systemCnName : value.name,
                            systemName: value.systemName ? value.systemName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.system;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    delete tplNode[meta.name];
                    if (value) {
                        // meta.defaultValue={};
                        // meta.defaultValue.name=value.entityCnName?value.entityCnName:value.name;//实体中文名
                        // meta.defaultValue.code=value.entityFullName?value.entityFullName:value.code;//实体全名
                        // meta.defaultValue.id=value.id;
                        //先尝试取参照带回的值，带回值不存在则取默认值
                        tplNode.dataprops.entity = {
                            id: value.id,
                            entityCnName: value.entityCnName ? value.entityCnName : value.name,
                            entityFullName: value.entityFullName ? value.entityFullName : value.code
                        };
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.dataprops.entity;
                    }
                    break;
                }
            case "fields":
                {
                    //添加关联字段
                    delete tplNode[meta.name];
                    if (value) {
                        for (var idx = 0; idx < value.length; idx++) {
                            var item = value[idx];
                            //注意attrName属性赋值给uikey
                            var field = _Utils2.default.findByUiKey(tplNode.children, item.attrName);
                            if (!field) {
                                //不存在则添加,防止重复添加
                                var uikey = item.attrName;
                                var uititle = item.attrCnName;
                                //依据JAVA元数据字段类型自动匹配对应的数据类型
                                var fieldtype = (0, _Constant.JavaTypeToFieldType)(item.attrType);
                                //依据数据类型自动匹配对应的输入类型
                                var uisubtype = _Constant.FieldTypeInputType[fieldtype];
                                var childNode = {
                                    uitype: _Defines.UiTypeDef.tablecol,
                                    uititle: uititle,
                                    title: uititle,
                                    uikey: uikey,
                                    key: uikey,
                                    dataIndex: uikey
                                };
                                if (fieldtype && fieldtype !== 'string') childNode.fieldtype = fieldtype;
                                if (uisubtype && uisubtype === _FormItemType2.default.date) childNode.uisubtype = uisubtype;
                                //动态添加字段
                                _Utils2.default.appendNode(tplNode, childNode);
                            }
                        }
                    }
                    break;
                }
            // case "rowKey":{
            //     // meta.defaultValue = value;
            //     tplNode.rowKey = value;
            //     break;
            // }
            // case "queryUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "deleteUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "totalIndex":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "totalText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "autoQuery":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "bordered":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "pagination":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isNotEqualSet(tplNode, meta.name, value,null);
            //     break;
            // }
            // case "dataSource":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name,value);
            //     break;
            // }
            // case "rowMenus":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
            // case "rowMenuIndex":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode, meta.name, value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
    if (tplNode.scroll && !Object.keys(tplNode.scroll).length) {
        delete tplNode.scroll;
    }
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;
    //获取页面配置的系统、实体信息

    var rootDataprops = tplTree.dataprops || {};
    var rootSystem = rootDataprops.system;
    var rootEntity = rootDataprops.entity;
    var newFormData = {}; //处理公共属性
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "checkable":{
            //     meta.defaultValue=tplNode.checkable!==undefined?tplNode.checkable:meta.defaultValue;
            //     break;
            // }
            // case "showRowNum":{
            //     meta.defaultValue=tplNode.showRowNum!==undefined?tplNode.showRowNum:meta.defaultValue;
            //     break;
            // }
            // case "draggable":{
            //     meta.defaultValue=tplNode.draggable!==undefined?tplNode.draggable:meta.defaultValue;
            //     break;
            // }
            // case "visibleRowNum":{
            //     meta.defaultValue=tplNode.visibleRowNum!==undefined?tplNode.visibleRowNum:meta.defaultValue;
            //     break;
            // }
            // case "rowBreak":{
            //     meta.defaultValue=tplNode.rowBreak!==undefined?tplNode.rowBreak:meta.defaultValue;
            //     break;
            // }
            // case "autoSelect":{
            //     meta.defaultValue=tplNode.autoSelect!==undefined?tplNode.autoSelect:meta.defaultValue;
            //     break;
            // }
            case "scrollY":
                {
                    // meta.defaultValue=tplNode.scroll!==undefined&&tplNode.scroll.y!==undefined?tplNode.scroll.y:meta.defaultValue;
                    if (tplNode.scroll && tplNode.scroll.y !== undefined) {
                        newFormData[meta.name] = tplNode.scroll.y;
                    }
                    break;
                }
            case "system":
                {
                    //关联系统
                    // if(tplNode.dataprops&&tplNode.dataprops.system) {//先取自身配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = tplNode.dataprops.system.systemCnName;
                    //     meta.defaultValue.code = tplNode.dataprops.system.systemName;
                    //     meta.defaultValue.id = tplNode.dataprops.system.id;
                    // }else if(rootSystem){//再取页面配置的系统对象
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.name = rootSystem.systemCnName;
                    //     meta.defaultValue.code = rootSystem.systemName;
                    //     meta.defaultValue.id = rootSystem.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops.system) {
                        //先取自身配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.system.systemCnName;
                        newFormData[meta.name].code = tplNode.dataprops.system.systemName;
                        newFormData[meta.name].id = tplNode.dataprops.system.id;
                    } else if (rootSystem) {
                        //再取页面配置的系统对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootSystem.systemCnName;
                        newFormData[meta.name].code = rootSystem.systemName;
                        newFormData[meta.name].id = rootSystem.id;
                    }
                    break;
                }
            case "entity":
                {
                    //关联实体
                    // if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=tplNode.dataprops.entity.entityCnName;
                    //     meta.defaultValue.code=tplNode.dataprops.entity.entityFullName;
                    //     meta.defaultValue.id=tplNode.dataprops.entity.id;
                    // }else if(rootEntity){//再取页面配置的实体对象
                    //     meta.defaultValue={};
                    //     meta.defaultValue.name=rootEntity.entityCnName;
                    //     meta.defaultValue.code=rootEntity.entityFullName;
                    //     meta.defaultValue.id=rootEntity.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }

                    if (tplNode.dataprops && tplNode.dataprops.entity) {
                        //先取自身配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = tplNode.dataprops.entity.entityCnName;
                        newFormData[meta.name].code = tplNode.dataprops.entity.entityFullName;
                        newFormData[meta.name].id = tplNode.dataprops.entity.id;
                    } else if (rootEntity) {
                        //再取页面配置的实体对象
                        newFormData[meta.name] = {};
                        newFormData[meta.name].name = rootEntity.entityCnName;
                        newFormData[meta.name].code = rootEntity.entityFullName;
                        newFormData[meta.name].id = rootEntity.id;
                    }
                    break;
                }
            case "fields":
                {
                    break;
                }
            // case "rowKey":{
            //     meta.defaultValue=tplNode.rowKey?tplNode.rowKey:meta.defaultValue;
            //     break;
            // }
            // case "rowMenuIndex":{
            //     meta.defaultValue=tplNode.rowMenuIndex?tplNode.rowMenuIndex:meta.defaultValue;
            //     break;
            // }
            // case "queryUrl":{
            //     meta.defaultValue=tplNode.queryUrl!==undefined?tplNode.queryUrl:meta.defaultValue;
            //     break;
            // }
            // case "deleteUrl":{
            //     meta.defaultValue=tplNode.deleteUrl!==undefined?tplNode.deleteUrl:meta.defaultValue;
            //     break;
            // }
            // case "autoQuery":{
            //     meta.defaultValue=tplNode.autoQuery!==undefined?tplNode.autoQuery:meta.defaultValue;
            //     break;
            // }
            // case "bordered":{
            //     meta.defaultValue=tplNode.bordered!==undefined?tplNode.bordered:meta.defaultValue;
            //     break;
            // }
            // case "pagination":{
            //     meta.defaultValue=tplNode.pagination!==undefined?tplNode.pagination:meta.defaultValue;
            //     break;
            // }
            // case "totalIndex":{
            //     meta.defaultValue=tplNode.totalIndex!==undefined?tplNode.totalIndex:meta.defaultValue;
            //     break;
            // }
            // case "totalText":{
            //     meta.defaultValue=tplNode.totalText!==undefined?tplNode.totalText:meta.defaultValue;
            //     break;
            // }
            // case "dataSource":{
            //     meta.defaultValue=tplNode.dataSource!==undefined?tplNode.dataSource:meta.defaultValue;
            //     break;
            // }
            // case "rowMenus":{
            //     meta.defaultValue=tplNode.rowMenus!==undefined?tplNode.rowMenus:meta.defaultValue;
            //     break;
            // }
        }
    }
    return newFormData;
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加字段',
            //点击快速添加自定义字段
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var count = 1 + (tplNode.children ? tplNode.children.length : 0);
                var uititle = _Defines.UiTitleDef.tablecol + count;
                var uikey = new Date().getTime();
                _Utils2.default.appendNode(tplNode, { uitype: _Defines.UiTypeDef.tablecol, uititle: uititle, title: uititle, uikey: uikey, key: uikey, dataIndex: uikey });
                return true;
            }
        }]
    };
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TableColMeta = __webpack_require__(258);

var _TableColMeta2 = _interopRequireDefault(_TableColMeta);

var _TableColToValues = __webpack_require__(259);

var _TableColToValues2 = _interopRequireDefault(_TableColToValues);

var _TableColValues = __webpack_require__(260);

var _TableColValues2 = _interopRequireDefault(_TableColValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColAdapter = function (_PropAdapter) {
    _inherits(TableColAdapter, _PropAdapter);

    function TableColAdapter() {
        _classCallCheck(this, TableColAdapter);

        return _possibleConstructorReturn(this, (TableColAdapter.__proto__ || Object.getPrototypeOf(TableColAdapter)).apply(this, arguments));
    }

    _createClass(TableColAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TableColAdapter.prototype.__proto__ || Object.getPrototypeOf(TableColAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TableColMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var newFormData = _get(TableColAdapter.prototype.__proto__ || Object.getPrototypeOf(TableColAdapter.prototype), 'onDataToValue', this).call(this, options);
            return Object.assign(newFormData, (0, _TableColValues2.default)(options));
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TableColAdapter.prototype.__proto__ || Object.getPrototypeOf(TableColAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TableColToValues2.default)(options);
        }
    }]);

    return TableColAdapter;
}(_indexDeps.PropAdapter);

exports.default = TableColAdapter;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'width',
        label: '宽度',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'isShow',
        label: '显示',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'color',
        label: '颜色',
        type: _indexDeps.MetaType.Color,
        props: {},
        defaultValue: ''
    }, {
        name: 'fieldtype',
        label: '数据类型',
        help: '定义后端存储的值类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'string', text: '字符串' }, { value: 'date', text: '日期值' }, { value: 'boolean', text: '布尔值' }, { value: 'number', text: '整数值' }, { value: 'currency', text: '精数值' }]
        },
        defaultValue: 'string'
    }];
    PropMeta.push({
        name: 'uisubtype',
        label: '显示类型',
        help: '定义前端特殊的显示方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: '', text: '(无)' }, { value: _FormItemType2.default.inputrefer, text: _Defines.UiTitleDef.inputrefer }, { value: _FormItemType2.default.enumselect, text: _Defines.UiTitleDef.enumselect }, { value: _FormItemType2.default.date, text: _Defines.UiTitleDef.datepicker }]
        },
        defaultValue: ''
    });
    //参照配置
    if (tplNode.uisubtype === _FormItemType2.default.inputrefer) {
        PropMeta.push({
            name: 'referInfo',
            label: '参照编码',
            type: _indexDeps.MetaType.Refer,
            props: {

                refinfokey: '001',
                serverUrl: _indexDeps.SUPPORT_SERVER
            },
            defaultValue: null
        });
    } else //枚举配置
        if (tplNode.uisubtype === _FormItemType2.default.enumselect) {
            PropMeta.push({
                name: 'enumInfo',
                label: '档案编码',
                props: {
                    refinfokey: 'bd-009',
                    serverUrl: _indexDeps.SUPPORT_SERVER

                },
                type: _indexDeps.MetaType.Refer,
                defaultValue: null
            });
        } else //日期配置
            if (tplNode.uisubtype === _FormItemType2.default.date) {
                PropMeta.push({
                    name: 'format',
                    label: '日期格式',
                    type: _indexDeps.MetaType.Select,
                    props: {

                        options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM']
                    },
                    defaultValue: 'yyyy-MM-dd'
                });
            }
    PropMeta = PropMeta.concat([{
        name: 'titleAlign',
        label: '标题对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: 'center'
    }, {
        name: 'align',
        label: '数据对齐',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左对齐' }, { value: 'right', text: '右对齐' }, { value: 'center', text: '居中' }]
        },
        defaultValue: tplNode.fieldtype == 'number' || tplNode.fieldtype == 'currency' ? 'right' : 'left'
    }, {
        name: 'fixed',
        label: '固定冻结',
        help: '注意：启用固定冻结列时需要明确配置各列[宽度]，并配置表格[横向滚动]宽度等于所有显示列宽度之和',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'left', text: '左冻结' }, { value: 'right', text: '右冻结' }, { value: 'noFixed', text: '不冻结' }]
        },
        defaultValue: 'noFixed'
    }, {
        name: 'titleTip',
        label: '标题提示',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'total',
        label: '统计合计',
        help: '默认合计计算本列数据',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }]);
    if (tplNode.total) {
        PropMeta.push({
            name: 'totalDecimal',
            label: '合计精度',
            help: '定义合计数值保留的小数位,默认不保留小数位',
            type: _indexDeps.MetaType.Number,
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: 0
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'colSpan',
        label: '表头合并',
        type: _indexDeps.MetaType.Select,
        props: {

            options: function () {
                var opts = [{ value: -1, text: '不合并' }, { value: 0, text: '被合并' }];
                for (var i = 2; i <= 100; i++) {
                    opts.push({ value: i, text: '合并' + i + "列" });
                }
                return opts;
            }()
        },
        defaultValue: -1
    }]);
    //只有合并N列头才显示表头配置项
    if (tplNode.colSpan > 0) {
        PropMeta.push({
            name: 'titleGroup',
            label: '表头配置',
            type: _indexDeps.MetaType.TitleGroup,
            props: {},
            defaultValue: null
        });
    }
    //千分位配置
    if (tplNode.fieldtype == 'number' || tplNode.fieldtype == 'currency') {
        PropMeta.push({
            name: 'comma',
            label: '千分位',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    //精确类型字段提供精度参数
    if (tplNode.fieldtype === 'currency') {
        PropMeta.push({
            name: 'decimal',
            label: '保留小数',
            type: _indexDeps.MetaType.Number,
            help: '计算或存储的精度小数位（悬浮显示的精度小数位）',
            props: {

                enableSelect: false,
                min: 0,
                max: 10
            },
            defaultValue: null
        }, {
            name: 'showDecimal',
            label: '显示小数',
            help: '显示的小数位，不会影响存储的精度（即直接显示的小数位）',
            type: _indexDeps.MetaType.Select,
            props: {

                options: function () {
                    var list = [{ text: '按保留小数位显示', value: '' }];
                    for (var i = 1; i <= 10; i++) {
                        list.push({ text: '显示' + i + '位', value: i });
                    }
                    return list;
                }()
            },
            defaultValue: undefined
        }, {
            name: 'zeroFilling',
            label: '自动补零',
            help: '小数位是否自动补零',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'precisionConfig',
            label: '精度参数',
            type: _indexDeps.MetaType.EnumSelect,
            props: {

                code: 'precision_config',
                valueKey: 'code'
            },
            defaultValue: null
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'mathFormula',
        label: '计算公式',
        type: _indexDeps.MetaType.MathFormula,
        props: {
            fields: function () {
                //获取父级节点
                var parentNode = _Utils2.default.findParentNode(tplTree, tplNode.nid);
                //获取同级兄弟节点
                var fieldsNode = parentNode && parentNode.children ? parentNode.children : [];
                var fields = [];
                fieldsNode.forEach(function (node, index) {
                    //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                    if (tplNode.nid !== node.nid && !node.mathFormula) {
                        fields.push({ key: node.uikey, title: node.uititle });
                    }
                });
                return fields;
            }() //注意立即执行
        },
        defaultValue: null
    }, {
        name: 'sorterEnable',
        label: '默认排序',
        help: '根据数据类型自动预制排序函数',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'linkUrl',
        label: '链接URL',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'linkType',
        label: '链接方式',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{ value: 'route', text: '当前页面路由' }, { value: '_blank', text: '打开新浏览器窗口' }]
        },
        defaultValue: 'route'
    }, {
        name: 'innerFilter',
        label: '内嵌筛选',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'dummyField',
        label: '虚拟字段',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: false
    }, {
        name: 'orderby',
        label: '查询排序',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '无', value: '' }, { text: '升序', value: 'asc' }, { text: '降序', value: 'desc' }]
        },
        defaultValue: ''
    }]);
    return PropMeta;
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _FormItemType = __webpack_require__(3);

var _FormItemType2 = _interopRequireDefault(_FormItemType);

var _TableUtils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'dataIndex', value);
                    break;
                }
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'uititle', value);
                    break;
                }
            // case "fieldtype":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['date','boolean','number','currency']);
            //     break;
            // }
            case "uisubtype":
                {
                    // meta.defaultValue = value;
                    // LogicUtils.isExistSet(tplNode,meta.name,value);
                    if (tplNode.uisubtype === _FormItemType2.default.date) {
                        tplNode.format = 'yyyy-MM-dd';
                    }
                    break;
                }
            // case "titleAlign":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            case "align":
                {
                    if (tplNode.fieldtype == 'number' || tplNode.fieldtype == 'currency') {
                        value = formData[meta.name] !== undefined ? formData[meta.name] : 'right';
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isIncludeSet(tplNode, meta.name, value, ['left', 'center']); //默认右对齐
                    } else {
                        value = formData[meta.name] !== undefined ? formData[meta.name] : 'left';
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isIncludeSet(tplNode, meta.name, value, ['right', 'center']); //默认左对齐
                    }
                    break;
                }
            // case "isShow":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "total":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            case "totalDecimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.total && value >= 0) {
                        tplNode.totalDecimal = value;
                    } else {
                        delete tplNode.totalDecimal;
                    }
                    break;
                }
            // case "innerFilter":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "dummyField":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "linkUrl":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "linkType":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['_blank']);
            //     break;
            // }
            // case "width":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "colSpan":
                {
                    // 区分被合并,不合并,合并列
                    // meta.defaultValue = value;
                    tplNode.colSpan = value;
                    if (value < 1) {
                        if (value === -1) {
                            delete tplNode.colSpan;
                        }
                        delete tplNode.titleGroup;
                    }
                    break;
                }
            case "titleGroup":
                {
                    if (tplNode.colSpan && tplNode.colSpan > 0) {
                        // meta.defaultValue = value;
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    }
                    break;
                }
            // case "mathFormula":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "color":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            case "orderby":
                {
                    // meta.defaultValue = value;
                    delete tplNode[meta.name];
                    if (value) {
                        tplNode.dataprops.orderby = value;
                    } else {
                        delete tplNode.dataprops.orderby;
                    }
                    break;
                }
            // case "fixed":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isIncludeSet(tplNode,meta.name,value,['left','right']);
            //     break;
            // }
            // case "comma":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            case "decimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.decimal;
                    }
                    break;
                }
            case "showDecimal":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.showDecimal;
                    }
                    break;
                }
            case "zeroFilling":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isFalseSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.zeroFilling;
                    }
                    break;
                }
            case "precisionConfig":
                {
                    // meta.defaultValue = value;
                    if (tplNode.fieldtype == 'currency') {
                        _indexDeps.LogicUtils.isExistSet(tplNode, meta.name, value);
                    } else {
                        delete tplNode.precisionConfig;
                    }
                    break;
                }
            case "referInfo":
                {
                    //参照编码
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && tplNode.uisubtype === _FormItemType2.default.inputrefer) {
                        // meta.defaultValue={};
                        // meta.defaultValue.code = value.refCode ? value.refCode : value.code;
                        // meta.defaultValue.name = value.refName ? value.refName : value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        tplNode.referInfo = {};
                        tplNode.referInfo.code = value.refCode ? value.refCode : value.code;
                        tplNode.referInfo.name = value.refName ? value.refName : value.name;
                        tplNode.referInfo.id = value.refId ? value.refId : value.id;
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.referInfo;
                    }
                    break;
                }
            case "enumInfo":
                {
                    //档案编码
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && tplNode.uisubtype === _FormItemType2.default.enumselect) {
                        // meta.defaultValue = {};
                        // meta.defaultValue.code = value.refCode?value.refCode:value.code;
                        // meta.defaultValue.name = value.refName?value.refName:value.name;
                        // meta.defaultValue.id = value.refId?value.refId:value.id;
                        tplNode.enumInfo = {};
                        tplNode.enumInfo.code = value.refCode ? value.refCode : value.code;
                        tplNode.enumInfo.name = value.refName ? value.refName : value.name;
                        tplNode.enumInfo.id = value.refId ? value.refId : value.id;
                    } else {
                        // meta.defaultValue=null;
                        delete tplNode.enumInfo;
                    }
                    break;
                }
            case "format":
                {
                    //日期格式
                    // meta.defaultValue = value;
                    if (tplNode.uisubtype === _FormItemType2.default.date) {
                        tplNode.format = value;
                    } else {
                        delete tplNode.format;
                    }
                    break;
                }
            // case "sorterEnable":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isTrueSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "titleTip":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
    //级联设置后面相关字段为被合并
    if (tplNode.uitype === _Defines.UiTypeDef.tablecol && tplNode.colSpan > 0) {
        (0, _TableUtils.tableColSpan)(tplTree, tplNode);
    }
};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var newFormData = {}; //处理公共属性
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    tplNode.dataprops = tplNode.dataprops || {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            // case "title":{
            //     meta.defaultValue=tplNode.uititle!==undefined?tplNode.uititle:meta.defaultValue;
            //     break;
            // }
            // case "isShow":{
            //     meta.defaultValue=tplNode.isShow!==undefined?tplNode.isShow:meta.defaultValue;
            //     break;
            // }
            // case "fieldtype":{
            //     meta.defaultValue=tplNode.fieldtype!==undefined?tplNode.fieldtype:meta.defaultValue;
            //     break;
            // }
            // case "uisubtype":{
            //     meta.defaultValue = tplNode.uisubtype!==undefined?tplNode.uisubtype:meta.defaultValue;
            //     break;
            // }
            // case "titleAlign":{
            //     meta.defaultValue=tplNode.titleAlign!==undefined?tplNode.titleAlign:meta.defaultValue;
            //     break;
            // }
            // case "align":{
            //     meta.defaultValue=tplNode.align!==undefined?tplNode.align:meta.defaultValue;
            //     break;
            // }
            // case "total":{
            //     meta.defaultValue=tplNode.total!==undefined?tplNode.total:meta.defaultValue;
            //     break;
            // }
            // case "totalDecimal":{
            //     meta.defaultValue=tplNode.totalDecimal!==undefined?tplNode.totalDecimal:meta.defaultValue;
            //     break;
            // }
            // case "dummyField":{
            //     meta.defaultValue=tplNode.dummyField!==undefined?tplNode.dummyField:meta.defaultValue;
            //     break;
            // }
            // case "width":{
            //     meta.defaultValue=tplNode.width!==undefined?tplNode.width:meta.defaultValue;
            //     break;
            // }
            // case "linkUrl":{
            //     meta.defaultValue=tplNode.linkUrl!==undefined?tplNode.linkUrl:meta.defaultValue;
            //     break;
            // }
            // case "linkType":{
            //     meta.defaultValue=tplNode.linkType!==undefined?tplNode.linkType:meta.defaultValue;
            //     break;
            // }
            // case "innerFilter":{
            //     meta.defaultValue=tplNode.innerFilter!==undefined?tplNode.innerFilter:meta.defaultValue;
            //     break;
            // }
            // case "colSpan":{
            //     meta.defaultValue=tplNode.colSpan!==undefined?tplNode.colSpan:meta.defaultValue;
            //     break;
            // }
            // case "titleGroup":{
            //     meta.defaultValue=tplNode.titleGroup!==undefined?tplNode.titleGroup:meta.defaultValue;
            //     break;
            // }
            // case "mathFormula":{//数学计算公式
            //     meta.defaultValue=tplNode.mathFormula!==undefined?tplNode.mathFormula:meta.defaultValue;
            //     break;
            // }
            // case "color":{
            //     meta.defaultValue=tplNode.color!==undefined?tplNode.color:meta.defaultValue;
            //     break;
            // }
            // case "fixed":{
            //     meta.defaultValue=tplNode.fixed!==undefined?tplNode.fixed:meta.defaultValue;
            //     break;
            // }
            // case "orderby":{
            //    if(tplNode.dataprops&&tplNode.dataprops.orderby){
            //        meta.defaultValue=tplNode.dataprops.orderby;
            //    }else{
            //        meta.defaultValue='';
            //    }
            //    break;
            //}
            // case "comma":{
            //     meta.defaultValue = tplNode.comma !== undefined ? tplNode.comma : meta.defaultValue;
            //     break;
            // }
            // case "decimal":{
            //     meta.defaultValue = tplNode.decimal !== undefined ? tplNode.decimal : meta.defaultValue;
            //     break;
            // }
            // case "showDecimal":{
            //     meta.defaultValue = tplNode.showDecimal!==undefined?tplNode.showDecimal:meta.defaultValue;
            //     break;
            // }
            // case "zeroFilling":{
            //     meta.defaultValue = tplNode.zeroFilling !== undefined ? tplNode.zeroFilling : meta.defaultValue;
            //     break;
            // }
            // case "precisionConfig":{
            //     meta.defaultValue = tplNode.precisionConfig !== undefined ? tplNode.precisionConfig : meta.defaultValue;
            //     break;
            // }
            case "referInfo":
                {
                    //参照信息
                    // if (tplNode.referInfo){
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.code = tplNode.referInfo.code;
                    //     meta.defaultValue.name = tplNode.referInfo.name;
                    //     meta.defaultValue.id = tplNode.referInfo.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode[meta.name] !== undefined) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode[meta.name].id;
                        newFormData[meta.name].code = tplNode[meta.name].code;
                        newFormData[meta.name].name = tplNode[meta.name].name;
                    }
                    break;
                }
            case "enumInfo":
                {
                    //档案信息
                    // if (tplNode.enumInfo){
                    //     meta.defaultValue = {};
                    //     meta.defaultValue.code = tplNode.enumInfo.code;
                    //     meta.defaultValue.name = tplNode.enumInfo.name;
                    //     meta.defaultValue.id = tplNode.enumInfo.id;
                    // }else{
                    //     meta.defaultValue=null;
                    // }
                    if (tplNode[meta.name] !== undefined) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode[meta.name].id;
                        newFormData[meta.name].code = tplNode[meta.name].code;
                        newFormData[meta.name].name = tplNode[meta.name].name;
                    }
                    break;
                }
            // case "format":{//日期格式
            //     meta.defaultValue = tplNode.format!==undefined?tplNode.format:meta.defaultValue;
            //     break;
            // }
            // case "sorterEnable":{
            //     meta.defaultValue=tplNode.sorterEnable!==undefined?tplNode.sorterEnable:meta.defaultValue;
            //     break;
            // }
            // case "titleTip":{
            //     meta.defaultValue=tplNode.titleTip!==undefined?tplNode.titleTip:meta.defaultValue;
            //     break;
            // }
        }
    }
    //清理空对象dataprops
    if (!Object.keys(tplNode.dataprops).length) {
        delete tplNode.dataprops;
    }
    return newFormData;
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TabsMeta = __webpack_require__(262);

var _TabsMeta2 = _interopRequireDefault(_TabsMeta);

var _TabsPage = __webpack_require__(263);

var _TabsPage2 = _interopRequireDefault(_TabsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsAdapter = function (_PropAdapter) {
    _inherits(TabsAdapter, _PropAdapter);

    function TabsAdapter() {
        _classCallCheck(this, TabsAdapter);

        return _possibleConstructorReturn(this, (TabsAdapter.__proto__ || Object.getPrototypeOf(TabsAdapter)).apply(this, arguments));
    }

    _createClass(TabsAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TabsAdapter.prototype.__proto__ || Object.getPrototypeOf(TabsAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TabsMeta2.default)(options));
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _TabsPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return TabsAdapter;
}(_indexDeps.PropAdapter);

exports.default = TabsAdapter;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'defaultActiveKey',
        label: '默认激活',
        type: _indexDeps.MetaType.Select,
        props: {
            options: function () {
                var optionNodes = tplNode.children || [];
                var items = [];
                optionNodes.forEach(function (option) {
                    if (option.visible === false) {
                        //被隐藏的页签不能配置默认激活
                    } else {
                        items.push({
                            value: option.uikey,
                            key: option.uikey,
                            text: option.uititle
                        });
                    }
                });
                return items;
            }(),
            allowClear: true
        },
        defaultValue: ''
    }, {
        name: 'type',
        label: '显示类型',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '线条',
                value: 'line'
            }, {
                text: '圆角',
                value: 'card'
            }, {
                text: '平面',
                value: 'page'
            }]
        },
        defaultValue: 'line'
    }, {
        name: 'size',
        label: '显示尺寸',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '默认',
                value: 'default'
            }, {
                text: '迷你',
                value: 'small'
            }]
        },
        defaultValue: 'default'
    }, {
        name: 'tabPosition',
        label: '页头朝向',
        type: _indexDeps.MetaType.Select,
        props: {

            options: [{
                text: '朝上',
                value: 'top'
            }, {
                text: '朝右',
                value: 'right'
            }, {
                text: '朝下',
                value: 'bottom'
            }, {
                text: '朝左',
                value: 'left'
            }]
        },
        defaultValue: 'top'
    }];
    return PropMeta;
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加页签',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + (tplNode.children ? tplNode.children.length : 0);
                var key = new Date().getTime();
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.tab,
                    uititle: _Defines.UiTitleDef.tab + value,
                    uikey: key,
                    key: key,
                    tab: _Defines.UiTitleDef.tab + value
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _TabMeta = __webpack_require__(265);

var _TabMeta2 = _interopRequireDefault(_TabMeta);

var _TabToValues = __webpack_require__(266);

var _TabToValues2 = _interopRequireDefault(_TabToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabAdapter = function (_PropAdapter) {
    _inherits(TabAdapter, _PropAdapter);

    function TabAdapter() {
        _classCallCheck(this, TabAdapter);

        return _possibleConstructorReturn(this, (TabAdapter.__proto__ || Object.getPrototypeOf(TabAdapter)).apply(this, arguments));
    }

    _createClass(TabAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(TabAdapter.prototype.__proto__ || Object.getPrototypeOf(TabAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _TabMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(TabAdapter.prototype.__proto__ || Object.getPrototypeOf(TabAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _TabToValues2.default)(options);
        }
    }]);

    return TabAdapter;
}(_indexDeps.PropAdapter);

exports.default = TabAdapter;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
  var PropMeta = [{
    name: 'visible',
    label: '显示',
    type: _indexDeps.MetaType.Bool,
    props: {},
    defaultValue: true
  }];
  return PropMeta;
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uikey":
                {
                    // tplNode.key = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'key', value);
                    break;
                }
            case "uititle":
                {
                    // tplNode.tab = value;
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'tab', value);
                    break;
                }
            // case "visible":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

var _RowPage = __webpack_require__(268);

var _RowPage2 = _interopRequireDefault(_RowPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowAdapter = function (_PropAdapter) {
    _inherits(RowAdapter, _PropAdapter);

    function RowAdapter() {
        _classCallCheck(this, RowAdapter);

        return _possibleConstructorReturn(this, (RowAdapter.__proto__ || Object.getPrototypeOf(RowAdapter)).apply(this, arguments));
    }

    _createClass(RowAdapter, [{
        key: 'onPageProps',


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        //配置页面的属性
        value: function onPageProps(options) {
            return (0, _RowPage2.default)(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return RowAdapter;
}(_indexDeps.PropAdapter);

exports.default = RowAdapter;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": [{
            text: '添加格子',
            onClick: function onClick(e, options) {
                var tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var value = 1 + tplNode.children ? tplNode.children.length : 0;
                _Utils2.default.appendNode(tplNode, {
                    uitype: _Defines.UiTypeDef.col,
                    uititle: _Defines.UiTitleDef.col + value
                });
                return true;
            }
        }]
    };
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _ColMeta = __webpack_require__(270);

var _ColMeta2 = _interopRequireDefault(_ColMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColAdapter = function (_PropAdapter) {
    _inherits(ColAdapter, _PropAdapter);

    function ColAdapter() {
        _classCallCheck(this, ColAdapter);

        return _possibleConstructorReturn(this, (ColAdapter.__proto__ || Object.getPrototypeOf(ColAdapter)).apply(this, arguments));
    }

    _createClass(ColAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ColAdapter.prototype.__proto__ || Object.getPrototypeOf(ColAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _ColMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return ColAdapter;
}(_indexDeps.PropAdapter);

exports.default = ColAdapter;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
	var PropMeta = [{
		name: 'span',
		label: '栅格占位',
		type: _indexDeps.MetaType.Number,
		props: {
			min: 0,
			max: 24,
			enableSelect: false
		},
		defaultValue: null
	}];
	return PropMeta;
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _PanelMeta = __webpack_require__(272);

var _PanelMeta2 = _interopRequireDefault(_PanelMeta);

var _PanelToValues = __webpack_require__(273);

var _PanelToValues2 = _interopRequireDefault(_PanelToValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelAdapter = function (_PropAdapter) {
    _inherits(PanelAdapter, _PropAdapter);

    function PanelAdapter() {
        _classCallCheck(this, PanelAdapter);

        return _possibleConstructorReturn(this, (PanelAdapter.__proto__ || Object.getPrototypeOf(PanelAdapter)).apply(this, arguments));
    }

    _createClass(PanelAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(PanelAdapter.prototype.__proto__ || Object.getPrototypeOf(PanelAdapter.prototype), 'onPageMetas', this).call(this, options);
            return baseMetas.concat((0, _PanelMeta2.default)(options));
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(PanelAdapter.prototype.__proto__ || Object.getPrototypeOf(PanelAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _PanelToValues2.default)(options);
        }
    }]);

    return PanelAdapter;
}(_indexDeps.PropAdapter);

exports.default = PanelAdapter;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [{
        name: 'expand',
        label: '展开',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'expandText',
        label: '展开文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '收起'

    }, {
        name: 'collapseText',
        label: '折叠文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: '展开'
    }, {
        name: 'enableHeader',
        label: '显示头部',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }];
    if (tplNode.enableHeader !== false) {
        PropMeta.push({
            name: 'enableCollapse',
            label: '支持折叠',
            type: _indexDeps.MetaType.Bool,
            props: {},
            defaultValue: true
        });
    }
    return PropMeta;
};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexDeps = __webpack_require__(0);

module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "uititle":
                {
                    _indexDeps.LogicUtils.isExistSet(tplNode, 'title', value);
                    break;
                }
            // case "expand":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "expandText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "collapseText":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isExistSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableHeader":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
            // case "enableCollapse":{
            //     // meta.defaultValue = value;
            //     LogicUtils.isFalseSet(tplNode,meta.name,value);
            //     break;
            // }
        }
    }
};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SelectMeta = __webpack_require__(25);

var _SelectMeta2 = _interopRequireDefault(_SelectMeta);

var _SelectToValues = __webpack_require__(40);

var _SelectToValues2 = _interopRequireDefault(_SelectToValues);

var _SelectValues = __webpack_require__(64);

var _SelectValues2 = _interopRequireDefault(_SelectValues);

var _SelectPage = __webpack_require__(275);

var _SelectPage2 = _interopRequireDefault(_SelectPage);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectAdapter = function (_PropAdapter) {
    _inherits(SelectAdapter, _PropAdapter);

    function SelectAdapter() {
        _classCallCheck(this, SelectAdapter);

        return _possibleConstructorReturn(this, (SelectAdapter.__proto__ || Object.getPrototypeOf(SelectAdapter)).apply(this, arguments));
    }

    _createClass(SelectAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SelectAdapter.prototype.__proto__ || Object.getPrototypeOf(SelectAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _SelectMeta2.default)(options);
            return baseMetas.concat(myMetas);
        }
        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {
            return (0, _SelectPage2.default)(options);
        }
        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var baseFormData = _get(SelectAdapter.prototype.__proto__ || Object.getPrototypeOf(SelectAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _SelectValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(SelectAdapter.prototype.__proto__ || Object.getPrototypeOf(SelectAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _SelectToValues2.default)(options);
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

    return SelectAdapter;
}(_indexDeps.PropAdapter);

exports.default = SelectAdapter;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return {
        "buttons": function buttons(opts) {
            if (opts.tplNode.uitype == _Defines.UiTypeDef.select) {
                return [{
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var value = 1 + tplNode.children ? tplNode.children.length : 0;
                        var title = _Defines.UiTitleDef.option + value;
                        var key = new Date().getTime();
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.option,
                            uititle: title,
                            uikey: key,
                            key: key,
                            value: title,
                            children: title
                        });
                        return true;
                    },
                    text: '添加下拉项'
                }];
            } else {
                return null;
            }
        }
    };
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

var _SwitchMeta = __webpack_require__(26);

var _SwitchMeta2 = _interopRequireDefault(_SwitchMeta);

var _SwitchToValues = __webpack_require__(39);

var _SwitchToValues2 = _interopRequireDefault(_SwitchToValues);

var _SwitchValues = __webpack_require__(65);

var _SwitchValues2 = _interopRequireDefault(_SwitchValues);

var _FormInputsToNode = __webpack_require__(4);

var _FormInputsToNode2 = _interopRequireDefault(_FormInputsToNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchAdapter = function (_PropAdapter) {
    _inherits(SwitchAdapter, _PropAdapter);

    function SwitchAdapter() {
        _classCallCheck(this, SwitchAdapter);

        return _possibleConstructorReturn(this, (SwitchAdapter.__proto__ || Object.getPrototypeOf(SwitchAdapter)).apply(this, arguments));
    }

    _createClass(SwitchAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(SwitchAdapter.prototype.__proto__ || Object.getPrototypeOf(SwitchAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = (0, _SwitchMeta2.default)(options);
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
            var baseFormData = _get(SwitchAdapter.prototype.__proto__ || Object.getPrototypeOf(SwitchAdapter.prototype), 'onDataToValue', this).call(this, options);
            var myFormData = (0, _SwitchValues2.default)(options);
            return Object.assign(baseFormData, myFormData);
        }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(SwitchAdapter.prototype.__proto__ || Object.getPrototypeOf(SwitchAdapter.prototype), 'onValueToData', this).call(this, options);
            (0, _SwitchToValues2.default)(options);
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

    return SwitchAdapter;
}(_indexDeps.PropAdapter);

exports.default = SwitchAdapter;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonViewAdapter = function (_ViewAdapter) {
    _inherits(ButtonViewAdapter, _ViewAdapter);

    function ButtonViewAdapter() {
        _classCallCheck(this, ButtonViewAdapter);

        return _possibleConstructorReturn(this, (ButtonViewAdapter.__proto__ || Object.getPrototypeOf(ButtonViewAdapter)).apply(this, arguments));
    }

    _createClass(ButtonViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //点击事件
            if (tplNode.uievents) {
                nodeViews.push({
                    uititle: '已绑定交互事件',
                    uitype: 'icon',
                    type: 'share-alt'
                });
            }
            //隐藏
            if (tplNode.visible == false) {
                nodeViews.push({
                    uititle: '被隐藏',
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return ButtonViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = ButtonViewAdapter;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItemwViewAdapter = function (_ViewAdapter) {
    _inherits(FormItemwViewAdapter, _ViewAdapter);

    function FormItemwViewAdapter() {
        _classCallCheck(this, FormItemwViewAdapter);

        return _possibleConstructorReturn(this, (FormItemwViewAdapter.__proto__ || Object.getPrototypeOf(FormItemwViewAdapter)).apply(this, arguments));
    }

    _createClass(FormItemwViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //必填
            if (tplNode.required == true) {
                nodeViews.push({
                    uititle: '*',
                    uitype: 'span',
                    uialign: 'left',
                    style: { color: 'red' }
                });
            }
            //隐藏
            if (tplNode.visible == false) {
                nodeViews.push({
                    uititle: '被隐藏',
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return FormItemwViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = FormItemwViewAdapter;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColViewAdapter = function (_ViewAdapter) {
    _inherits(TableColViewAdapter, _ViewAdapter);

    function TableColViewAdapter() {
        _classCallCheck(this, TableColViewAdapter);

        return _possibleConstructorReturn(this, (TableColViewAdapter.__proto__ || Object.getPrototypeOf(TableColViewAdapter)).apply(this, arguments));
    }

    _createClass(TableColViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //存在链接
            if (tplNode.linkUrl) {
                nodeViews.push({
                    uititle: '带链接',
                    uitype: 'icon',
                    type: 'link'
                });
            }
            //存在合计
            if (tplNode.total) {
                nodeViews.push({
                    uititle: '统计合计',
                    uitype: 'icon',
                    type: 'calculator'
                });
            }
            //存在合并表头配置
            if (tplNode.colSpan > 0) {
                nodeViews.push({
                    uititle: "表头合并" + tplNode.colSpan + "列",
                    uitype: 'icon',
                    type: 'tags'
                });
            } else if (tplNode.colSpan == 0) {
                //被合并
                nodeViews.push({
                    uititle: "表头被合并",
                    uitype: 'icon',
                    type: 'tag-o'
                });
            }
            //固定列
            if (tplNode.fixed == 'left') {
                nodeViews.push({
                    uititle: "左侧固定",
                    uitype: 'icon',
                    type: 'pushpin'
                });
            } else if (tplNode.fixed == 'right') {
                nodeViews.push({
                    uititle: "右侧固定",
                    uitype: 'icon',
                    type: 'pushpin-o'
                });
            }
            //隐藏列
            if (tplNode.isShow == false) {
                nodeViews.push({
                    uititle: "被隐藏",
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return TableColViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = TableColViewAdapter;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplitPaneViewAdapter = function (_ViewAdapter) {
    _inherits(SplitPaneViewAdapter, _ViewAdapter);

    function SplitPaneViewAdapter() {
        _classCallCheck(this, SplitPaneViewAdapter);

        return _possibleConstructorReturn(this, (SplitPaneViewAdapter.__proto__ || Object.getPrototypeOf(SplitPaneViewAdapter)).apply(this, arguments));
    }

    _createClass(SplitPaneViewAdapter, [{
        key: 'onDataValid',


        //--------------生命周期方法--------------------
        value: function onDataValid(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplChildNode = options.tplChildNode;

            if (tplNode.children && tplNode.children.length >= 2) {
                return {
                    uititle: '2格布局，最多只能添加两个子级(组件)',
                    uitype: 'message',
                    type: 'error'
                };
            }
        }
    }]);

    return SplitPaneViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = SplitPaneViewAdapter;

/***/ })
/******/ ]));;