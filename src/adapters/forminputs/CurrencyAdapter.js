import {PropAdapter} from '../../index-deps';
import CurrencyMeta from '../../settings/forminputs/currency/CurrencyMeta';
import CurrencyToValues from '../../settings/forminputs/currency/CurrencyToValues';
import CurrencyValues from '../../settings/forminputs/currency/CurrencyValues';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class CurrencyAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = CurrencyMeta(options);
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = CurrencyValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CurrencyToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}