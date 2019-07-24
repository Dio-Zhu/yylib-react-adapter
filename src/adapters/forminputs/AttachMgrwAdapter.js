import {PropAdapter,MetaType} from '../../index-deps';
import AttachMgrwMeta from '../../settings/forminputs/attachmgrw/AttachMgrwMeta';
import AttachMgrwToValues from '../../settings/forminputs/attachmgrw/AttachMgrwToValues';
import AttachMgrwValues from '../../settings/forminputs/attachmgrw/AttachMgrwValues';
import FormInputsToNode from  '../../settings/forminputs/FormInputsToNode';
export default class AttachMgrwAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = super.onPageMetas(options);
        baseMetas.push({
            name: 'sourceId',
            label: '单据标识',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        });
        let myMetas = AttachMgrwMeta(options);
        return baseMetas.concat(myMetas);
    }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    //数据转换为值的适配
    onDataToValue(options){
        let baseFormData = super.onDataToValue(options);
        let myFormData = AttachMgrwValues(options);
        return Object.assign(baseFormData,myFormData);
    }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        AttachMgrwToValues(options);
    }
    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        FormInputsToNode(options);
    }
}