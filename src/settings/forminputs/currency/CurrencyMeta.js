import {MetaType} from '../../../index-deps';
import {UiTypeDef} from '../../../Defines';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.currency){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.currency//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    //     ||tplNode.uitype == UiTypeDef.searchitem//条件项
    // ) {
        PropMeta = PropMeta.concat([
            {
                name: 'decimal',
                label: '保留小数',
                type: MetaType.Number,
                help:'计算或存储的精度小数位（即输入时显示的精度小数位）',
                props: {

                    enableSelect: false,
                    min: 0,
                    max: 10
                },
                defaultValue: 3
            },{
                name: 'showDecimal',
                label: '显示小数',
                help:'显示的小数位，不会影响存储的精度（即非输入时显示的小数位）',
                type: MetaType.Select,
                props: {

                    options: function(){
                        let list = [{text: '按保留小数位显示', value: ''}];
                        for(let i=1;i<=10;i++){
                            list.push({text: '显示'+i+'位', value: i});
                        }
                        return list;
                    }()
                },
                defaultValue: undefined
            },{
                name: 'zeroFilling',
                label: '自动补零',
                help:'当小数位不足指定个数位时，是否自动补零',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: true
            },{
                name: 'enableCalc',
                label: '计算器',
                help:'当启用时提供便捷计算器功能',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }, {
                name: 'symbol',
                label: '货币符号',
                type: MetaType.Select,
                props: {

                    options: [{text: '￥', value: '￥'}, {text: '$', value: '$'}, {text: '无', value: ' '}]  // 目前仅提供人名币和美元符号
                },
                defaultValue: ' '
            }, {
                name: 'addonAfter',
                label: '文本后缀',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            }, {
                name: 'direction',
                label: '文本朝向',
                type: MetaType.Select,
                props: {

                    options: [{value: 'left', text: '左对齐'}, {value: 'right', text: '右对齐'}]
                },
                defaultValue: 'right'
            }, {
                name: 'min',
                label: '最小值',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            }, {
                name: 'max',
                label: '最大值',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            }]);
        //编辑表格中不显示精确数值框本身的千分位配置
        if(tplNode.uitype !== UiTypeDef.edititemw){
            PropMeta.push({
                name: 'commaVisible',
                label: '千分位',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: true
            });
        }
        PropMeta = PropMeta.concat([{
                name:'placeholder',
                label:'置空提示',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            },{
                name: 'minus',
                label: '允许负数',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            },{
                name: 'precisionConfig',
                label: '精度参数',
                type: MetaType.EnumSelect,
                props: {

                    code:'precision_config',
                    valueKey:'code'
                },
                defaultValue: null
            },{
                name:'range',
                label:'范围取值',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: false
            }
        ]);
    // }
    return PropMeta;
}
