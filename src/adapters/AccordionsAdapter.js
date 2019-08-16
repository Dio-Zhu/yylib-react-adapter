import {PropAdapter} from '../index-deps';
import AccordionsPage from '../settings/accordions/AccordionsPage';
export default class AccordionsAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    // }

    //配置页面的属性
    onPageProps(options){
        return AccordionsPage(options);
    }

    // //数据转换为值的适配
    // onDataToValue(options){
    // }
    //
    // //值转换为数据的适配
    // onValueToData(options){
    // }
}