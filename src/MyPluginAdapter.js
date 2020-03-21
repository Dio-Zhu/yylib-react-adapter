import {PropAdapter,MetaType} from "./index-deps";
import MyPropMeta from './MyPropMeta';
import MyPropDataToValue from './MyPropDataToValue';
import MyPropValueToData from './MyPropValueToData';
/**
 * 插件转换适配器
 */
export default class MyPluginAdapter extends PropAdapter{
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = MyPropMeta(options);
        baseMetas.unshift({
            name: 'uitype',
            label: '解析器',
            type: MetaType.Text,
            props: {},
            defaultValue:'UnKnowWidget'
        });
        return baseMetas;
    }

    //数据转换为值的适配
    onDataToValue(options){
        return MyPropDataToValue(options);
    }

    //值转换为数据的适配
    onValueToData(options){
        MyPropValueToData(options);
    }
}