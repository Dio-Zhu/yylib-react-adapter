import {MetaType,SUPPORT_SERVER} from '../../index-deps';

module.exports = function (options) {
    const PropMeta = [
        {
            name: 'type',
            label: '输入方式',
            type: MetaType.Select,
            props: {

                options: [
                    {value: 'input', text: '标签'},
                    {value: 'number', text: '范围'},
                    {value: 'date', text: '日期'},
                    {value: 'range', text: '日期范围'},
                ]
            },
            defaultValue: {value: 'text', text: '标签'}
        },
        {
            name: 'compare',
            label: '运算符',
            type: MetaType.Select,
            props: {

                options: [
                    {value: 'eq', text: '等于'},
                    {value: 'ne', text: '不等于'},
                    {value: 'lt', text: '小于'},
                    {value: 'le', text: '小于等于'},
                    {value: 'gt', text: '大于'},
                    {value: 'ge', text: '大于等于'},
                    {value: 'bw', text: '开始于'},
                    {value: 'in', text: '属于'},
                    {value: 'ni', text: '不属于'},
                    {value: 'cn', text: '包含'},
                    {value: 'bt', text: '介于'},
                ]
            },
            defaultValue: {value: 'eq', text: '等于'}
        },
        {
            name: 'text',
            label: '元素名称',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        },
        {
            name: 'value',
            label: '元素值',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        },
        {
            name: 'disabled',
            label: '禁用',
            type: MetaType.Bool,
            props: {

            },
            defaultValue: false
        },
        {
            name: 'preFunction',
            label: '预置函数',
            type: MetaType.Refer,
            props: {

                refinfokey: 'defdoc-query-treegrid',
                serverUrl: SUPPORT_SERVER
            },
            defaultValue: null
        }
    ];
    return PropMeta;
};
