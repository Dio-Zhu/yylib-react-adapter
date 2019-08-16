import {MetaType} from '../../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.text){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.text||
    //     tplNode.uitype == UiTypeDef.formitemw) {
        PropMeta = PropMeta.concat([//文本框扩展的配置
            {
                name: 'fieldtype',
                label: '数据类型',
                help:'定义后端存储的值类型',
                type: MetaType.Select,
                props: {

                    options: [
                        {value: 'string', text: '字符串'},
                        {value: 'date', text: '日期值'},
                        {value: 'number', text: '整数值'},
                        {value: 'currency', text: '精数值'}
                    ]
                },
                defaultValue: 'string'
            }])
        if(tplNode.fieldtype==='currency'){
            PropMeta.push({
                name: 'comma',
                label: '千分位',
                type: MetaType.Bool,
                props: {

                },
                defaultValue: true
            },{
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
            },);
        }
        if(tplNode.fieldtype==='date'){
            PropMeta.push({
                name: 'format',
                label: '日期格式',
                type: MetaType.Select,
                props: {

                    options: ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm', 'yyyy-MM', 'yyyy/MM']
                },
                defaultValue: 'yyyy-MM-dd'
            })
        }
        PropMeta = PropMeta.concat([{
                name: 'value',
                label: '默认值',
                type: MetaType.Text,
                props: {

                    enableSelect: false
                },
                defaultValue: null
            },
            {
                name: 'addonAfter',
                label: '文本后缀',
                type: MetaType.Text,
                props: {

                },
                defaultValue: ''
            },
        ]);
    // }
    return PropMeta;
}