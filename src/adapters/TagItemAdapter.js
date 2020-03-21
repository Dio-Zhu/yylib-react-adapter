import MyPropAdapter from '../MyPropAdapter';
import TagItemToValues from '../settings/taggroup/TagItemToValues';
export default class TagItemAdapter extends MyPropAdapter{

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
        TagItemToValues(options);
    }
}