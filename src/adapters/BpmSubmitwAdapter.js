import MyPropAdapter from '../MyPropAdapter';
import BpmSubmitwMeta from '../settings/bpm/BpmSubmitwMeta';
import BpmSubmitwToValues from '../settings/bpm/BpmSubmitwToValues';
import BpmSubmitwValues from '../settings/bpm/BpmSubmitwValues';
export default class BpmSubmitwAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return (baseMetas||[]).concat(BpmSubmitwMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,BpmSubmitwValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        BpmSubmitwToValues(options);
    }
}