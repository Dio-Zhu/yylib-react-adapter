import MyPropAdapter from '../MyPropAdapter';
import AccordionMeta from '../settings/accordions/AccordionMeta';
import AccordionToValues from '../settings/accordions/AccordionToValues';
export default class AccordionAdapter extends MyPropAdapter{

    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let metas = super.onPageMetas(options);
        let myMetas = AccordionMeta(options);
        return metas.concat(myMetas);
    }

    // //配置页面的属性
    // onPageProps(options){
    // }

    // //数据转换为值的适配
    // onDataToValue(options){
    // }

    //值转换为数据的适配
    onValueToData(options){
        super.onValueToData(options);
        AccordionToValues(options);
    }

}