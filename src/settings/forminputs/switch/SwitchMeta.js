import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.switch){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.switch||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw||
    //     tplNode.uitype == UiTypeDef.searchitem
    // ) {
        PropMeta = PropMeta.concat([
            {
                name: 'defaultChecked',
                label: '是否选中',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false

            }
            , {
                name: 'checkedChildren',
                label: '选中显示',
                type: MetaType.Text,
                help:'注意只能为一个汉字，例如：“是”“开”',
                props: {

                },
                defaultValue: ''
            }, {
                name: 'unCheckedChildren',
                label: '非选中显示',
                type: MetaType.Text,
                help:'注意只能为一个汉字，例如：“否”“关”',
                props: {

                },
                defaultValue: ''
            }
        ]);
    // }

    return PropMeta;
}