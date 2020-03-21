/**
 * toNode回调方法，传递参数对象 options:{
 *  treeData - 当前树结构
 *  currNode - 当前结点对象
 *  tplNode - 即将添加的新子节点对象
 *  parser - 新子节点对象对应的组件解析器
 * }
 */
import FormItemType from './FormItemType';
import {UiTypeDef} from '../../MyUiDefines';
module.exports = function(options){
    let {tplTree,tplNode,tplParentNode} = options;
    if(tplParentNode.uitype == UiTypeDef.formw){//父节点为表单项
        tplNode.label = tplNode.uititle;
        //配置uisubtype为FormItemType值
        if(tplNode.uitype == UiTypeDef.input){
            tplNode.uisubtype = FormItemType.input;
        }else if(tplNode.uitype == UiTypeDef.inputnumber){
            tplNode.uisubtype = FormItemType.number;
        }else if(tplNode.uitype == UiTypeDef.textarea){
            tplNode.uisubtype = FormItemType.textarea;
        }else if(tplNode.uitype == UiTypeDef.datepicker){
            tplNode.uisubtype = FormItemType.date;
        }else if(tplNode.uitype == UiTypeDef.timepicker){
            tplNode.uisubtype = FormItemType.time;
        }else if(tplNode.uitype == UiTypeDef.rangepicker){
            tplNode.uisubtype = FormItemType.rangepicker;
        }else if(tplNode.uitype == UiTypeDef.inputrefer){
            tplNode.uisubtype = FormItemType.inputrefer;
        }else if(tplNode.uitype == UiTypeDef.switch){
            tplNode.uisubtype = FormItemType.switch;
        }else if(tplNode.uitype == UiTypeDef.select){
            tplNode.uisubtype = FormItemType.select;
        }else if(tplNode.uitype == UiTypeDef.enumselect){
            tplNode.uisubtype = FormItemType.enumselect;
        }else if(tplNode.uitype == UiTypeDef.attachupload){
            tplNode.uisubtype = FormItemType.attachupload;
        }else if(tplNode.uitype == UiTypeDef.cascader){
            tplNode.uisubtype = FormItemType.cascader;
        }else if(tplNode.uitype == UiTypeDef.imageupload){
            tplNode.uisubtype = FormItemType.imageupload;
        }else if(tplNode.uitype == UiTypeDef.radiogroup){
            tplNode.uisubtype = FormItemType.radiogroup;
        }else if(tplNode.uitype == UiTypeDef.checkboxgroup){
            tplNode.uisubtype = FormItemType.checkboxgroup;
        }else if(tplNode.uitype == UiTypeDef.inputmap){
            tplNode.uisubtype = FormItemType.inputmap;
        }else if(tplNode.uitype == UiTypeDef.editor){
            tplNode.uisubtype = FormItemType.editor;
        }else if(tplNode.uitype == UiTypeDef.attachmgrw){
            tplNode.uisubtype = FormItemType.attachmgrw;
        }else if(tplNode.uitype == UiTypeDef.timepicker){
            tplNode.uisubtype = FormItemType.time;
        }else if(tplNode.uitype == UiTypeDef.text){
            tplNode.uisubtype = FormItemType.plaintext;
        }else if(tplNode.uitype == UiTypeDef.autoselect){
            tplNode.uisubtype = FormItemType.autoselect;
        }else if(tplNode.uitype == UiTypeDef.inputbutton){
            tplNode.uisubtype = FormItemType.inputbutton;
        }
        //将uitype统一转换为FormItemWidget
        tplNode.uitype = UiTypeDef.formitemw;
    }
};
