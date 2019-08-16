import {UiTitleDef,FormItemType} from '../../Defines';
import {MetaType,SUPPORT_SERVER} from '../../index-deps';
import FormInputsMeta from '../forminputs/FormInputsMeta';
const operations = {
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
    var options = []
    for (var key in operations) {
        if (operations.hasOwnProperty(key)) {
            options.push({text: operations[key], value: key})
        }
    }
    return options
}
module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [ {
        name: 'fieldtype',
        label: '字段类型',
        type: MetaType.Select,
        props: {

            options: [
                {text: '字符串', value: 'string'},
                {text: '字符串数组', value: 'arraystring'},
                {text: '数字', value: 'number'},
                {text: '精确数值', value: 'currency'},
                {text: '日期',value: 'date'},
                {text: '布尔', value: 'boolean'}
            ]
        },
        defaultValue: 'string'
    }, {
        name: 'inputtype',
        label: '输入方式',
        type: MetaType.Select,
        props: {

            options: [
                {value: FormItemType.input, text: UiTitleDef.input},
                {value: FormItemType.date, text: UiTitleDef.datepicker},
                {value: FormItemType.inputrefer, text: UiTitleDef.inputrefer},
                {value: FormItemType.switch, text: UiTitleDef.switch},
                {value: FormItemType.select, text: UiTitleDef.select},
                {value: FormItemType.enumselect, text: UiTitleDef.enumselect},
                {value: FormItemType.number, text: UiTitleDef.inputnumber},
                {value: FormItemType.currency, text: UiTitleDef.currency},
                {value: FormItemType.autoselect, text: UiTitleDef.autoselect},
            ]
        },
        defaultValue: FormItemType.input
    }, {
        name: 'oper',
        label: '操作集合',
        type: MetaType.Select,
        props: {

            multiple: true,
            options: makeOpers(operations)
        },
        defaultValue: []
    }, {
        name: 'hidden',
        label: '隐藏条件',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    }, {
        name: 'required',
        label: '必填条件',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    }, {
        name: 'readonly',
        label: '必填只读',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    }, {
        name: 'enableSearch',
        label: '支持搜索',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }, {
        name: 'enableOrder',
        label: '支持排序',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    },{
        name: 'preFunction',
        label: '预置函数',
        type: MetaType.Refer,
        props: {

            refinfokey: 'defdoc-query-treegrid',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    }];
    // 获取全部FormInputType对应的配置
    var inputsPropMeta = FormInputsMeta(options);
    // 获取当前inputtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.inputtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta?PropMeta.concat(uisubtypeMeta):PropMeta;
    return formMeta;
}