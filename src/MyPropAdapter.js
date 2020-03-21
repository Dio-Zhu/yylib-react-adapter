import {PropAdapter,MetaType} from "./index-deps";
import MyPropMeta from './MyPropMeta';
import MyPropDataToValue from './MyPropDataToValue';
import MyPropValueToData from './MyPropValueToData';

export default class MyPropAdapter extends PropAdapter{
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = MyPropMeta(options);
        return baseMetas;
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let newFormData = MyPropDataToValue(options);
        return newFormData;
    }
    //值转换为数据的适配
    onValueToData(options){
        MyPropValueToData(Object.assign({keepDefaultValue:false},options));
    }
}