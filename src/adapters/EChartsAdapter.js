import {PropAdapter} from '../index-deps';
import EChartsMeta from '../settings/echarts/EChartsMeta';
import EChartsValues from '../settings/echarts/EChartsValues';
import EChartsToValues from '../settings/echarts/EChartsToValues';
export default class EChartsAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(EChartsMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,EChartsValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        EChartsToValues(options);
    }
}