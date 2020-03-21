import MyPropAdapter from '../MyPropAdapter';
import TreeMeta from '../settings/tree/TreeMeta';
import TreePage from '../settings/tree/TreePage';
import TreeToValues from '../settings/tree/TreeToValues';
export default class TreeAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(TreeMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return TreePage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        TreeToValues(options);
    }
}