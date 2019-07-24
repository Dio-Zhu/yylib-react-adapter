import {MetaType} from '../../index-deps';

module.exports = function(options){
    var {tplNode,tplTree} = options;
    var PropMeta = [{
        name: 'backSelect',
        label: '返回方式',
        type: MetaType.Select,
        props: {
            options:[
                {
                    text:'返回列表',
                    value:'list'
                },{
                    text:'上一次页面',
                    value:'prev'
                }
            ]
        },
        defaultValue: 'list'
    }];
    return PropMeta;
}