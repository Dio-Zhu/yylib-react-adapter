import MyPropAdapter from '../MyPropAdapter';
import SearchItemMeta from '../settings/searchcondition/SearchItemMeta';
import SearchItemToValues from '../settings/searchcondition/SearchItemToValues';
import SearchItemValues from '../settings/searchcondition/SearchItemValues';
import SearchItemPage from '../settings/searchcondition/SearchItemPage';
export default class SearchItemAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(SearchItemMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return SearchItemPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,SearchItemValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        SearchItemToValues(options);
    }
}