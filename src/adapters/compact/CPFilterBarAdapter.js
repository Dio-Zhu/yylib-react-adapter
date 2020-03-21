import MyPropAdapter from '../../MyPropAdapter';
import CPFilterBarMeta from '../../settings/compact/CPFilterBarMeta';
import CPFilterBarPage from '../../settings/compact/CPFilterBarPage';
export default class CPFilterBarAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(CPFilterBarMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return CPFilterBarPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    // //值转换为数据的适配
    // onValueToData(options){
    //      super.onValueToData(options);
    // }
}