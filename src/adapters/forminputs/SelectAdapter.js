import {PropAdapter} from '../../index-deps';
import SelectMeta from '../../settings/forminputs/select/SelectMeta';
import SelectToValues from '../../settings/forminputs/select/SelectToValues';
import SelectValues from '../../settings/forminputs/select/SelectValues';
import SelectPage from '../../settings/forminputs/select/SelectPage';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class SelectAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = SelectMeta(options);
        return baseMetas.concat(myMetas);
    }
    //配置页面的属性
    onPageProps(options){
        return SelectPage(options);
    }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = SelectValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        SelectToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}