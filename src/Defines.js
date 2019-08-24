/**
 * UI枚举定义
 */
//常用
var UiTypeDef = {};//定义uitype值,uitype标识元素类型
var UiTitleDef = {};//定义uititle值,uititle标识元素名称
var UiDefaultDef = {};//定义uidefault值,uidefault预置元素默认属性值
var UiIconDef = {};//定义uiicon值,uiicon为元素图标名称

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
UiDefaultDef.scrollbar = {width:300,height:300};
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
UiDefaultDef.formw = {colnumber:2};

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
UiDefaultDef.currency = {type:'currency'};

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
    UiTypeDef,
    UiTitleDef,
    UiDefaultDef,
    UiIconDef
};
