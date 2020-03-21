import MyPropAdapter from '../../MyPropAdapter';
import InputReferMeta from '../../settings/forminputs/inputrefer/InputReferMeta';
import InputReferToValues from '../../settings/forminputs/inputrefer/InputReferToValues';
import InputReferValues from '../../settings/forminputs/inputrefer/InputReferValues';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class InputReferAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = InputReferMeta(options);
        return (baseMetas||[]).concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = InputReferValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        InputReferToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}