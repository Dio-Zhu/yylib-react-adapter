import {PropAdapter} from '../index-deps';
import TableColMeta from '../settings/table/TableColMeta';
import TableColToValues from '../settings/table/TableColToValues';
import TableColValues from '../settings/table/TableColValues';
export default class TableColAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(TableColMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,TableColValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        TableColToValues(options);
    }
}