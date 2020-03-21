import {MetaType} from '../../index-deps';
import Utils from '../../Utils';
import FormItemType from '../forminputs/FormItemType';
import {UiTitleDef} from '../../MyUiDefines';
import FormInputsMeta from '../forminputs/FormInputsMeta';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    //表单字段公共的属性
    var PropMeta = [ {
            name: 'uisubtype',
            label: '输入方式',
            type: MetaType.Select,
            props: {
                options: [
                    {value: FormItemType.input, text: UiTitleDef.input},
                    {value: FormItemType.inputhidden, text: UiTitleDef.inputhidden},
                    {value: FormItemType.date, text: UiTitleDef.datepicker},
                    {value: FormItemType.time, text: UiTitleDef.timepicker},
                    {value: FormItemType.rangepicker, text: UiTitleDef.rangepicker},
                    {value: FormItemType.number, text: UiTitleDef.inputnumber},
                    {value: FormItemType.currency, text: UiTitleDef.currency},
                    {value: FormItemType.textarea, text: UiTitleDef.textarea},
                    {value: FormItemType.inputrefer, text: UiTitleDef.inputrefer},
                    {value: FormItemType.switch, text: UiTitleDef.switch},
                    {value: FormItemType.select, text: UiTitleDef.select},
                    {value: FormItemType.enumselect, text: UiTitleDef.enumselect},
                    {value: FormItemType.attachupload, text: UiTitleDef.attachupload},
                    {value: FormItemType.imageupload, text: UiTitleDef.imageupload},
                    {value: FormItemType.cascader, text: UiTitleDef.cascader},
                    {value: FormItemType.radiogroup, text: UiTitleDef.radiogroup},
                    {value: FormItemType.checkboxgroup, text: UiTitleDef.checkboxgroup},
                    {value: FormItemType.inputmap, text: UiTitleDef.inputmap},
                    {value: FormItemType.editor, text: UiTitleDef.editor},
                    {value: FormItemType.attachmgrw, text: UiTitleDef.attachmgrw},
                    {value: FormItemType.plaintext, text: UiTitleDef.text},
                    {value: FormItemType.autoselect, text: UiTitleDef.autoselect},
                    {value: FormItemType.inputbutton, text: UiTitleDef.inputbutton},
                ]
            },
            defaultValue: FormItemType.input
        }, {
            name: 'labelHelp',
            label: '帮助信息',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        }];
        //隐藏输入框-移除一些属性
        if(tplNode.uisubtype !== FormItemType.inputhidden) {
            PropMeta.push({
                name: 'extra',
                label: '提示信息',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            });
        }
        PropMeta = PropMeta.concat([{
            name: 'visible',
            label: '是否显示',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        }, {
            name: 'disabled',
            label: '是否禁用',
            type: MetaType.Bool,
            props: {
                checkedChildren: "是",
                unCheckedChildren: "否",
            },
            defaultValue: false
        }, {
            name: 'newline',
            label: '占用整行',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'rowBreak',
            label: '强制换行',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'required',
            label: '是否必填',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }, {
            name: 'mathFormula',
            label: '计算公式',
            type: MetaType.MathFormula,
            props: {
                options:function(){
                    //获取父级节点
                    var parentNode = Utils.findParentNode(tplTree,tplNode.nid);
                    //获取同级兄弟节点
                    var fieldsNode = parentNode&&parentNode.children?parentNode.children:[];
                    var fields = [];
                    fieldsNode.forEach(function(node,index){
                        //排除自己(即运算列本身不能参与公式计算)，排除其它运算公式列
                        if(tplNode.nid !== node.nid && !node.mathFormula && node.uikey){
                            fields.push({key:node.uikey,title:node.uititle});
                        }
                    });
                    return fields;
                }()//注意立即执行
            },
            defaultValue: null
        }]);
        //隐藏输入框-移除一些属性
        if(tplNode.uisubtype !== FormItemType.inputhidden) {
            PropMeta.push({
                name: 'pattern',
                label: '正则验证',
                help: '如需进行一些特殊验证，填入相关正则表达式进行验证',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            });
            PropMeta.push({
                name: 'patternMsg',
                label: '错误提示',
                type: MetaType.Text,
                help: '正则验证不通过时给出的错误提示信息',
                props: {},
                defaultValue: ''
            });
        }
        PropMeta = PropMeta.concat([
            {
                name: 'labelCol',
                label: '标签宽度',
                type: MetaType.Number,
                props: { max: 24, enableSelect: false},
                defaultValue: 6
            }, {
                name: 'wrapperCol',
                label: '内容宽度',
                type: MetaType.Number,
                props: { max: 24, enableSelect: false},
                defaultValue: 14
            }
        ]);

    // 获取全部FormInputType对应的配置
    var inputsPropMeta = FormInputsMeta(options);
    // 获取当前uisubtype对应的配置
    var uisubtypeMeta = inputsPropMeta[tplNode.uisubtype];
    // 组织成完整的配置
    var formMeta = uisubtypeMeta?PropMeta.concat(uisubtypeMeta):PropMeta;

    return formMeta;
}