import {ViewAdapter} from '../index-deps';
export default class TableColViewAdapter extends ViewAdapter{

    //--------------生命周期方法--------------------
    //数据节点视图
    onDataView(options){
        var {tplNode,tplTree} = options;
        var nodeViews = [];
        //存在链接
        if(tplNode.linkUrl){
            nodeViews.push({
                uititle:'带链接',
                uitype:'icon',
                type:'link'
            })
        }
        //存在合计
        if(tplNode.total){
            nodeViews.push({
                uititle:'统计合计',
                uitype:'icon',
                type:'calculator'
            })
        }
        //存在合并表头配置
        if(tplNode.colSpan>0){
            nodeViews.push({
                uititle:"表头合并"+tplNode.colSpan+"列",
                uitype:'icon',
                type:'tags'
            })
        }else if(tplNode.colSpan==0){//被合并
            nodeViews.push({
                uititle:"表头被合并",
                uitype:'icon',
                type:'tag-o'
            })
        }
        //固定列
        if(tplNode.fixed=='left'){
            nodeViews.push({
                uititle:"左侧固定",
                uitype:'icon',
                type:'pushpin'
            })
        }else if(tplNode.fixed=='right'){
            nodeViews.push({
                uititle:"右侧固定",
                uitype:'icon',
                type:'pushpin-o'
            })
        }
        //隐藏列
        if(tplNode.isShow==false){
            nodeViews.push({
                uititle:"被隐藏",
                uitype:'icon',
                type:'eye-o'
            })
        }
        return nodeViews;
    }
}