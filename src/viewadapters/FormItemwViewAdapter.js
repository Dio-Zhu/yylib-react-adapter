import {ViewAdapter} from '../index-deps';
export default class FormItemwViewAdapter extends ViewAdapter{

    //--------------生命周期方法--------------------
    //数据节点视图
    onDataView(options){
        var {tplNode,tplTree} = options;
        var nodeViews = [];
        //必填
        if(tplNode.required==true){
            nodeViews.push({
                uititle:'*',
                uitype:'span',
                uialign:'left',
                style:{color:'red'}
            })
        }
        //隐藏
        if(tplNode.visible==false){
            nodeViews.push({
                uititle:'被隐藏',
                uitype:'icon',
                type:'eye-o'
            })
        }
        return nodeViews;
    }
}