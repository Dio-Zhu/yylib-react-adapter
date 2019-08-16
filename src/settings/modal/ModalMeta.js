import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [
    {
        name: 'visible',
        label: '窗口显示',
        labelStyle:{color:"red"},
        help:'弹出窗口默认是不显示的，需要动态代码来配合控制显示，例如： this.findUI("myDialog").visible=true; this.refresh(); 运行态时执行以上代码控制其显示,其中"myDialog"为弹窗的键值。(此效果只有在运行态时才生效)',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    },
    {
        name: 'title',
        label: '窗口标题',
        help:'窗口左上角显示的标题文本',
        type: MetaType.Text,
        props: {

        },
        defaultValue:null
    },
    {
        name: 'width',
        label: '窗口宽度',
        type: MetaType.Number,
        help:'将值清空，使用默认宽度(520px)',
        props: {

            enableSlider:false,
            selectValue:'px',
            selectOptions:['px','%'],
            max:null
        },
        defaultValue: null
    },
    {
        name: 'okText',
        label: '确定文本',
        type: MetaType.Text,
        help:'自定义“确定”按钮文本',
        props: {

        },
        defaultValue:null
    },
    {
        name: 'cancelText',
        label: '取消文本',
        type: MetaType.Text,
        help:'自定义“取消”按钮文本',
        props: {

        },
        defaultValue:null
    },
    {
        name: 'closable',
        label: '显示关闭',
        help:'窗口右上角是否显示关闭按钮(此效果只有在运行态时才生效)',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    },{
        name: 'draggable',
        label: '拖拽移动',
        help:'窗口顶部区域按住鼠标是否可以进行拖拽移动(此效果只有在运行态时才生效)',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    },{
        name: 'maskClosable',
        label: '蒙层响应',
        help:'点击蒙层是否自动关闭窗口，如果需要模态窗口，将此设置为：否。(此效果只有在运行态时才生效)',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }];
    return PropMeta;
}