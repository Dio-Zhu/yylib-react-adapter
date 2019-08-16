import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.editor){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.editor
    //   ||tplNode.uitype == UiTypeDef.formitemw
    // ) {
        PropMeta = PropMeta.concat([//扩展的配置
            {
                name: 'icons',
                label: '工具配置',
                type: MetaType.EditorIcons,
                props: {},
                defaultValue: null
            }
        ]);
    // }
    return PropMeta;
};