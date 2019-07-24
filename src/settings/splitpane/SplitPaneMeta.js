import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [
    {
        name: 'minSize',
        label: '最小尺寸',
        type: MetaType.Number,
        props: {

            enableSelect:false,
            enableSlider:false,
            min:0,
            max:null
        },
        help: '分割方向是horizontal时尺寸代表高度，vertical时尺寸代表宽度',
        defaultValue: null
    },{
        name: 'maxSize',
        label: '最大尺寸',
        type: MetaType.Number,
        props: {

            enableSelect:false,
            enableSlider:false,
            min:0,
            max:null
        },
        help: '分割方向是horizontal时尺寸代表高度，vertical时尺寸代表宽度',
        defaultValue: null
    },{
        name: 'step',
        label: '拖动步长',
        type: MetaType.Number,
        help: '拖动尺寸时的步长距离',
        props: {

            enableSelect:false,
            min:1,
            max:1000
        },
        defaultValue: 1
    },{
        name:'split',
        label: '布局方向',
        type: MetaType.Select,
        help: '最多只能挂两个子级，两个子级会按左右或上下两种方式进行排列',
        props: {

            options:[{text:'左右排列',value:'vertical'}, {text:'上下排列',value:'horizontal'}]
        },
        defaultValue:'vertical'
    }, {
        name:'defaultSize',
        label:'默认尺寸',
        type: MetaType.Number,
        props:{

            enableSelect:false,
            enableSlider:false,
            min:0,
            max:null
        },
        help: '左右分区(horizontal)时尺寸代表高度，上下分区(vertical)时尺寸代表宽度',
        defaultSize:300
    }];
    return PropMeta;

}