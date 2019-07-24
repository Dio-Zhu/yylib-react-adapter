import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name: 'icon',
        label: '图标',
        type: MetaType.Icon,
        props: {

        },
        defaultValue: null
    },{
        name: 'color',
        label: '颜色',
        type: MetaType.Select,
        props: {

            options:[
                {
                    text:'黑色',
                    value:'black'
                },{
                    text:'蓝色',
                    value:'blue'
                },{
                    text:'红色',
                    value:'red'
                }
            ]
        },
        defaultValue: 'black'
    },{
        name: 'visible',
        label: '是否显示',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    },{
        name: 'align',
        label: '排列方式',
        type: MetaType.Select,
        props: {

            options:[{
              text:'从左侧排列',
              value:'left'
            },{
              text:'从右侧排列',
              value:'right'
            }]
        },
        defaultValue: 'left'
    }];
    return PropMeta;
}