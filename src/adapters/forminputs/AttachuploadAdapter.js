import {PropAdapter} from '../../index-deps';
import AttachuploadMeta from '../../settings/forminputs/attachupload/AttachuploadMeta';
import AttachuploadToValues from '../../settings/forminputs/attachupload/AttachuploadToValues';
import AttachuploadValues from '../../settings/forminputs/attachupload/AttachuploadValues';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class AttachuploadAdapter extends PropAdapter{
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = AttachuploadMeta(options);
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = AttachuploadValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        AttachuploadToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}