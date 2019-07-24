import {PropAdapter} from '../../index-deps';
import CheckboxGroupMeta from '../../settings/forminputs/checkbox/CheckboxGroupMeta';
import CheckboxGroupToValues from '../../settings/forminputs/checkbox/CheckboxGroupToValues';
import CheckboxGroupValues from '../../settings/forminputs/checkbox/CheckboxGroupValues';
import CheckboxGroupPage from '../../settings/forminputs/checkbox/CheckboxGroupPage';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class CheckboxGroupAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = CheckboxGroupMeta(options);
        return baseMetas.concat(myMetas);
    }
    //配置页面的属性
    onPageProps(options){
        return CheckboxGroupPage(options);
    }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = CheckboxGroupValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CheckboxGroupToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}