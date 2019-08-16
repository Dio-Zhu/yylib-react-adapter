import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name: 'src',
        label: '链接地址',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    },{
        name: 'width',
        label: '宽度',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    },{
        name: 'height',
        label: '高度',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    },{
        name: 'scrolling',
        label: '支持滚动',
        type: MetaType.Select,
        props: {

            options:[{text:'自动',value:'auto'},{text:'固定滚动',value:'yes'},{text:'不可滚动',value:'no'}]
        },
        defaultValue: 'auto'
    },{
        name: 'frameBorder',
        label: '显示边框',
        type: MetaType.Select,
        props: {

            options:[{text:'显示',value:1},{text:'不显示',value:0}]
        },
        defaultValue: 1
    }];
    return PropMeta;
}