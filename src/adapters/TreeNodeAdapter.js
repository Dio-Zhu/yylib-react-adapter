import {PropAdapter} from '../index-deps';
import TreeNodeMeta from '../settings/tree/TreeNodeMeta';
import TreeNodePage from '../settings/tree/TreeNodePage';
import TreeNodeToValues from '../settings/tree/TreeNodeToValues';
export default class TreeNodeAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(TreeNodeMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return TreeNodePage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        TreeNodeToValues(options);
    }
}