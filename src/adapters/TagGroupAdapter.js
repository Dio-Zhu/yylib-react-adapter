import {PropAdapter} from '../index-deps';
import TagGroupPage from '../settings/taggroup/TagGroupPage';
import TagGroupToValues from '../settings/taggroup/TagGroupToValues';
export default class TagGroupAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    //     return super.onPageMetas(options);
    // }
    //配置页面的属性
    onPageProps(options){
        return TagGroupPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        TagGroupToValues(options);
    }
}