import {MetaType,SUPPORT_SERVER} from '../../index-deps';

module.exports = function(options) {
    var PropMeta = [
    {
        name: 'billTypeId',
        label: '单据类型',
        type: MetaType.Refer,
        props:{

            refinfokey: 'bill_001',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    },{
        name: 'type',
        label: '颜色',
        help:'按钮的填充颜色',
        type: MetaType.Select,
        props: {

            options:[{text:'灰色',value:'default'},{text:'蓝色',value:'primary'},{text:'绿色',value:'success'},{text:'红色',value:'error'},{text:'黄色',value:'warning'}]
        },
        defaultValue: 'default'
    },{
        name: 'ghost',
        label: '透明',
        help:'按钮的内部是否填充颜色',
        type: MetaType.Bool,
        props: {},
        defaultValue: false
    },{
        name: 'visible',
        label: '显示',
        type: MetaType.Bool,
        props: {},
        defaultValue: true
    },{
        name: 'serUrl',
        label: '服务地址',
        type: MetaType.Text,
        props:{

        },
        defaultValue: null
    },{
        name: 'enableUser',
        label: '当前用户',
        type: MetaType.Bool,
        props:{

        },
        defaultValue: true
    },{
        name: 'enableOrg',
        label: '当前组织',
        type: MetaType.Bool,
        props:{

        },
        defaultValue: true
    }];
    return PropMeta;
}