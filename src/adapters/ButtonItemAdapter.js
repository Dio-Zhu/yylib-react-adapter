import {PropAdapter} from '../index-deps';
import ButtonItemToValues from '../settings/button/ButtonItemToValues';
export default class ButtonItemAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    //     return super.onPageMetas(options);
    // }
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
        ButtonItemToValues(options);
    }
}