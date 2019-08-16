import {MetaType,SUPPORT_SERVER} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.imageupload){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.imageupload||tplNode.uitype == UiTypeDef.formitemw||tplNode.uitype == UiTypeDef.edititemw
    // ) {
        PropMeta = PropMeta.concat([
            {
                name:'buttonText',
                label:'按钮文本',
                type: MetaType.Text,
                props: {

                },
                defaultValue: '点击上传'
            },{
                name: 'maxCount',
                label: '图片数量',
                help: '限制上传的最大图片数量，必须大于等于1才生效，0即无限制数量',
                type: MetaType.Number,
                props: {

                    enableSlider:false,
                    enableSelect: false,
                },
                defaultValue: ''
            },{
                name: 'maxWidth',
                label: '限制宽度',
                help: '上传图片的尺寸宽度超过限制值时不允许上传',
                type: MetaType.Number,
                props: {

                    enableSlider:false,
                    enableSelect: false,
                    max:9999
                },
                defaultValue: null
            },{
                name: 'maxHeight',
                label: '限制高度',
                help: '上传图片的尺寸高度超过限制值时不允许上传',
                type: MetaType.Number,
                props: {

                    enableSlider:false,
                    enableSelect: false,
                    max:9999
                },
                defaultValue: null
            },{
                name: 'maxType',
                label: '限制类型',
                help: '上传图片的尺寸限制类型，当限制宽度、限制高度被设置时才生效',
                type: MetaType.Select,
                props: {

                    options: [{text: '固定尺寸', value: 0}, {text: '尺寸范围内', value:1}]
                },
                defaultValue: 0
            },{
                name: 'billType',
                label: '单据类型',
                type: MetaType.Refer,
                props: {

                    refinfokey: 'bill_001',
                    serverUrl: SUPPORT_SERVER
                },
                defaultValue: null
            },{
                name:'sourceType',
                label:'业务类型',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            },{
                name: 'deleteTip',
                label: '删除提示',
                help:'默认提示内容“删除的附件不可恢复！确定要删除？”',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            }
        ]);
    // }
    return PropMeta;
}
