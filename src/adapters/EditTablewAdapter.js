import {PropAdapter} from '../index-deps';
import EditTablewMeta from '../settings/edittablew/EditTablewMeta';
import EditTablewToValues from '../settings/edittablew/EditTablewToValues';
import EditTablewValues from '../settings/edittablew/EditTablewValues';
import EditTablewPage from '../settings/edittablew/EditTablewPage';
export default class EditTablewAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(EditTablewMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return EditTablewPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,EditTablewValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        EditTablewToValues(options);
    }
}