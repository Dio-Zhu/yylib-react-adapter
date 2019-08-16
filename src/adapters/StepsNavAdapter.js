import {PropAdapter} from '../index-deps';
import StepsNavMeta from '../settings/stepsnav/StepsNavMeta';
import StepsNavToValues from '../settings/stepsnav/StepsNavToValues';
import StepsNavPage from '../settings/stepsnav/StepsNavPage';
export default class StepsNavAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(StepsNavMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return StepsNavPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        StepsNavToValues(options);
    }
}