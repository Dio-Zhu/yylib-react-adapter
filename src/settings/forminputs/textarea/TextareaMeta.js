import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.textarea){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.textarea||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
        PropMeta = PropMeta.concat([//文本域扩展配置
            {
                name: 'autosize',
                label: '自动高度',
                type: MetaType.Bool,
                props: {},
                defaultValue: false
            }]);
        if(tplNode.autosize){
            PropMeta = PropMeta.concat([
                {
                    name: 'minRows',
                    label: '最小行高',
                    help: '保留至少几行文字的高度',
                    type: MetaType.Number,
                    props: {

                        enableSlider: false,
                        enableSelect: false
                    },
                    defaultValue: ''
                }, {
                    name: 'maxRows',
                    label: '最大行高',
                    help: '当文字行数超过最大行高时，文本框高度不再增加，而将出现水平滚动条',
                    type: MetaType.Number,
                    props: {

                        enableSlider: false,
                        enableSelect: false
                    },
                    defaultValue: ''
                }
            ]);
        }
        PropMeta = PropMeta.concat([{
                name: 'maxLength',
                label: '限制长度',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            },{
                name: 'placeholder',
                label: '置空提示',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            },{
                name:'showTitle',
                label:'提示文本',
                type:MetaType.Bool,
                props: {},
                defaultValue: true
            }
        ]);
    // }

    return PropMeta;
}