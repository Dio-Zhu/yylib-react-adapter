import {PropAdapter} from '../index-deps';
import BreadcrumbItemMeta from '../settings/breadcrumb/BreadcrumbItemMeta';
import BreadcrumbItemToValues from '../settings/breadcrumb/BreadcrumbItemToValues';
export default class BreadcrumbItemAdapter extends PropAdapter{
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(BreadcrumbItemMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        BreadcrumbItemToValues(options);
    }
}