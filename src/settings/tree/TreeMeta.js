import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [ {
        name: 'header',
        label: '头部标题',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    },{
        name: 'checkable',
        label: '支持勾选',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'multiple',
        label: '支持多选',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'draggable',
        label: '支持拖拽',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'bordered',
        label: '显示边框',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'showLine',
        label: '显示线条',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'searchFilter',
        label: '启用搜索',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'placeholder',
        label: '搜索提示',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    },{
        name: 'height',
        label: '固定高度',
        height: '树内容体的固定高度值，当实际内容超出本高度后将显示滚动条',
        type: MetaType.Number,
        props: {enableSlider:false,enableSelect:false,min:null,max:null},
        defaultValue:null
    }];

    return PropMeta;
}
