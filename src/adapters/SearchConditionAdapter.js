import {PropAdapter} from '../index-deps';
import SearchConditionMeta from '../settings/searchcondition/SearchConditionMeta';
import SearchConditionToValues from '../settings/searchcondition/SearchConditionToValues';
import SearchConditionValues from '../settings/searchcondition/SearchConditionValues';
import SearchConditionPage from '../settings/searchcondition/SearchConditionPage';
export default class SearchConditionAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(SearchConditionMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return SearchConditionPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,SearchConditionValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        SearchConditionToValues(options);
    }
}