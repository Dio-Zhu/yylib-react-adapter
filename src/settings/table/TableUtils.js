import Utils from '../../Utils';
var TableUtils = {
    /**
     * 处理表格列合并的联动问题,当前节点为YYTableCol时触发
     */
    tableColSpan:function (treeNode,currNode){
        var parentNode = Utils.findParentNode(treeNode,currNode.nid);
        var children = parentNode&&parentNode.children?parentNode.children:[];
        var index = Array.findIndex(children,(node)=>node.nid === currNode.nid);
        var colSpan = currNode.colSpan;
        if(index>-1&&colSpan>=0){
            children.forEach((child,i)=>{
                if(i>index&&i<index + colSpan){
                    child.colSpan = 0;
                }
            })
        }
    }
};
module.exports = TableUtils;