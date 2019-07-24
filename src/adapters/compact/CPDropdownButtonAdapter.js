import {PropAdapter} from '../../index-deps';
import CPDropdownButtonPage from '../../settings/compact/CPDropdownButtonPage';
import CPDropdownButtonToValues from '../../settings/compact/CPDropdownButtonToValues';
export default class CPDropdownButtonAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    //     return super.onPageMetas(options);
    // }
    //配置页面的属性
    onPageProps(options){
        return CPDropdownButtonPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CPDropdownButtonToValues(options);
    }
}