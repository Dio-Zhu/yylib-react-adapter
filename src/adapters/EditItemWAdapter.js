import {PropAdapter} from '../index-deps';
import EditItemWMeta from '../settings/edittablew/EditItemWMeta';
import EditItemWToValues from '../settings/edittablew/EditItemWToValues';
import EditItemWValues from '../settings/edittablew/EditItemWValues';
import EditItemWPage from '../settings/edittablew/EditItemWPage';
export default class EditItemWAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(EditItemWMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return EditItemWPage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,EditItemWValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        EditItemWToValues(options);
    }
}