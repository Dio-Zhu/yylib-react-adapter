import {ViewAdapter} from '../index-deps';
export default class SplitPaneViewAdapter extends ViewAdapter{

    //--------------生命周期方法--------------------
    onDataValid(options){
        let {tplTree,tplNode,tplChildNode} = options;
        if(tplNode.children&&tplNode.children.length>=2){
            return {
                uititle:'2格布局，最多只能添加两个子级(组件)',
                uitype:'message',
                type:'error'
            };
        }
    }
}