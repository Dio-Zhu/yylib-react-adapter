import {PropAdapter} from '../../index-deps';
import RadioGroupMeta from '../../settings/forminputs/radio/RadioGroupMeta';
import RadioGroupToValues from '../../settings/forminputs/radio/RadioGroupToValues';
import RadioGroupValues from '../../settings/forminputs/radio/RadioGroupValues';
import RadioGroupPage from '../../settings/forminputs/radio/RadioGroupPage';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class RadioGroupAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = RadioGroupMeta(options);
        return baseMetas.concat(myMetas);
    }
    //配置页面的属性
    onPageProps(options){
        return RadioGroupPage(options);
    }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = RadioGroupValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        RadioGroupToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}