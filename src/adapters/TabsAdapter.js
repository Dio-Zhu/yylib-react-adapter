import {PropAdapter} from '../index-deps';
import TabsMeta from '../settings/tabs/TabsMeta';
import TabsPage from '../settings/tabs/TabsPage';
export default class TabsAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(TabsMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return TabsPage(options);
    }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    // //值转换为数据的适配
    // onValueToData(options){
    //      super.onValueToData(options);
    // }
}