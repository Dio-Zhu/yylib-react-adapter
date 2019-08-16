import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name: 'width',
        label: '宽度',
        type: MetaType.Number,
        props: {
            selectValue:'px',
            selectOptions:['px','%'],

            min:null,//滑条最小值
            max:null,//滑条最大值
            enableSlider:false,
            enableSelect:true
        },
        defaultValue: '400px'
    },{
        name: 'height',
        label: '高度',
        type: MetaType.Number,
        props: {
            selectValue:'px',
            selectOptions:['px','%'],

            min:null,//滑条最小值
            max:null,//滑条最大值
            enableSlider:false,
            enableSelect:true
        },
        defaultValue: '400px'
    }];

    return PropMeta;
}