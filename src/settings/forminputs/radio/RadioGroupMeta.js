import {MetaType} from '../../../index-deps';
module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.radiogroup){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.radiogroup||
    //     tplNode.uitype == UiTypeDef.formitemw||
    //     tplNode.uitype == UiTypeDef.edititemw
    // ) {
        PropMeta = PropMeta.concat([{
            name: 'defaultValue',
            label: '默认选中',
            type: MetaType.Select,
            props: {
                options:function(){
                    let items = [];
                    (tplNode.children||[]).forEach((item,index)=>{
                        items.push({
                            value:item.uikey,
                            text:item.children,
                            key:item.uikey
                        });
                    });
                    return items;
                }(),//注意立即执行
                allowClear:true
            },
            defaultValue:undefined
        }]);
    // }
    return PropMeta;
}