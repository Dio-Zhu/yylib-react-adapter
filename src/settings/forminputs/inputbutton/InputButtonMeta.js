import {MetaType} from '../../../index-deps';
module.exports = function(options) {
    var {tplNode} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.inputbutton){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.inputbutton||
    //     tplNode.uitype == UiTypeDef.formitemw) {
        PropMeta = PropMeta.concat([
            {
                name: 'type',
                label: '颜色',
                type: MetaType.Select,
                help:'按钮的填充颜色',
                props: {

                    options:[{text:'灰色',value:'default'},{text:'蓝色',value:'primary'},{text:'绿色',value:'success'},{text:'红色',value:'error'},{text:'黄色',value:'warning'}]
                },
                defaultValue: 'default'
            },{
                name: 'disabled',
                label: '是否禁用',
                type: MetaType.Bool,
                props: {

                    checkedChildren: "是",
                    unCheckedChildren: "否",
                },
                defaultValue: false
            // },{
            //     name: 'size',
            //     label: '尺寸',
            //     type: MetaType.Select,
            //     props: {
            //
            //         options:['large','default','small']
            //     },
            //     defaultValue:'default'
            },{
                name: 'buttonText',
                label: '按钮文本',
                type: MetaType.Text,
                props: {

                },
                defaultValue:'搜索'
            },{
                name: 'buttonIcon',
                label: '按钮图标',
                type: MetaType.Icon,
                props: {

                },
                defaultValue:null
            }
        ]);
    // }

    return PropMeta;
}