import {PropAdapter} from '../index-deps';
import PrintButtonMeta from '../settings/printbutton/PrintButtonMeta';
import PrintButtonToValues from '../settings/printbutton/PrintButtonToValues';
import PrintButtonValues from '../settings/printbutton/PrintButtonValues';
export default class PrintButtonAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(PrintButtonMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,PrintButtonValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        PrintButtonToValues(options);
    }
}