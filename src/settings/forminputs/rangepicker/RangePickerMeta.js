import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.rangepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.rangepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
        PropMeta = PropMeta.concat([//日期范围选择器扩展的配置
            {
                name: 'format',
                label: '日期格式',
                type: MetaType.Select,
                props: {

                    options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日','yyyy年MM月', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM', 'yyyy'],
                    showSearch: true
                },
                defaultValue: 'yyyy-MM-dd'
            }, {
                name: 'showTime',
                label: '时间选择',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }
        ]);
    // }

    return PropMeta;
}