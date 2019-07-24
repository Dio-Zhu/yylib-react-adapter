import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [{
        name: 'defaultActiveKey',
        label: '默认激活',
        type: MetaType.Select,
        props: {
            options:function(){
                var optionNodes = tplNode.children||[];
                var items = [];
                optionNodes.forEach(function(option){
                    if(option.visible===false){
                        //被隐藏的页签不能配置默认激活
                    }else{
                        items.push({
                            value:option.uikey,
                            key:option.uikey,
                            text:option.uititle
                        });
                    }
                });
                return items;
            }(),
            allowClear:true
        },
        defaultValue: ''
    },{
        name: 'type',
        label: '显示类型',
        type: MetaType.Select,
        props: {

            options:[{
                text:'线条',
                value:'line'
            },{
                text:'圆角',
                value:'card'
            },{
                text:'平面',
                value:'page'
            }]
        },
        defaultValue: 'line'
    },{
        name: 'size',
        label: '显示尺寸',
        type: MetaType.Select,
        props: {

            options:[{
                text:'默认',
                value:'default'
            },{
                text:'迷你',
                value:'small'
            }]
        },
        defaultValue: 'default'
    },
    {
        name: 'tabPosition',
        label: '页头朝向',
        type: MetaType.Select,
        props: {

            options:[{
              text:'朝上',
              value:'top'
            },{
              text:'朝右',
              value:'right'
            },{
              text:'朝下',
              value:'bottom'
            },{
              text:'朝左',
              value:'left'
            }]
        },
        defaultValue: 'top'
    }];
    return PropMeta;
}
