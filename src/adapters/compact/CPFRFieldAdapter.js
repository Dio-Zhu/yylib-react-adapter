import {PropAdapter} from '../../index-deps';
import CPFRFieldMeta from '../../settings/compact/CPFRFieldMeta';
import CPFRFieldToValues from '../../settings/compact/CPFRFieldToValues';
import CPFRFieldValues from '../../settings/compact/CPFRFieldValues';

export default class CPFRFieldAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(CPFRFieldMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,CPFRFieldValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CPFRFieldToValues(options);
    }
}