import {PropAdapter} from '../index-deps';
import BpmApprovewMeta from '../settings/bpm/BpmApprovewMeta';
import BpmApprovewToValues from '../settings/bpm/BpmApprovewToValues';
import BpmApprovewValues from '../settings/bpm/BpmApprovewValues';
export default class BpmApprovewAdapterAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(BpmApprovewMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,BpmApprovewValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
         super.onValueToData(options);
         BpmApprovewToValues(options);
    }
}