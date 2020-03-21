import MyPropAdapter from '../../MyPropAdapter';
import CPFilterRowMeta from '../../settings/compact/CPFilterRowMeta';
import CPFilterRowToValues from '../../settings/compact/CPFilterRowToValues';
import CPFilterRowValues from '../../settings/compact/CPFilterRowValues';
import CPFilterRowPage from '../../settings/compact/CPFilterRowPage';
export default class CPFilterRowAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(CPFilterRowMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return CPFilterRowPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,CPFilterRowValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CPFilterRowToValues(options);
    }
}