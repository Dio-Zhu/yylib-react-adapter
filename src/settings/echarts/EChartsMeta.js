import {MetaType} from '../../index-deps';

module.exports = function (options) {
    const PropMeta = [
        {
            name: 'title.text',
            label: '主标题文本',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        },
        {
            name: 'xAxis.type',
            label: 'x坐标轴类型',
            type: MetaType.Select,
            props: {
                options: [
                    {value: 'value', text: '数据轴'},
                    {value: 'category', text: '类目轴'},
                    {value: 'time', text: '时间轴'},
                    {value: 'log', text: '对数轴'}
                ]
            },
            defaultValue: 'category'
        },
        {
            name: 'yAxis.type',
            label: 'y坐标轴类型',
            type: MetaType.Select,
            props: {

                options: [
                    {value: 'value', text: '数据轴'},
                    {value: 'category', text: '类目轴'},
                    {value: 'time', text: '时间轴'},
                    {value: 'log', text: '对数轴'}
                ]
            },
            defaultValue: 'value'
        },
        {
            name: 'series.type',
            label: '图标类型',
            type: MetaType.Select,
            props: {

                options: [
                    {value: 'line', text: '折线图'},
                    {value: 'bar', text: '柱状图'},
                    {value: 'pie', text: '饼状图'},
                ]
            },
            defaultValue: 'line'
        },
        {
            name: 'xAxis.data',
            label: 'x轴数据',
            type: MetaType.EChartData,
            props: {

                title: 'x轴数据编辑'
            },
            defaultValue: []
        },
        {
            name: 'yAxis.data',
            label: 'y轴数据',
            type: MetaType.EChartData,
            props: {

                title: 'y轴数据编辑'
            },
            defaultValue: []
        },
        {
            name: 'series',
            label: '本地数据',
            type: MetaType.EChartData,
            props: {

                title: '本地数据'
            },
            defaultValue: []
        },
        {
            name: 'options',
            label: '复杂配置',
            type: MetaType.EChartData,
            props: {

                title: '原始数据体'
            },
            defaultValue: {}
        },
        {
            name: 'remoteUrl',
            label: '服务数据地址',
            type: MetaType.Text,
            props: {

            },
            defaultValue: ''
        }
    ];
    return PropMeta;
};