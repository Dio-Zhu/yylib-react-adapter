import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.timepicker){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.timepicker||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
        PropMeta = PropMeta.concat([//日期扩展的配置
            {
                name: 'placeholder',
                label: '置空提示',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            }, {
                name: 'format',
                label: '时间格式',
                type: MetaType.Select,
                props: {

                    options: ['HH:mm:ss','HH:mm','mm:ss'],
                    showSearch: true
                },
                defaultValue: 'HH:mm:ss'
            }, {
                name:'hideDisabledOptions',
                label:'隐藏禁止项',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }
        ]);
    // }

    return PropMeta;
}