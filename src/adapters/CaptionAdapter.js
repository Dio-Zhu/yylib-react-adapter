import {PropAdapter} from '../index-deps';
import CaptionToValues from '../settings/caption/CaptionToValues';
export default class CaptionAdapter extends PropAdapter{

    //--------------生命周期方法--------------------
    // //配置页面的元数据
    // onPageMetas(options){
    //     return super.onPageMetas(options);
    // }
    // //配置页面的属性
    // onPageProps(options){
    //     return super.onPageProps(options);
    // }
    // //数据转换为值的适配
    // onDataToValue(options){
    //     return super.onDataToValue(options);
    // }
    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        CaptionToValues(options);
    }

    //当前数据被创建时的适配
    onCreateData(options){
        let {tplTree,tplNode,tplParentNode} = options;
        tplNode.children = tplNode.uititle;
    }
}