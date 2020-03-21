import MyPropAdapter from '../MyPropAdapter';
import FormwMeta from '../settings/formw/FormwMeta';
import FormwToValues from '../settings/formw/FormwToValues';
import FormwValues from '../settings/formw/FormwValues';
import FormwPage from '../settings/formw/FormwPage';
export default class FormwAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(FormwMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return FormwPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,FormwValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        FormwToValues(options);
    }
}