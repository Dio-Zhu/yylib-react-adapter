import {PropAdapter} from '../index-deps';
import SearchSchemeMeta from '../settings/searchcondition/SearchSchemeMeta';
import SearchSchemeToValues from '../settings/searchcondition/SearchSchemeToValues';
import SearchSchemeValues from '../settings/searchcondition/SearchSchemeValues';
export default class SearchSchemeAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(SearchSchemeMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,SearchSchemeValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        SearchSchemeToValues(options);
    }
}