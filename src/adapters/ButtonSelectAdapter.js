import {PropAdapter} from '../index-deps';
import ButtonSelectMeta from '../settings/button/ButtonSelectMeta';
import ButtonSelectPage from '../settings/button/ButtonSelectPage';
import ButtonSelectToValues from '../settings/button/ButtonSelectToValues';
export default class ButtonSelectAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(ButtonSelectMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return ButtonSelectPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        ButtonSelectToValues(options);
    }
}