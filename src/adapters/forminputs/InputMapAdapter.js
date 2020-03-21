import MyPropAdapter from '../../MyPropAdapter';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class InputMapAdapter extends MyPropAdapter{

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
    // //值转换为数据的适配
    // onValueToData(options){
    //      super.onValueToData(options);
    // }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}