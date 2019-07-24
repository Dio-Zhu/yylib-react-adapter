import {PropAdapter} from '../../index-deps';
import EditorMeta from '../../settings/forminputs/editor/EditorMeta';
import EditorToValues from '../../settings/forminputs/editor/EditorToValues';
import EditorValues from '../../settings/forminputs/editor/EditorValues';
export default class EditorAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        let myMetas = EditorMeta(options);
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = EditorValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        EditorToValues(options);
    }
}