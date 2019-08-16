import {PropAdapter} from '../../index-deps';
import CPAuditInfoMeta from '../../settings/compact/CPAuditInfoMeta';
import CPAuditInfoToValues from '../../settings/compact/CPAuditInfoToValues';
import CPAuditInfoValues from '../../settings/compact/CPAuditInfoValues';
export default class CPAuditInfoAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(CPAuditInfoMeta(options));
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,CPAuditInfoValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CPAuditInfoToValues(options);
    }
}