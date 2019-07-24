import {LogicUtils} from '../../index-deps';
module.exports = {
    //搜索项的toValues处理逻辑
    isSearchItemToValues:function(options){
        let {meta,tplNode,value} = options;
        delete tplNode[meta.name];
        if(meta.defaultValue===value){
            delete tplNode.inputprops[meta.name];
        }else{
            LogicUtils.isExistSet(tplNode.inputprops, meta.name, value);
        }
    }
};