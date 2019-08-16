import {PropAdapter} from '../index-deps';
import TableMeta from '../settings/table/TableMeta';
import TableToValues from '../settings/table/TableToValues';
import TableValues from '../settings/table/TableValues';
import TablePage from '../settings/table/TablePage';
export default class TableAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        return baseMetas.concat(TableMeta(options));
    }
    //配置页面的属性
    onPageProps(options){
        return TablePage(options);
    }
    onDataToValue(options){
        let newFormData = super.onDataToValue(options);
        return Object.assign(newFormData,TableValues(options));
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        TableToValues(options);
    }
}