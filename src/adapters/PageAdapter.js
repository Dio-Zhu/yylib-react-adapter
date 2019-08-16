import {PropAdapter} from '../index-deps';
import PageMeta from '../settings/page/PageMeta';
import PageToValues from '../settings/page/PageToValues';
import PageValues from '../settings/page/PageValues';
export default class PageAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(PageMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,PageValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        PageToValues(options);
    }
}