import {PropAdapter} from '../index-deps';
import FormItemwMeta from '../settings/formw/FormItemwMeta';
import FormItemwToValues from '../settings/formw/FormItemwToValues';
import FormItemwValues from '../settings/formw/FormItemwValues';
import FormItemwPage from '../settings/formw/FormItemwPage';
export default class FormItemwAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(FormItemwMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return FormItemwPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,FormItemwValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        FormItemwToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        tplNode.label = tplNode.uititle;
    }
}