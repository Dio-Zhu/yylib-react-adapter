import {PropAdapter} from '../../index-deps';
import ImageUploadMeta from '../../settings/forminputs/imageupload/ImageUploadMeta';
import ImageUploadToValues from '../../settings/forminputs/imageupload/ImageUploadToValues';
import ImageUploadValues from '../../settings/forminputs/imageupload/ImageUploadValues';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class ImageUploadAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = ImageUploadMeta(options);
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = ImageUploadValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        ImageUploadToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}